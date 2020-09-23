import FavouriteRestaurantIdb from '../../data/favouriterestaurant-idb';
import {createRestaurantTemplate} from '../templates/template-creator';

const Favourite = {
  async render() {
    return `
      <section class="restaurants favourite" id="/restaurants">
          <div class="container">
              <h2 class="section__header">Your Favourite</h2>
              <div class="restaurants__inner">

              </div>
          </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavouriteRestaurantIdb.getAllRestaurants();
    const restaurantsInner = document.querySelector('.restaurants__inner');
    restaurants.forEach((restaurant) => {
      restaurantsInner.innerHTML += createRestaurantTemplate(restaurant);
    });
  },
};

export default Favourite;
