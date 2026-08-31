import survivors from "@/lib/data/survivors.json";
import killers from "@/lib/data/killers.json";
import perks from "@/lib/data/perks.json";
import addons from "@/lib/data/addons.json";
import items from "@/lib/data/items.json";
import offerings from "@/lib/data/offerings.json";
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
 * Get add-ons for a specific item category (e.g. "Med-Kit", "Toolbox")
 */
export function getItemAddons(category: string): Addon[] {
  return addons.filter((a) => a.item === category) as Addon[];
}

/**
 * Look up a single add-on by id (used to resolve item add-on ids into names/effects)
 */
export function getAddonById(id: string): Addon | undefined {
  return addons.find((a) => a.id === id) as Addon | undefined;
}

/**
 * Random utility function
 */
function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Pick one random element from a pool, excluding a set of ids (used for per-element
 * "omit & respin" so an individually excluded survivor/perk/item/add-on/offering
 * never gets rolled again until the next full Randomize).
 */
export function pickRandomExcluding<T>(
  pool: T[],
  excludeIds: Set<string>,
  idOf: (item: T) => string
): T | null {
  const available = pool.filter((item) => !excludeIds.has(idOf(item)));
  if (available.length === 0) return null;
  return getRandomElement(available);
}

/**
 * Get all offerings
 */
export function getOfferings() {
  return offerings as any[];
}

/**
 * Get survivor offerings
 */
export function getSurvivorOfferings() {
  return offerings.filter((o: any) => o.type.includes("Survivor")) as any[];
}

/**
 * Get killer offerings
 */
export function getKillerOfferings() {
  return offerings.filter((o: any) => o.type.includes("Killer")) as any[];
}

/**
 * Get random offering
 */
export function getRandomOffering(type: "survivor" | "killer") {
  const offeringList =
    type === "survivor" ? getSurvivorOfferings() : getKillerOfferings();
  return offeringList.length > 0 ? getRandomElement(offeringList) : null;
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
