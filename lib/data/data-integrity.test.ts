import survivors from "./survivors.json";
import killers from "./killers.json";
import perks from "./perks.json";
import addons from "./addons.json";
import items from "./items.json";
import offerings from "./offerings.json";

function expectUniqueIds(entries: { id: string }[], label: string) {
  const ids = entries.map((e) => e.id);
  const unique = new Set(ids);
  if (unique.size !== ids.length) {
    const seen = new Set<string>();
    const dupes = ids.filter((id) => (seen.has(id) ? true : (seen.add(id), false)));
    throw new Error(`${label} has duplicate ids: ${dupes.join(", ")}`);
  }
  expect(unique.size).toBe(ids.length);
}

describe("data integrity", () => {
  it("has unique ids across every data file", () => {
    expectUniqueIds(survivors, "survivors");
    expectUniqueIds(killers, "killers");
    expectUniqueIds(perks, "perks");
    expectUniqueIds(addons, "addons");
    expectUniqueIds(items, "items");
    expectUniqueIds(offerings, "offerings");
  });

  it("gives every survivor exactly 3 perks referencing real perk ids", () => {
    const perkIds = new Set(perks.map((p) => p.id));
    for (const survivor of survivors) {
      expect(survivor.perks).toHaveLength(3);
      for (const perkId of survivor.perks) {
        expect(perkIds.has(perkId)).toBe(true);
      }
    }
  });

  it("gives every killer a real power and difficulty rating", () => {
    for (const killer of killers) {
      expect(killer.power.length).toBeGreaterThan(0);
      expect(["Easy", "Medium", "Hard"]).toContain(killer.difficulty);
    }
  });

  it("only references item add-on ids that actually exist", () => {
    const addonIds = new Set(addons.map((a) => a.id));
    for (const item of items) {
      for (const addonId of item.addons ?? []) {
        expect(addonIds.has(addonId)).toBe(true);
      }
    }
  });

  it("labels every offering as a Survivor or Killer Offering", () => {
    for (const offering of offerings) {
      expect(["Survivor Offering", "Killer Offering"]).toContain(offering.type);
    }
  });
});
