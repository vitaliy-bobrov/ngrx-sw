export interface HeroesResponse {
  readonly count: number;
  results: HeroInfo[];
}

export interface HeroInfo {
  name: string;
  gender: string;
  birth_year: string;
  hair_color: string;
}
