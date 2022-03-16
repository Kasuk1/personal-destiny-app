export interface IEntitie {
  geoId: string;
  destinationId: string;
  landmarkCityDestinationId: null;
  type: string;
  redirectPage: string;
  latitude: string;
  longitude: string;
  searchDetail: null;
  caption: string;
  name: string;
}

export interface ISuggestion {
  group: string;
  entities: IEntitie[];
}

export interface ILocations {
  term: string;
  moresuggestions: number;
  autoSuggestInstance: null;
  trackingID: string;
  misspellingfallback: boolean;
  suggestions: ISuggestion[];
  geocodeFallback: boolean;
}
