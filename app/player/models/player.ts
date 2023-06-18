export interface Player {
  characterName: string;
  class: string;
  level: number;
  background: string;
  race: string;
  alignment: string;
  experiencePoints: number;

  // Abilities
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;

  // Saving throws
  savingThrows: {
      strength: boolean;
      dexterity: boolean;
      constitution: boolean;
      intelligence: boolean;
      wisdom: boolean;
      charisma: boolean;
  };

  // Skills
  skills: {
      acrobatics: number;
      animalHandling: number;
      arcana: number;
      athletics: number;
      deception: number;
      history: number;
      insight: number;
      intimidation: number;
      investigation: number;
      medicine: number;
      nature: number;
      perception: number;
      performance: number;
      persuasion: number;
      religion: number;
      sleightOfHand: number;
      stealth: number;
      survival: number;
  };

  // Health
  armorClass: number;
  initiative: number;
  speed: number;
  hitPoints: number;
  temporaryHitPoints: number;
  hitDice: string;

  // Equipment
  weapons: Array<{
      name: string;
      attackBonus: number;
      damage: string;
  }>;
  armor: Array<string>;
  otherEquipment: Array<string>;

  // Features & Traits
  featuresAndTraits: Array<string>;

  // Spells
  spells: Array<{
      name: string;
      level: number;
      description: string;
  }>;

  // Other
  personalityTraits: string;
  ideals: string;
  bonds: string;
  flaws: string;
}