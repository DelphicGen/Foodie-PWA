import FavouriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import {createRestaurantTemplate} from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <section class="restaurants favorite" id="/restaurants">
          <div class="container">
              <h2 class="section__header">Your Favorite</h2>
              <div class="restaurants__inner">

              </div>
          </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavouriteRestaurantIdb.getAllRestaurants();
    const restaurantsInner = document.querySelector('.restaurants__inner');
    if (!restaurants) {
      restaurantsInner.innerHTML = 'Tidak restaurant untuk ditampilkan';
    } else {
      restaurantsInner.innerHTML = '';
      restaurants.forEach((restaurant) => {
        restaurantsInner.innerHTML += createRestaurantTemplate(restaurant);
      });
    }
  },
};

export default Favorite;
