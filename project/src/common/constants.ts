export enum NameSpace {
  MainData = 'MAIN-DATA',
  PropertyData = 'PROPERTY-DATA',
  User = 'USER',
}

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Room = '/offer',
  Erorr404 = '/Error404',
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum SortMenuItems {
  Default = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHightToLow = 'Price: high to low',
  TopRated = 'Top rated first'
}

export enum PageTitles {
  Main = 'six cities simple',
  Login = 'six cities simple: authorization',
  Property = 'six cities simple: property',
}

export enum Cities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export enum OfferTypes {
  Room = 'room',
  Apartment = 'apartment',
  House = 'house',
  Hotel = 'hotel'
}

export enum NormalizedOfferTypes {
  Room = 'Private room',
  Apartment = 'Apartment',
  House = 'House',
  Hotel = 'Hotel'
}

export const API_URL = 'https://12.react.pages.academy/six-cities-simple';
export const REQUEST_TIMEOUT = 5000;

export enum MapMarkers {
  Default = './img/pin.svg',
  Current = './img/pin-active.svg'
}

export const AUTH_TOKEN_KEY_NAME = 'x-token';

export const MAX_OFFERS_NEARBY = 3;
export const MAX_OFFER_IMAGES = 6;

export const MAX_REVIEWS = 10;

export enum ReviewFormSettings {
  MinCommentLength = 50,
  MaxCommentLength = 300,
  MinRating = 1,
  MaxRating = 5
}
