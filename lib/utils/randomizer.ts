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
 * Randomize a survivor loadout with omit support
 */
export function randomizeSurvivor(omitIds?: string[]) {
  const availableSurvivors = survivors.filter(
    (s) => !omitIds?.includes(s.id)
  ) as Survivor[];
  if (availableSurvivors.length === 0) return null;

  const survivor = getRandomElement(availableSurvivors);
  const survivorPerks = getSurvivorPerks().filter(
    (p) => !omitIds?.includes(p.id)
  );
  const selectedPerks = getRandomElements(survivorPerks, 4);
  const availableItems = getItems().filter((i) => !omitIds?.includes(i.id));
  const randomItem =
    availableItems.length > 0 && Math.random() > 0.3
      ? getRandomElement(availableItems)
      : null;

  // Get random add-ons for the item
  let selectedAddons: any[] = [];
  if (randomItem?.addons) {
    const availableAddons = randomItem.addons.filter(
      (a: string) => !omitIds?.includes(a)
    );
    selectedAddons = getRandomElements(availableAddons, Math.min(2, availableAddons.length));
  }

  return {
    survivor,
    perks: selectedPerks,
    item: randomItem,
    addons: selectedAddons,
  };
}

/**
 * Randomize a killer loadout with omit support
 */
export function randomizeKiller(omitIds?: string[]) {
  const availableKillers = killers.filter(
    (k) => !omitIds?.includes(k.id)
  ) as Killer[];
  if (availableKillers.length === 0) return null;

  const killer = getRandomElement(availableKillers);
  const killerPerks = getKillerPerks().filter((p) => !omitIds?.includes(p.id));
  const selectedPerks = getRandomElements(killerPerks, 4);
  const killerAddons = getKillerAddons(killer.name).filter(
    (a) => !omitIds?.includes(a.id)
  );
  const selectedAddons = getRandomElements(killerAddons, 2);

  return {
    killer,
    perks: selectedPerks,
    addons: selectedAddons,
  };
}

/**
 * Randomize both survivor and killer loadouts with omit support
 */
export function randomizeFullGame(omitIds?: string[]) {
  return {
    survivor: randomizeSurvivor(omitIds),
    killer: randomizeKiller(omitIds),
  };
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
