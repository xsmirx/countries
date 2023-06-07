export interface Name {
  common: string
  official: string
}

export interface Names extends Name {
  nativeName: Translations
}

export interface Currencies {
  [key: string]: {
    name: string
    symbol: string
  }
}

export interface Idd {
  root: string
  suffixes: string[]
}

export type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania'

export interface Languages {
  [key: string]: string
}

export interface Translations {
  [key: string]: Name
}
export interface Demonyms {
  [key: string]: {
    f: string
    m: string
  }
}

export interface Maps {
  googleMaps: string
  openStreetMaps: string
}

export interface Gini {
  [year: number]: number
}

export interface Car {
  signs: string[]
  side: string
}

export interface Flags {
  png: string
  svg: string
  alt: string
}

export interface CoatOfArms {
  png: string
  svg: string
}

export interface CapitalInfo {
  latlng: number[]
}

export interface CountryResp {
  name: Names
  tld: string[]
  cca2: string
  ccn3: string
  cca3: string
  cioc: string
  independent: boolean
  status: string
  unMember: boolean
  currencies: Currencies
  idd: Idd
  capital: string[]
  altSpellings: string[]
  region: Region
  subregion: string
  languages: Languages
  translations: Translations
  latlng: number[]
  landlocked: boolean
  borders: string[]
  area: number
  demonyms: Demonyms
  flag: string
  maps: Maps
  population: number
  gini: Gini
  fifa: string
  car: Car
  timezones: string[]
  continents: string[]
  flags: Flags
  coatOfArms: CoatOfArms
  startOfWeek: string
  capitalInfo: CapitalInfo
}

export type CountriesResp = CountryResp[]
