
export interface UserData {
  birthDate: string;
  birthTime: string;
  birthPlace: string;
  chartImage?: string; // base64 string
  currentJob?: string; // Profesión actual para análisis de alineación
}

export interface Asteroid {
  name: string;
  degree: string;
  description: string;
}

export interface KarmicAsteroid extends Asteroid {
  code: string;
  soulMemory: string;
}

export interface FixedStar {
  name: string;
  position: string;
  meaning: string;
  karmicConnection: string;
}

export interface HouseActivation {
  houseNumber: number;
  influence: string; // The asteroid or star activating the house
  meaning: string;
}

export interface StarseedAnalysis {
  origin: string; // e.g., Pléyades, Sirio, Arturo, etc.
  house12Sign: string;
  karmicPatterns: string;
  hiddenGifts: string[];
  soulMission: string;
}

export interface CareerAnalysis {
  vocationalSummary: string;
  midheavenSign: string;
  professionalRole: string;
  dailyService: string; // House 6 influence
  abundanceMindset: string; // House 2 influence
  karmicProfessionalLegacy: string; // Connection to past lives/karma in work
}

export interface PlanetInfo {
  name: string;
  status: 'Sacred' | 'Non-Sacred';
  influence: string;
}

export interface SevenRay {
  name: string;
  principle: string;
  description: string;
}

export interface EsotericConstellation {
  name: string;
  stellarSource: string; // Sirius, Pleiades, Orion, etc.
  associatedRay: string;
  esotericMeaning: string;
  soulResonance: string;
}

export interface RulingPlanet {
  name: string;
  type: 'Tradicional' | 'Esotérico' | 'Jerárquico';
  associatedConstellation: string;
  theme: string;
  esotericMessage: string;
}

export interface StarseedRace {
  name: string;
  origin: string;
  symbolicMission: string;
  description: string;
}

export interface AnalysisResults {
  summary: string;
  sunSign: string;
  moonSign: string;
  ascendant: string;
  pastLives: {
    period: string;
    role: string;
    lesson: string;
  }[];
  karmicTalents: string[];
  soulRay: SevenRay;
  personalityRay: SevenRay;
  asteroids: Asteroid[];
  karmicAsteroids: KarmicAsteroid[];
  starseedAsteroids: KarmicAsteroid[];
  fixedStars: FixedStar[];
  esotericConstellations: EsotericConstellation[];
  rulingPlanets: RulingPlanet[];
  starseedRaces: StarseedRace[]; // New field for Starseed race connections
  emptyHouseActivations: HouseActivation[];
  starseedAnalysis: StarseedAnalysis;
  careerAnalysis: CareerAnalysis;
  sacredPlanets: PlanetInfo[];
  mediumisticPotential: string;
  spiritualMission: string;
  akashicReport: string;
}
