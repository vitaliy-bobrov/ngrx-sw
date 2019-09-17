export interface HeroesResponse {
  readonly count: number;
  results: HeroInfoApi[];
}

interface HeroInfoApi {
  name: string;
  gender: string;
}

export interface Hero {
  name: string;
  gender: string;
  like: boolean;
}
