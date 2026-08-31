import {
  getSurvivors,
  getKillers,
  getPerks,
  getSurvivorPerks,
  getKillerPerks,
  getItems,
  getAddons,
  getKillerAddons,
  getItemAddons,
  getAddonById,
  getSurvivorOfferings,
  getKillerOfferings,
  getRandomOffering,
  getSurvivorById,
  getKillerById,
  getPerkById,
  pickRandomExcluding,
} from "./randomizer";

describe("data getters", () => {
  it("returns all 54 survivors and 44 killers", () => {
    expect(getSurvivors()).toHaveLength(54);
    expect(getKillers()).toHaveLength(44);
  });

  it("splits perks into survivor and killer pools that sum to the total", () => {
    const survivorPerks = getSurvivorPerks();
    const killerPerks = getKillerPerks();
    expect(survivorPerks.length + killerPerks.length).toBe(getPerks().length);
    expect(survivorPerks.every((p) => p.type === "Survivor")).toBe(true);
    expect(killerPerks.every((p) => p.type === "Killer")).toBe(true);
  });

  it("gives every killer exactly 10 power add-ons", () => {
    for (const killer of getKillers()) {
      expect(getKillerAddons(killer.name)).toHaveLength(10);
    }
  });

  it("gives every item category a non-empty add-on pool when the item has add-ons", () => {
    for (const item of getItems()) {
      if (!item.addons) continue;
      const pool = getItemAddons(item.category);
      expect(pool.length).toBeGreaterThan(0);
      for (const addonId of item.addons) {
        expect(pool.some((a) => a.id === addonId)).toBe(true);
      }
    }
  });

  it("resolves an add-on by id", () => {
    const [first] = getAddons();
    expect(getAddonById(first.id)).toEqual(first);
    expect(getAddonById("does-not-exist")).toBeUndefined();
  });

  it("splits offerings into survivor and killer pools", () => {
    expect(getSurvivorOfferings().every((o) => o.type === "Survivor Offering")).toBe(true);
    expect(getKillerOfferings().every((o) => o.type === "Killer Offering")).toBe(true);
  });

  it("returns a random offering of the requested type, or null if none remain", () => {
    const offering = getRandomOffering("survivor");
    expect(offering === null || offering.type === "Survivor Offering").toBe(true);
  });

  it("looks up survivors, killers, and perks by id", () => {
    const survivor = getSurvivors()[0];
    const killer = getKillers()[0];
    const perk = getPerks()[0];
    expect(getSurvivorById(survivor.id)).toEqual(survivor);
    expect(getKillerById(killer.id)).toEqual(killer);
    expect(getPerkById(perk.id)).toEqual(perk);
    expect(getSurvivorById("nope")).toBeUndefined();
  });
});

describe("pickRandomExcluding", () => {
  it("never returns an excluded id", () => {
    const pool = [{ id: "a" }, { id: "b" }, { id: "c" }];
    for (let i = 0; i < 20; i++) {
      const result = pickRandomExcluding(pool, new Set(["a", "b"]), (x) => x.id);
      expect(result?.id).toBe("c");
    }
  });

  it("returns null when every element is excluded", () => {
    const pool = [{ id: "a" }, { id: "b" }];
    expect(pickRandomExcluding(pool, new Set(["a", "b"]), (x) => x.id)).toBeNull();
  });

  it("returns null for an empty pool", () => {
    expect(pickRandomExcluding([], new Set(), (x: { id: string }) => x.id)).toBeNull();
  });
});
