/* eslint-disable max-len */
import {itActsAsFavoriteRestaurantModel} from './contract/favoriteRestaurantContract';
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(async (movie) => {
      await FavoriteRestaurantIdb.deleteRestaurant(movie.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
