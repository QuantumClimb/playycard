export type HeadId = 'blue' | 'dreamyy' | 'sparkyy';
export type PoseId = 'hero' | 'wave' | 'jump' | 'sitting';
export type SymbolId = 'star' | 'cloud' | 'flame' | 'heart' | 'lightning' | 'moon' | 'paw' | 'gear' | 'crown';
export type BackgroundId = 'happy-hills' | 'magic-castle' | 'space-world' | 'jungle-world' | 'cloud-kingdom' | 'city-adventure';

export interface CharacterConfig {
  name: string;
  head: HeadId;
  pose: PoseId;
  symbol: SymbolId;
  background: BackgroundId;
  primaryColor: string;
}

export interface CharacterStats {
  power: number;
  speed: number;
  intelligence: number;
  energy: number;
  courage: number;
}

export interface PersonalityArchetype {
  id: string;
  title: string;
  subTitle: string;
  element: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  description: string;
  specialAbility1: {
    name: string;
    description: string;
    damage: number;
  };
  specialAbility2: {
    name: string;
    description: string;
    damage: number;
  };
  quote: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: {
    label: string;
    icon: string;
    description: string;
    statBoost: Partial<CharacterStats>;
  }[];
}

export interface GeneratedCard {
  id: string;
  config: CharacterConfig;
  stats: CharacterStats;
  archetype: PersonalityArchetype;
  createdAt: string;
}