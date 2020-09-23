/* eslint-disable max-len */
import RestaurantDbSource from '../../data/restaurantdb-source';
import {createRestaurantTemplate} from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <section class="hero" id="hero">
            <div class="filter container">
                <div class="hero__inner">
                    <h1>Perfect Taste</h1>
                    <p>Meet your perfect taste only on foodie</p>
                </div>
                <div class="square--1"></div>
                <div class="square--2"></div>
            </div>
        </section>

        <section class="restaurants" id="/restaurants">
            <div class="container">
                <h2 class="section__header">Grab It Now</h2>
                <div class="restaurants__inner">
                </div>
            </div>
        </section>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.getRestaurant();
    const restaurantsInner = document.querySelector('.restaurants__inner');
    const mainContent = document.querySelector('#mainContent');

    if (restaurants) {
      restaurants.forEach((restaurant) => {
        restaurantsInner.innerHTML += createRestaurantTemplate(restaurant);
      });
    } else {
      mainContent.innerHTML = '<h4 class="loadingIndicator">Failed to Load Data</h4>';
    }
  },
};

export default Home;
