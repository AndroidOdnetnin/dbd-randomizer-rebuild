export interface Survivor {
  id: string;
  name: string;
  realName: string;
  chapter: string;
  releaseDate: string;
  difficulty: "Easy" | "Medium" | "Hard";
  perks: string[];
  description: string;
  imageUrl?: string;
}

export interface Killer {
  id: string;
  name: string;
  realName: string;
  chapter: string;
  releaseDate: string;
  power: string;
  difficulty: "Easy" | "Medium" | "Hard";
  perks: string[];
  description: string;
  imageUrl?: string;
}

export interface Perk {
  id: string;
  name: string;
  type: "Survivor" | "Killer";
  character: string;
  rarity: "Common" | "Uncommon" | "Rare";
  effect: string;
  cooldown?: number;
  description: string;
}

export interface Addon {
  id: string;
  name: string;
  type: "Power Add-on" | "Item Add-on";
  killer?: string;
  item?: string;
  rarity: "Common" | "Uncommon" | "Rare" | "Very Rare" | "Ultra Rare";
  effect: string;
  description: string;
}

export interface Item {
  id: string;
  name: string;
  type: "Item";
  category: string;
  rarity: "Common" | "Uncommon" | "Rare" | "Very Rare" | "Event Only";
  effect: string;
  description: string;
  addons?: string[];
}

export interface Offering {
  id: string;
  name: string;
  type: string;
  rarity: "Common" | "Uncommon" | "Rare" | "Very Rare";
  effect: string;
  description: string;
}

export interface RandomizerLoadout {
  survivor?: {
    character: Survivor;
    perks: Perk[];
    item?: Item;
  };
  killer?: {
    character: Killer;
    perks: Perk[];
    addons: Addon[];
  };
}
