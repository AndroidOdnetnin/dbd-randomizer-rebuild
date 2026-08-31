"use client";

import { useEffect, useState } from "react";
import {
  getSurvivors,
  getKillers,
  getSurvivorPerks,
  getKillerPerks,
  getItems,
  getKillerAddons,
  getAddonById,
  getSurvivorOfferings,
  getKillerOfferings,
  pickRandomExcluding,
} from "@/lib/utils/randomizer";
import type { Survivor, Killer, Perk, Item, Addon, Offering } from "@/lib/types/dbd";

interface SurvivorLoadout {
  survivor: Survivor;
  perks: Perk[];
  item: Item | null;
  addons: string[];
  offering: Offering | null;
}

interface KillerLoadout {
  killer: Killer;
  perks: Perk[];
  addons: Addon[];
  offering: Offering | null;
}

interface SavedPreset {
  id: string;
  name: string;
  savedAt: number;
  survivor: SurvivorLoadout | null;
  killer: KillerLoadout | null;
}

const FAVORITES_STORAGE_KEY = "dbd-randomizer-favorites";

function loadFavorites(): SavedPreset[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(FAVORITES_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as SavedPreset[]) : [];
  } catch {
    return [];
  }
}

// Tracks ids that have been individually "omitted" (e.g. not unlocked / not owned)
// so they are excluded from re-rolls until the next full Randomize clears them.
// Survivor-side and Killer-side pools are kept separate so resetting one side's
// omissions (e.g. Randomize on the Survivor tab) never affects the other side.
interface OmitSets {
  survivors: Set<string>;
  killers: Set<string>;
  survivorPerks: Set<string>;
  killerPerks: Set<string>;
  items: Set<string>;
  itemAddons: Set<string>;
  killerAddons: Set<string>;
  survivorOfferings: Set<string>;
  killerOfferings: Set<string>;
}

function freshOmitSets(): OmitSets {
  return {
    survivors: new Set(),
    killers: new Set(),
    survivorPerks: new Set(),
    killerPerks: new Set(),
    items: new Set(),
    itemAddons: new Set(),
    killerAddons: new Set(),
    survivorOfferings: new Set(),
    killerOfferings: new Set(),
  };
}

function freshSurvivorOmitSets(prev: OmitSets): OmitSets {
  const fresh = freshOmitSets();
  return { ...fresh, killers: prev.killers, killerPerks: prev.killerPerks, killerAddons: prev.killerAddons, killerOfferings: prev.killerOfferings };
}

function freshKillerOmitSets(prev: OmitSets): OmitSets {
  const fresh = freshOmitSets();
  return { ...fresh, survivors: prev.survivors, survivorPerks: prev.survivorPerks, items: prev.items, itemAddons: prev.itemAddons, survivorOfferings: prev.survivorOfferings };
}

export default function Home() {
  const [survivorLoadout, setSurvivorLoadout] = useState<SurvivorLoadout | null>(null);
  const [killerLoadout, setKillerLoadout] = useState<KillerLoadout | null>(null);
  const [activeTab, setActiveTab] = useState<"survivor" | "killer" | "both">("both");
  const [omit, setOmit] = useState<OmitSets>(freshOmitSets());
  const [favorites, setFavorites] = useState<SavedPreset[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    setFavorites(loadFavorites());
  }, []);

  const persistFavorites = (next: SavedPreset[]) => {
    setFavorites(next);
    window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(next));
  };

  const saveCurrentLoadout = () => {
    if (!survivorLoadout && !killerLoadout) return;
    const parts = [survivorLoadout?.survivor.name, killerLoadout?.killer.name].filter(Boolean);
    const preset: SavedPreset = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: parts.join(" vs ") || "Saved Loadout",
      savedAt: Date.now(),
      survivor: survivorLoadout,
      killer: killerLoadout,
    };
    persistFavorites([preset, ...favorites]);
  };

  const loadFavorite = (preset: SavedPreset) => {
    if (preset.survivor) setSurvivorLoadout(preset.survivor);
    if (preset.killer) setKillerLoadout(preset.killer);
    setShowFavorites(false);
  };

  const deleteFavorite = (id: string) => {
    persistFavorites(favorites.filter((f) => f.id !== id));
  };

  const rollItemAddons = (item: Item | null, excludeAddons: Set<string>): string[] => {
    if (!item?.addons) return [];
    const available = item.addons.filter((a) => !excludeAddons.has(a));
    const shuffled = [...available].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(2, shuffled.length));
  };

  const rollSurvivorLoadout = (omitSets: OmitSets): SurvivorLoadout | null => {
    const survivor = pickRandomExcluding(getSurvivors(), omitSets.survivors, (s) => s.id);
    if (!survivor) return null;
    const perkPool = getSurvivorPerks().filter((p) => !omitSets.survivorPerks.has(p.id));
    const shuffledPerks = [...perkPool].sort(() => Math.random() - 0.5).slice(0, 4);
    const availableItems = getItems().filter((i) => !omitSets.items.has(i.id));
    const item =
      availableItems.length > 0 && Math.random() > 0.3
        ? availableItems[Math.floor(Math.random() * availableItems.length)]
        : null;
    const addons = rollItemAddons(item, omitSets.itemAddons);
    const offering = pickRandomExcluding(getSurvivorOfferings(), omitSets.survivorOfferings, (o) => o.id);
    return { survivor, perks: shuffledPerks, item, addons, offering };
  };

  const rollKillerLoadout = (omitSets: OmitSets): KillerLoadout | null => {
    const killer = pickRandomExcluding(getKillers(), omitSets.killers, (k) => k.id);
    if (!killer) return null;
    const perkPool = getKillerPerks().filter((p) => !omitSets.killerPerks.has(p.id));
    const shuffledPerks = [...perkPool].sort(() => Math.random() - 0.5).slice(0, 4);
    const addonPool = getKillerAddons(killer.name).filter((a) => !omitSets.killerAddons.has(a.id));
    const shuffledAddons = [...addonPool].sort(() => Math.random() - 0.5).slice(0, 2);
    const offering = pickRandomExcluding(getKillerOfferings(), omitSets.killerOfferings, (o) => o.id);
    return { killer, perks: shuffledPerks, addons: shuffledAddons, offering };
  };

  // Full reset: clears only this side's omissions (the other side's loadout/omissions are untouched).
  const handleRandomizeSurvivor = () => {
    const next = freshSurvivorOmitSets(omit);
    setOmit(next);
    setSurvivorLoadout(rollSurvivorLoadout(next));
  };

  const handleRandomizeKiller = () => {
    const next = freshKillerOmitSets(omit);
    setOmit(next);
    setKillerLoadout(rollKillerLoadout(next));
  };

  const handleRandomizeAll = () => {
    const fresh = freshOmitSets();
    setOmit(fresh);
    setSurvivorLoadout(rollSurvivorLoadout(fresh));
    setKillerLoadout(rollKillerLoadout(fresh));
  };

  // Respin: reroll the same category without changing any omissions.
  const handleRespinSurvivor = () => setSurvivorLoadout(rollSurvivorLoadout(omit));
  const handleRespinKiller = () => setKillerLoadout(rollKillerLoadout(omit));

  // Per-element omit & respin: mark this specific thing as unavailable, then
  // reroll just that one slot, leaving the rest of the loadout untouched.
  const omitAndRerollSurvivor = () => {
    if (!survivorLoadout) return;
    const next = { ...omit, survivors: new Set(omit.survivors).add(survivorLoadout.survivor.id) };
    setOmit(next);
    const survivor = pickRandomExcluding(getSurvivors(), next.survivors, (s) => s.id);
    if (survivor) setSurvivorLoadout({ ...survivorLoadout, survivor });
  };

  const omitAndRerollKiller = () => {
    if (!killerLoadout) return;
    const next = { ...omit, killers: new Set(omit.killers).add(killerLoadout.killer.id) };
    setOmit(next);
    const killer = pickRandomExcluding(getKillers(), next.killers, (k) => k.id);
    if (killer) setKillerLoadout({ ...killerLoadout, killer });
  };

  const omitAndRerollSurvivorPerk = (index: number) => {
    if (!survivorLoadout) return;
    const perkToOmit = survivorLoadout.perks[index];
    const next = { ...omit, survivorPerks: new Set(omit.survivorPerks).add(perkToOmit.id) };
    setOmit(next);
    const usedIds = new Set(survivorLoadout.perks.map((p) => p.id));
    const pool = getSurvivorPerks().filter((p) => !next.survivorPerks.has(p.id) && !usedIds.has(p.id));
    const replacement = pool.length > 0 ? pool[Math.floor(Math.random() * pool.length)] : null;
    if (replacement) {
      const newPerks = [...survivorLoadout.perks];
      newPerks[index] = replacement;
      setSurvivorLoadout({ ...survivorLoadout, perks: newPerks });
    }
  };

  const omitAndRerollKillerPerk = (index: number) => {
    if (!killerLoadout) return;
    const perkToOmit = killerLoadout.perks[index];
    const next = { ...omit, killerPerks: new Set(omit.killerPerks).add(perkToOmit.id) };
    setOmit(next);
    const usedIds = new Set(killerLoadout.perks.map((p) => p.id));
    const pool = getKillerPerks().filter((p) => !next.killerPerks.has(p.id) && !usedIds.has(p.id));
    const replacement = pool.length > 0 ? pool[Math.floor(Math.random() * pool.length)] : null;
    if (replacement) {
      const newPerks = [...killerLoadout.perks];
      newPerks[index] = replacement;
      setKillerLoadout({ ...killerLoadout, perks: newPerks });
    }
  };

  const omitAndRerollItem = () => {
    if (!survivorLoadout) return;
    const nextItems = new Set(omit.items);
    if (survivorLoadout.item) nextItems.add(survivorLoadout.item.id);
    const next = { ...omit, items: nextItems };
    setOmit(next);
    const availableItems = getItems().filter((i) => !next.items.has(i.id));
    const item = availableItems.length > 0 ? availableItems[Math.floor(Math.random() * availableItems.length)] : null;
    const addons = rollItemAddons(item, next.itemAddons);
    setSurvivorLoadout({ ...survivorLoadout, item, addons });
  };

  const omitAndRerollAddon = (addonId: string) => {
    if (!survivorLoadout) return;
    const next = { ...omit, itemAddons: new Set(omit.itemAddons).add(addonId) };
    const usedIds = new Set(survivorLoadout.addons);
    const pool = (survivorLoadout.item?.addons ?? []).filter(
      (a) => !next.itemAddons.has(a) && !usedIds.has(a)
    );
    const replacement = pool.length > 0 ? pool[Math.floor(Math.random() * pool.length)] : null;
    const newAddons = survivorLoadout.addons
      .map((a) => (a === addonId ? replacement : a))
      .filter((a): a is string => a !== null && a !== undefined);
    setOmit(next);
    setSurvivorLoadout({ ...survivorLoadout, addons: newAddons });
  };

  const omitAndRerollKillerAddon = (index: number) => {
    if (!killerLoadout) return;
    const addonToOmit = killerLoadout.addons[index];
    const next = { ...omit, killerAddons: new Set(omit.killerAddons).add(addonToOmit.id) };
    setOmit(next);
    const usedIds = new Set(killerLoadout.addons.map((a) => a.id));
    const pool = getKillerAddons(killerLoadout.killer.name).filter(
      (a) => !next.killerAddons.has(a.id) && !usedIds.has(a.id)
    );
    const replacement = pool.length > 0 ? pool[Math.floor(Math.random() * pool.length)] : null;
    if (replacement) {
      const newAddons = [...killerLoadout.addons];
      newAddons[index] = replacement;
      setKillerLoadout({ ...killerLoadout, addons: newAddons });
    }
  };

  const omitAndRerollSurvivorOffering = () => {
    if (!survivorLoadout?.offering) return;
    const next = { ...omit, survivorOfferings: new Set(omit.survivorOfferings).add(survivorLoadout.offering.id) };
    setOmit(next);
    const offering = pickRandomExcluding(getSurvivorOfferings(), next.survivorOfferings, (o) => o.id);
    setSurvivorLoadout({ ...survivorLoadout, offering });
  };

  const omitAndRerollKillerOffering = () => {
    if (!killerLoadout?.offering) return;
    const next = { ...omit, killerOfferings: new Set(omit.killerOfferings).add(killerLoadout.offering.id) };
    setOmit(next);
    const offering = pickRandomExcluding(getKillerOfferings(), next.killerOfferings, (o) => o.id);
    setKillerLoadout({ ...killerLoadout, offering });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold text-white mb-3">DBD Randomizer</h1>
          <p className="text-xl text-gray-300">
            Ad-free, lightweight randomizer for Dead by Daylight
          </p>
          <p className="text-sm text-gray-400 leading-relaxed mt-3 max-w-xl mx-auto">
            Don&apos;t have something unlocked? Click &quot;Omit&quot; next to it to exclude it and roll a
            replacement. Omissions clear the next time you hit Randomize.
          </p>
        </header>

        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setActiveTab("survivor")}
            className={`px-6 py-2 rounded-lg font-bold transition ${
              activeTab === "survivor" ? "bg-blue-600 text-white" : "bg-slate-700 text-gray-300 hover:bg-slate-600"
            }`}
          >
            🎮 Survivor
          </button>
          <button
            onClick={() => setActiveTab("killer")}
            className={`px-6 py-2 rounded-lg font-bold transition ${
              activeTab === "killer" ? "bg-red-600 text-white" : "bg-slate-700 text-gray-300 hover:bg-slate-600"
            }`}
          >
            🔪 Killer
          </button>
          <button
            onClick={() => setActiveTab("both")}
            className={`px-6 py-2 rounded-lg font-bold transition ${
              activeTab === "both" ? "bg-purple-600 text-white" : "bg-slate-700 text-gray-300 hover:bg-slate-600"
            }`}
          >
            ⚙️ Both
          </button>
        </div>

        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          <button
            onClick={saveCurrentLoadout}
            disabled={!survivorLoadout && !killerLoadout}
            className="bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold py-2 px-4 rounded-lg transition disabled:opacity-40"
            title="Save the current loadout so you can come back to it later."
          >
            💾 Save Loadout
          </button>
          <button
            onClick={() => setShowFavorites((v) => !v)}
            className="bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold py-2 px-4 rounded-lg transition"
          >
            ⭐ Favorites ({favorites.length})
          </button>
        </div>

        {showFavorites && (
          <div className="max-w-5xl mx-auto mb-8 bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-lg font-bold text-white mb-4">Saved Loadouts</h3>
            {favorites.length === 0 ? (
              <p className="text-gray-400 text-sm">
                No saved loadouts yet. Randomize something, then click &quot;Save Loadout&quot;.
              </p>
            ) : (
              <div className="space-y-2">
                {favorites.map((preset) => (
                  <div
                    key={preset.id}
                    className="bg-slate-700 rounded-lg p-3 flex items-center justify-between gap-4"
                  >
                    <div>
                      <p className="text-white font-semibold">{preset.name}</p>
                      <p className="text-xs text-gray-400">
                        Saved {new Date(preset.savedAt).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <button
                        onClick={() => loadFavorite(preset)}
                        className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-1.5 px-3 rounded transition"
                      >
                        Load
                      </button>
                      <button
                        onClick={() => deleteFavorite(preset.id)}
                        className="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold py-1.5 px-3 rounded transition"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="max-w-5xl mx-auto">
          {activeTab === "both" && (
            <div className="text-center mb-8">
              <button
                onClick={handleRandomizeAll}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition"
              >
                🎲 Randomize Full Game
              </button>
            </div>
          )}

          {(activeTab === "survivor" || activeTab === "both") && (
            <div className="bg-slate-800 rounded-lg p-8 mb-8 border border-blue-500/30">
              <h2 className="text-2xl font-bold text-white mb-6">Survivor Randomizer</h2>

              <div className="flex gap-2 mb-6 flex-wrap">
                <button
                  onClick={handleRandomizeSurvivor}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition"
                >
                  🎲 Randomize
                </button>
                <button
                  onClick={handleRespinSurvivor}
                  disabled={!survivorLoadout}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition disabled:opacity-50"
                >
                  ↻ Respin
                </button>
              </div>

              {survivorLoadout && (
                <div className="space-y-6">
                  <div className="bg-slate-700 rounded-lg p-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {survivorLoadout.survivor.name}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-2">{survivorLoadout.survivor.description}</p>
                      <p className="text-sm text-gray-400">
                        Difficulty: {survivorLoadout.survivor.difficulty}
                      </p>
                    </div>
                    <button
                      onClick={omitAndRerollSurvivor}
                      className="shrink-0 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold py-2 px-3 rounded-lg transition"
                      title="Don't have this survivor unlocked? Omit them and roll another."
                    >
                      Omit & Reroll
                    </button>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">Perks (4)</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {survivorLoadout.perks.map((perk, index) => (
                        <div key={perk.id} className="bg-slate-700 rounded-lg p-4 flex flex-col gap-3">
                          <div>
                            <p className="text-white font-semibold">{perk.name}</p>
                            <p className="text-sm text-gray-300 leading-relaxed mt-1">{perk.effect}</p>
                          </div>
                          <button
                            onClick={() => omitAndRerollSurvivorPerk(index)}
                            className="self-start bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold py-1.5 px-3 rounded transition"
                            title="Don't have this perk unlocked? Omit it and roll another."
                          >
                            Omit
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {survivorLoadout.item && (
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3">Item</h4>
                      <div className="bg-slate-700 rounded-lg p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-white font-semibold">{survivorLoadout.item.name}</p>
                            <p className="text-sm text-gray-300 leading-relaxed mt-1 mb-2">{survivorLoadout.item.effect}</p>
                            <p className="text-xs text-gray-400">
                              Rarity: {survivorLoadout.item.rarity}
                            </p>
                          </div>
                          <button
                            onClick={omitAndRerollItem}
                            className="shrink-0 bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold py-1.5 px-3 rounded transition"
                            title="Don't have this item unlocked? Omit it and roll another."
                          >
                            Omit
                          </button>
                        </div>
                        {survivorLoadout.addons.length > 0 && (
                          <div className="border-t border-slate-600 pt-3 mt-3">
                            <p className="text-xs font-semibold text-yellow-300 mb-2">Add-ons:</p>
                            <div className="flex flex-wrap gap-2">
                              {survivorLoadout.addons.map((addonId) => {
                                const addon = getAddonById(addonId);
                                return (
                                  <span
                                    key={addonId}
                                    className="bg-slate-600 text-sm px-3 py-1.5 rounded flex items-center gap-2"
                                    title={addon?.effect}
                                  >
                                    {addon?.name ?? addonId}
                                    <button
                                      onClick={() => omitAndRerollAddon(addonId)}
                                      className="text-orange-300 hover:text-orange-100 font-bold"
                                      title="Don't have this add-on? Omit it and roll another."
                                    >
                                      ×
                                    </button>
                                  </span>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {survivorLoadout.offering && (
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3">Offering</h4>
                      <div className="bg-slate-700 rounded-lg p-4 border-l-4 border-yellow-500 flex items-start justify-between gap-4">
                        <div>
                          <p className="text-white font-semibold">{survivorLoadout.offering.name}</p>
                          <p className="text-sm text-gray-300 leading-relaxed mt-1">{survivorLoadout.offering.effect}</p>
                          <p className="text-xs text-gray-400 mt-2">
                            Rarity: {survivorLoadout.offering.rarity}
                          </p>
                        </div>
                        <button
                          onClick={omitAndRerollSurvivorOffering}
                          className="shrink-0 bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold py-1.5 px-3 rounded transition"
                          title="Don't have this offering? Omit it and roll another."
                        >
                          Omit
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {(activeTab === "killer" || activeTab === "both") && (
            <div className="bg-slate-800 rounded-lg p-8 mb-8 border border-red-500/30">
              <h2 className="text-2xl font-bold text-white mb-6">Killer Randomizer</h2>

              <div className="flex gap-2 mb-6 flex-wrap">
                <button
                  onClick={handleRandomizeKiller}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition"
                >
                  🎲 Randomize
                </button>
                <button
                  onClick={handleRespinKiller}
                  disabled={!killerLoadout}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition disabled:opacity-50"
                >
                  ↻ Respin
                </button>
              </div>

              {killerLoadout && (
                <div className="space-y-6">
                  <div className="bg-slate-700 rounded-lg p-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{killerLoadout.killer.name}</h3>
                      <p className="text-gray-300 leading-relaxed mb-2">{killerLoadout.killer.description}</p>
                      <p className="text-sm text-gray-400 mb-1">Power: {killerLoadout.killer.power}</p>
                      <p className="text-sm text-gray-400">Difficulty: {killerLoadout.killer.difficulty}</p>
                    </div>
                    <button
                      onClick={omitAndRerollKiller}
                      className="shrink-0 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold py-2 px-3 rounded-lg transition"
                      title="Don't have this killer unlocked? Omit them and roll another."
                    >
                      Omit & Reroll
                    </button>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">Perks (4)</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {killerLoadout.perks.map((perk, index) => (
                        <div key={perk.id} className="bg-slate-700 rounded-lg p-4 flex flex-col gap-3">
                          <div>
                            <p className="text-white font-semibold">{perk.name}</p>
                            <p className="text-sm text-gray-300 leading-relaxed mt-1">{perk.effect}</p>
                          </div>
                          <button
                            onClick={() => omitAndRerollKillerPerk(index)}
                            className="self-start bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold py-1.5 px-3 rounded transition"
                            title="Don't have this perk unlocked? Omit it and roll another."
                          >
                            Omit
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">Add-ons</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {killerLoadout.addons.map((addon, index) => (
                        <div key={addon.id} className="bg-slate-700 rounded-lg p-4 flex items-start justify-between gap-3">
                          <div>
                            <p className="text-white font-semibold">{addon.name}</p>
                            <p className="text-sm text-gray-300 leading-relaxed mt-1">{addon.effect}</p>
                            <p className="text-xs text-gray-400 mt-2">Rarity: {addon.rarity}</p>
                          </div>
                          <button
                            onClick={() => omitAndRerollKillerAddon(index)}
                            className="shrink-0 bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold py-1.5 px-3 rounded transition"
                            title="Don't have this add-on unlocked? Omit it and roll another."
                          >
                            Omit
                          </button>
                        </div>
                      ))}
                      {killerLoadout.addons.length === 0 && (
                        <p className="text-gray-400 text-sm">No add-ons available for this killer.</p>
                      )}
                    </div>
                  </div>

                  {killerLoadout.offering && (
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3">Offering</h4>
                      <div className="bg-slate-700 rounded-lg p-4 border-l-4 border-red-500 flex items-start justify-between gap-4">
                        <div>
                          <p className="text-white font-semibold">{killerLoadout.offering.name}</p>
                          <p className="text-sm text-gray-300 leading-relaxed mt-1">{killerLoadout.offering.effect}</p>
                          <p className="text-xs text-gray-400 mt-2">
                            Rarity: {killerLoadout.offering.rarity}
                          </p>
                        </div>
                        <button
                          onClick={omitAndRerollKillerOffering}
                          className="shrink-0 bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold py-1.5 px-3 rounded transition"
                          title="Don't have this offering? Omit it and roll another."
                        >
                          Omit
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <h3 className="text-lg font-bold text-white mb-4">Database Stats</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-blue-400">{getSurvivors().length}</p>
                <p className="text-gray-400">Survivors</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-red-400">{getKillers().length}</p>
                <p className="text-gray-400">Killers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-yellow-400">
                  {getSurvivorPerks().length + getKillerPerks().length}
                </p>
                <p className="text-gray-400">Perks</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-400">{getItems().length}</p>
                <p className="text-gray-400">Items</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-400">
                  {getSurvivorOfferings().length + getKillerOfferings().length}
                </p>
                <p className="text-gray-400">Offerings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
