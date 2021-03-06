/* eslint-disable max-len */
import RestaurantDbSource from '../../data/restaurantdb-source';
import {createRestaurantDetailTemplate} from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
        <div class="restaurantDetail"></div>
        <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const restaurantDetail = document.querySelector('.restaurantDetail');
    const mainContent = document.querySelector('#mainContent');

    if (restaurant) restaurantDetail.innerHTML = createRestaurantDetailTemplate(restaurant);
    else mainContent.innerHTML = '<h4 class="loadingIndicator">Failed to Load Data</h4>';

    const submitReview = document.querySelector('.restaurantDetail__addReviewBtn');
    submitReview && submitReview.addEventListener('click', (e) => {
      e.preventDefault();
      const name = document.querySelector('.restaurantDetail__formName').value;
      const review = document.querySelector('.restaurantDetail__formReview').value;
      const id = restaurant.id;
      const reviewResult = document.querySelector('.reviewResult');

      RestaurantDbSource.postReview({id, name, review})
          .then((result) => {
            if (result.ok) reviewResult.innerHTML = 'Successfully uploaded review';
          });
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        description: restaurant.description,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
