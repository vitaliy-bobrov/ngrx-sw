export interface HeroesResponse {
  readonly count: number;
  results: HeroInfoApi[];
}

interface HeroInfoApi {
  name: string;
  gender: string;
  birth_year: string;
  hair_color: string;
}

export interface Hero {
  name: string;
  gender: string;
  birth: string;
  hairColor: string;
}
