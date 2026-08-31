import survivors from "@/lib/data/survivors.json";
import killers from "@/lib/data/killers.json";
import perks from "@/lib/data/perks.json";
import addons from "@/lib/data/addons.json";
import items from "@/lib/data/items.json";
import type {
  Survivor,
  Killer,
  Perk,
  Addon,
  Item,
} from "@/lib/types/dbd";

/**
 * Get all survivors
 */
export function getSurvivors(): Survivor[] {
  return survivors as Survivor[];
}

/**
 * Get all killers
 */
export function getKillers(): Killer[] {
  return killers as Killer[];
}

/**
 * Get all perks
 */
export function getPerks(): Perk[] {
  return perks as Perk[];
}

/**
 * Get all add-ons
 */
export function getAddons(): Addon[] {
  return addons as Addon[];
}

/**
 * Get all items
 */
export function getItems(): Item[] {
  return items as Item[];
}

/**
 * Get perks for a specific character
 */
export function getCharacterPerks(characterName: string): Perk[] {
  return perks.filter((p) => p.character === characterName) as Perk[];
}

/**
 * Get survivor perks
 */
export function getSurvivorPerks(): Perk[] {
  return perks.filter((p) => p.type === "Survivor") as Perk[];
}

/**
 * Get killer perks
 */
export function getKillerPerks(): Perk[] {
  return perks.filter((p) => p.type === "Killer") as Perk[];
}

/**
 * Get add-ons for a specific killer
 */
export function getKillerAddons(killerName: string): Addon[] {
  return addons.filter((a) => a.killer === killerName) as Addon[];
}

/**
 * Random utility function
 */
function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Get N random unique elements from array
 */
function getRandomElements<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, array.length));
}

/**
 * Randomize a survivor loadout
 */
export function randomizeSurvivor(): {
  survivor: Survivor;
  perks: Perk[];
  item: Item | null;
} {
  const survivor = getRandomElement(getSurvivors());
  const survivorPerks = getSurvivorPerks();
  const selectedPerks = getRandomElements(survivorPerks, 3);
  const randomItem = Math.random() > 0.3 ? getRandomElement(getItems()) : null;

  return {
    survivor,
    perks: selectedPerks,
    item: randomItem,
  };
}

/**
 * Randomize a killer loadout
 */
export function randomizeKiller(): {
  killer: Killer;
  perks: Perk[];
  addons: Addon[];
} {
  const killer = getRandomElement(getKillers());
  const killerPerks = getKillerPerks();
  const selectedPerks = getRandomElements(killerPerks, 3);
  const killerAddons = getKillerAddons(killer.name);
  const selectedAddons = getRandomElements(killerAddons, 2);

  return {
    killer,
    perks: selectedPerks,
    addons: selectedAddons,
  };
}

/**
 * Randomize both survivor and killer loadouts
 */
export function randomizeFullGame() {
  return {
    survivor: randomizeSurvivor(),
    killer: randomizeKiller(),
  };
}

/**
 * Get a survivor by ID
 */
export function getSurvivorById(id: string): Survivor | undefined {
  return survivors.find((s) => s.id === id) as Survivor | undefined;
}

/**
 * Get a killer by ID
 */
export function getKillerById(id: string): Killer | undefined {
  return killers.find((k) => k.id === id) as Killer | undefined;
}

/**
 * Get a perk by ID
 */
export function getPerkById(id: string): Perk | undefined {
  return perks.find((p) => p.id === id) as Perk | undefined;
}
