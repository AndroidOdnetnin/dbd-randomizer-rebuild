import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            DBD Randomizer Rebuild
          </h1>
          <p className="text-xl text-gray-300">
            A lightweight, ad-free Dead by Daylight randomizer
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition">
            <h2 className="text-2xl font-bold text-white mb-2">🎮 Survivor</h2>
            <p className="text-gray-300">
              Randomize survivors and generate loadouts
            </p>
          </div>
          <div className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition">
            <h2 className="text-2xl font-bold text-white mb-2">🔪 Killer</h2>
            <p className="text-gray-300">
              Random killer selection with perks and add-ons
            </p>
          </div>
          <div className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition">
            <h2 className="text-2xl font-bold text-white mb-2">⚙️ Custom</h2>
            <p className="text-gray-300">
              Full control over randomization options
            </p>
          </div>
        </section>

        <section className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition">
            Get Started
          </button>
        </section>
      </div>
    </main>
  );
}
