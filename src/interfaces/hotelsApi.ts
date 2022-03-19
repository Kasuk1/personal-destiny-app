/* Interfaces to Get Locations */
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

/* Interfaces to Get Properties */
export interface IDestination {
  id: string;
  value: string;
  resolvedLocation: string;
}
export interface IPagination {
  currentPage: number;
  pageGroup: string;
  nextPageNumber: number;
  nextPageGroup: string;
}
export interface IAddress {
  streetAddress: string;
  extendedAddress: string;
  locality: string;
  postalCode: string;
  region: string;
  countryName: string;
  countryCode: string;
}
export interface IWelcomeRewards {
  collect: boolean;
}
export interface IGuestReviews {
  unformattedRating: number;
  rating: string;
  total: number;
  scale: number;
}
export interface ITripAdvisorGuestReviews {
  rating: number;
  total: number;
}
export interface ILandMark {
  label: string;
  distance: string;
}
export interface IRatePlan {
  price: {
    current: string;
    exactCurrent: number;
    old: string;
    info: string;
    additionalInfo: string;
    totalPricePerStay: string;
  };
  features: {
    freeCancellation: boolean;
    paymentPreference: boolean;
    noCCRequired: boolean;
  };
  type: string;
}
export interface IDeals {
  greatRate: boolean;
  priceReasoning: string;
}
export interface IMessaging {
  scarcity: string;
}
export interface ICoordinate {
  lat: number;
  lon: number;
}
export interface IProperty {
  id: number;
  name: string;
  thumbnailUrl: string;
  starRating: number;
  address: IAddress;
  welcomeRewards: IWelcomeRewards;
  guestReviews: IGuestReviews;
  tripAdvisorGuestReviews: ITripAdvisorGuestReviews;
  landmarks: ILandMark[];
  ratePlan: IRatePlan;
  neighbourhood: string;
  deals: IDeals;
  messaging: IMessaging;
  badging: {};
  pimmsAttributes: string;
  coupon?: string;
  coordinate: ICoordinate;
  roomsLeft?: number;
  providerType: string;
  supplierHotelId: number;
  optimizedThumbUrls: {
    srpDesktop: string;
  };
}
export interface IPropertiesResponse {
  result: string;
  data?: {
    body?: {
      header: string;
      query: IDestination;
      searchResults: {
        totalCount: number;
        results: IProperty[];
        pagination: IPagination;
      };
      sortResults?: {};
      filters?: {};
      pointOfSale?: {};
      miscellaneous?: {};
      pageInfo?: {};
    };
    common?: {};
  };
}
