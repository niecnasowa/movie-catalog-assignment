// Auto generated - https://jvilk.com/MakeTypes/
// base on shows response

export interface ShowInterface {
  score: number;
  show: Show;
}

export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: (string | null)[];
  status: string;
  runtime?: number | null;
  premiered?: string | null;
  officialSite?: string | null;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network?: NetworkOrWebChannel | null;
  webChannel?: WebChannel | null;
  externals: Externals;
  image?: Image | null;
  summary: string;
  updated: number;
  _links: Links;
  _embedded: Embedded;
}

export interface Schedule {
  time: string;
  days?: (string | null)[] | null;
}

export interface Rating {
  average?: number | null;
}

export interface NetworkOrWebChannel {
  id: number;
  name: string;
  country: Country;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}
export interface WebChannel {
  id: number;
  name: string;
  country?: Country | null;
}

export interface Externals {
  tvrage?: number | null;
  thetvdb?: number | null;
  imdb?: string | null;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Links {
  self: SelfOrPreviousepisode;
  previousepisode?: SelfOrPreviousepisode | null;
}

export interface SelfOrPreviousepisode {
  href: string;
}

export interface Embedded {
  cast: CastEntity[] | null;
}

export interface CastEntity {
  person: Person;
  character: Character;
  self: boolean;
  voice: boolean;
}

export interface Person {
  id: number;
  url: string;
  name: string;
  country?: Country | null;
  birthday?: string | null;
  deathday?: null;
  gender: string;
  image?: Image | null;
  _links: Links;
}

export interface Character {
  id: number;
  url: string;
  name: string;
  image?: Image | null;
  _links: Links;
}
