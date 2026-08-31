"use client";

import { useState } from "react";
import {
  randomizeSurvivor,
  randomizeKiller,
  randomizeFullGame,
  getSurvivors,
  getKillers,
} from "@/lib/utils/randomizer";
import type { Survivor, Killer, Perk } from "@/lib/types/dbd";

interface SurvivorLoadout {
  survivor: Survivor;
  perks: Perk[];
  item: any;
}

interface KillerLoadout {
  killer: Killer;
  perks: Perk[];
  addons: any[];
}

export default function Home() {
  const [survivorLoadout, setSurvivorLoadout] = useState<SurvivorLoadout | null>(
    null
  );
  const [killerLoadout, setKillerLoadout] = useState<KillerLoadout | null>(null);
  const [activeTab, setActiveTab] = useState<"survivor" | "killer" | "both">(
    "both"
  );

  const handleRandomizeSurvivor = () => {
    setSurvivorLoadout(randomizeSurvivor());
  };

  const handleRandomizeKiller = () => {
    setKillerLoadout(randomizeKiller());
  };

  const handleRandomizeAll = () => {
    const fullGame = randomizeFullGame();
    setSurvivorLoadout(fullGame.survivor);
    setKillerLoadout(fullGame.killer);
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
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("survivor")}
            className={`px-6 py-2 rounded-lg font-bold transition ${
              activeTab === "survivor"
                ? "bg-blue-600 text-white"
                : "bg-slate-700 text-gray-300 hover:bg-slate-600"
            }`}
          >
            🎮 Survivor
          </button>
          <button
            onClick={() => setActiveTab("killer")}
            className={`px-6 py-2 rounded-lg font-bold transition ${
              activeTab === "killer"
                ? "bg-red-600 text-white"
                : "bg-slate-700 text-gray-300 hover:bg-slate-600"
            }`}
          >
            🔪 Killer
          </button>
          <button
            onClick={() => setActiveTab("both")}
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
        <div className="max-w-4xl mx-auto">
          {/* Survivor Tab */}
          {(activeTab === "survivor" || activeTab === "both") && (
            <div className="bg-slate-800 rounded-lg p-8 mb-8 border border-blue-500/30">
              <h2 className="text-2xl font-bold text-white mb-6">
                Survivor Randomizer
              </h2>

              <button
                onClick={handleRandomizeSurvivor}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mb-6 transition"
              >
                Randomize Survivor
              </button>

              {survivorLoadout && (
                <div className="space-y-4">
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

                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Perks</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {survivorLoadout.perks.map((perk) => (
                        <div
                          key={perk.id}
                          className="bg-slate-700 rounded p-3 hover:bg-slate-600 transition"
                        >
                          <p className="text-white font-semibold">{perk.name}</p>
                          <p className="text-sm text-gray-300">
                            {perk.effect}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {survivorLoadout.item && (
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Item</h4>
                      <div className="bg-slate-700 rounded p-3">
                        <p className="text-white font-semibold">
                          {survivorLoadout.item.name}
                        </p>
                        <p className="text-sm text-gray-300">
                          {survivorLoadout.item.effect}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Rarity: {survivorLoadout.item.rarity}
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

              <button
                onClick={handleRandomizeKiller}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg mb-6 transition"
              >
                Randomize Killer
              </button>

              {killerLoadout && (
                <div className="space-y-4">
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

                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Perks</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {killerLoadout.perks.map((perk) => (
                        <div
                          key={perk.id}
                          className="bg-slate-700 rounded p-3 hover:bg-slate-600 transition"
                        >
                          <p className="text-white font-semibold">{perk.name}</p>
                          <p className="text-sm text-gray-300">
                            {perk.effect}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
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
                <p className="text-3xl font-bold text-green-400">10+</p>
                <p className="text-gray-400">Items</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
