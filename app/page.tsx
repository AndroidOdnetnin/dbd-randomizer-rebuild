"use client";

import { useState } from "react";
import {
  randomizeSurvivor,
  randomizeKiller,
  getSurvivors,
  getKillers,
  getRandomOffering,
} from "@/lib/utils/randomizer";
import type { Survivor, Killer, Perk } from "@/lib/types/dbd";

interface SurvivorLoadout {
  survivor: Survivor;
  perks: Perk[];
  item: any;
  addons: string[];
  offering: any;
}

interface KillerLoadout {
  killer: Killer;
  perks: Perk[];
  addons: any[];
  offering: any;
}

export default function Home() {
  const [survivorLoadout, setSurvivorLoadout] = useState<SurvivorLoadout | null>(
    null
  );
  const [killerLoadout, setKillerLoadout] = useState<KillerLoadout | null>(null);
  const [activeTab, setActiveTab] = useState<"survivor" | "killer" | "both">(
    "both"
  );
  const [omitIds, setOmitIds] = useState<Set<string>>(new Set());

  const handleRandomizeSurvivor = (newOmit?: string) => {
    const newOmitIds = newOmit
      ? new Set(omitIds).add(newOmit)
      : new Set<string>();
    const result = randomizeSurvivor(Array.from(newOmitIds) as string[]);
    if (result) {
      setSurvivorLoadout({
        ...result,
        offering: getRandomOffering("survivor"),
      });
      if (newOmit) setOmitIds(newOmitIds);
    }
  };

  const handleRandomizeKiller = (newOmit?: string) => {
    const newOmitIds = newOmit
      ? new Set(omitIds).add(newOmit)
      : new Set<string>();
    const result = randomizeKiller(Array.from(newOmitIds) as string[]);
    if (result) {
      setKillerLoadout({
        ...result,
        offering: getRandomOffering("killer"),
      });
      if (newOmit) setOmitIds(newOmitIds);
    }
  };

  const handleRandomizeAll = () => {
    setOmitIds(new Set());
    const survResult = randomizeSurvivor();
    const killResult = randomizeKiller();
    if (survResult) {
      setSurvivorLoadout({
        ...survResult,
        offering: getRandomOffering("survivor"),
      });
    }
    if (killResult) {
      setKillerLoadout({
        ...killResult,
        offering: getRandomOffering("killer"),
      });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            DBD Randomizer
          </h1>
          <p className="text-xl text-gray-300">
            Ad-free, lightweight randomizer for Dead by Daylight
          </p>
        </header>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <button
            onClick={() => {
              setActiveTab("survivor");
              setOmitIds(new Set());
            }}
            className={`px-6 py-2 rounded-lg font-bold transition ${
              activeTab === "survivor"
                ? "bg-blue-600 text-white"
                : "bg-slate-700 text-gray-300 hover:bg-slate-600"
            }`}
          >
            🎮 Survivor
          </button>
          <button
            onClick={() => {
              setActiveTab("killer");
              setOmitIds(new Set());
            }}
            className={`px-6 py-2 rounded-lg font-bold transition ${
              activeTab === "killer"
                ? "bg-red-600 text-white"
                : "bg-slate-700 text-gray-300 hover:bg-slate-600"
            }`}
          >
            🔪 Killer
          </button>
          <button
            onClick={() => {
              setActiveTab("both");
              setOmitIds(new Set());
            }}
            className={`px-6 py-2 rounded-lg font-bold transition ${
              activeTab === "both"
                ? "bg-purple-600 text-white"
                : "bg-slate-700 text-gray-300 hover:bg-slate-600"
            }`}
          >
            ⚙️ Both
          </button>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          {/* Survivor Tab */}
          {(activeTab === "survivor" || activeTab === "both") && (
            <div className="bg-slate-800 rounded-lg p-8 mb-8 border border-blue-500/30">
              <h2 className="text-2xl font-bold text-white mb-6">
                Survivor Randomizer
              </h2>

              <div className="flex gap-2 mb-6 flex-wrap">
                <button
                  onClick={() => handleRandomizeSurvivor()}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition"
                >
                  🎲 Randomize
                </button>
                <button
                  onClick={() =>
                    survivorLoadout &&
                    handleRandomizeSurvivor()
                  }
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition disabled:opacity-50"
                  disabled={!survivorLoadout}
                >
                  ↻ Respin
                </button>
                <button
                  onClick={() =>
                    survivorLoadout &&
                    handleRandomizeSurvivor(survivorLoadout.survivor.id)
                  }
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition disabled:opacity-50"
                  disabled={!survivorLoadout}
                >
                  ↻ Omit & Respin
                </button>
              </div>

              {survivorLoadout && (
                <div className="space-y-4">
                  {/* Character */}
                  <div className="bg-slate-700 rounded p-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {survivorLoadout.survivor.name}
                    </h3>
                    <p className="text-gray-300 mb-2">
                      {survivorLoadout.survivor.description}
                    </p>
                    <p className="text-sm text-gray-400">
                      Difficulty: {survivorLoadout.survivor.difficulty}
                    </p>
                  </div>

                  {/* Perks Grid (4) */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      Perks (4)
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                      {survivorLoadout.perks.map((perk) => (
                        <div
                          key={perk.id}
                          className="bg-slate-700 rounded p-3 hover:bg-slate-600 transition"
                        >
                          <p className="text-white font-semibold text-sm">
                            {perk.name}
                          </p>
                          <p className="text-xs text-gray-300">{perk.effect}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Item with Add-ons */}
                  {survivorLoadout.item && (
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        Item
                      </h4>
                      <div className="bg-slate-700 rounded p-3">
                        <p className="text-white font-semibold">
                          {survivorLoadout.item.name}
                        </p>
                        <p className="text-sm text-gray-300 mb-2">
                          {survivorLoadout.item.effect}
                        </p>
                        <p className="text-xs text-gray-400 mb-2">
                          Rarity: {survivorLoadout.item.rarity}
                        </p>
                        {survivorLoadout.addons.length > 0 && (
                          <div className="border-t border-slate-600 pt-2 mt-2">
                            <p className="text-xs font-semibold text-yellow-300 mb-1">
                              Add-ons:
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {survivorLoadout.addons.map((addon) => (
                                <span
                                  key={addon}
                                  className="bg-slate-600 text-xs px-2 py-1 rounded"
                                >
                                  {addon}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Offering */}
                  {survivorLoadout.offering && (
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        Offering
                      </h4>
                      <div className="bg-slate-700 rounded p-3 border-l-4 border-yellow-500">
                        <p className="text-white font-semibold">
                          {survivorLoadout.offering.name}
                        </p>
                        <p className="text-sm text-gray-300">
                          {survivorLoadout.offering.effect}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Rarity: {survivorLoadout.offering.rarity}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Killer Tab */}
          {(activeTab === "killer" || activeTab === "both") && (
            <div className="bg-slate-800 rounded-lg p-8 mb-8 border border-red-500/30">
              <h2 className="text-2xl font-bold text-white mb-6">
                Killer Randomizer
              </h2>

              <div className="flex gap-2 mb-6 flex-wrap">
                <button
                  onClick={() => handleRandomizeKiller()}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition"
                >
                  🎲 Randomize
                </button>
                <button
                  onClick={() =>
                    killerLoadout &&
                    handleRandomizeKiller()
                  }
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition disabled:opacity-50"
                  disabled={!killerLoadout}
                >
                  ↻ Respin
                </button>
                <button
                  onClick={() =>
                    killerLoadout &&
                    handleRandomizeKiller(killerLoadout.killer.id)
                  }
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition disabled:opacity-50"
                  disabled={!killerLoadout}
                >
                  ↻ Omit & Respin
                </button>
              </div>

              {killerLoadout && (
                <div className="space-y-4">
                  {/* Character */}
                  <div className="bg-slate-700 rounded p-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {killerLoadout.killer.name}
                    </h3>
                    <p className="text-gray-300 mb-2">
                      {killerLoadout.killer.description}
                    </p>
                    <p className="text-sm text-gray-400 mb-1">
                      Power: {killerLoadout.killer.power}
                    </p>
                    <p className="text-sm text-gray-400">
                      Difficulty: {killerLoadout.killer.difficulty}
                    </p>
                  </div>

                  {/* Perks Grid (4) */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      Perks (4)
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                      {killerLoadout.perks.map((perk) => (
                        <div
                          key={perk.id}
                          className="bg-slate-700 rounded p-3 hover:bg-slate-600 transition"
                        >
                          <p className="text-white font-semibold text-sm">
                            {perk.name}
                          </p>
                          <p className="text-xs text-gray-300">{perk.effect}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Add-ons */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      Add-ons
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {killerLoadout.addons.map((addon) => (
                        <div
                          key={addon.id}
                          className="bg-slate-700 rounded p-3 hover:bg-slate-600 transition"
                        >
                          <p className="text-white font-semibold">
                            {addon.name}
                          </p>
                          <p className="text-sm text-gray-300">
                            {addon.effect}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            Rarity: {addon.rarity}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Offering */}
                  {killerLoadout.offering && (
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        Offering
                      </h4>
                      <div className="bg-slate-700 rounded p-3 border-l-4 border-red-500">
                        <p className="text-white font-semibold">
                          {killerLoadout.offering.name}
                        </p>
                        <p className="text-sm text-gray-300">
                          {killerLoadout.offering.effect}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Rarity: {killerLoadout.offering.rarity}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Both Tab */}
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

          {/* Stats */}
          <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
            <h3 className="text-lg font-bold text-white mb-4">Database Stats</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-blue-400">
                  {getSurvivors().length}
                </p>
                <p className="text-gray-400">Survivors</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-red-400">
                  {getKillers().length}
                </p>
                <p className="text-gray-400">Killers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-yellow-400">30+</p>
                <p className="text-gray-400">Perks</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-400">15+</p>
                <p className="text-gray-400">Items</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-400">15+</p>
                <p className="text-gray-400">Offerings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
