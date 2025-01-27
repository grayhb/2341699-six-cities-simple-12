import Offer from '../types/offer';
import Review from '../types/review';
import { NormalizedOfferTypes, OfferTypes, SortMenuItems } from './constants';

export const getRatingPercent = (value: number, round = false): string => {
  const result = (round ? Math.round(value) : value) / 0.05;
  return `${result}%`;
};

export function getRandomArrayItem<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)];
}

export function getSlicedArrayItems<T>(items: T[], countSliced: number) {
  return items.slice(0, items.length > countSliced ? countSliced : items.length);
}

export const getCapitalized = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

export const getCityOffers = (cityName: string, items: Offer[]) => items.filter((e) => e.city.name === cityName);

export const getSortedOffers = (rawItems: Offer[], sortType: SortMenuItems): Offer[] => {

  const items = rawItems.map((e) => e);

  switch (sortType) {
    case SortMenuItems.PriceLowToHigh:
      items.sort((a, b) => a.price - b.price);
      break;
    case SortMenuItems.PriceHightToLow:
      items.sort((a, b) => b.price - a.price);
      break;
    case SortMenuItems.TopRated:
      items.sort((a, b) => b.rating - a.rating);
      break;
  }

  return items;
};

export const getSortedReviews = (rawItems: Review[]): Review[] => {

  const items = rawItems.map((e) => e);

  if (items.length > 1) {
    items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  return items;
};

export function getClonedObject<T>(item: T) {
  return JSON.parse(JSON.stringify(item)) as T;
}

export const getReviewTime = (date: string): string => {

  const itemDate = new Date(date);

  const monthName = itemDate.toLocaleString('en-EN', { month: 'long' });

  return `${monthName} ${itemDate.getFullYear()}`;
};

export const getNormalizedOfferTypeName = (type: string): string => {
  switch (type) {
    case OfferTypes.Apartment:
      return NormalizedOfferTypes.Apartment;
    case OfferTypes.Hotel:
      return NormalizedOfferTypes.Hotel;
    case OfferTypes.House:
      return NormalizedOfferTypes.House;
    case OfferTypes.Room:
      return NormalizedOfferTypes.Room;
  }

  return getCapitalized(type);
};
