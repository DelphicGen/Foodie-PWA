/* eslint-disable max-len */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => {
  let cuisine = '';
  let foods = '';
  let drinks = '';
  let reviews = '';
  restaurant.categories.forEach((category, index) => {
    if (index === 0) cuisine += category.name;
    else cuisine += ', ' + category.name;
  });

  restaurant.menus.foods.forEach((food) => {
    foods += `<li>${food.name}</li>`;
  });

  restaurant.menus.drinks.forEach((drink) => {
    drinks += `<li>${drink.name}</li>`;
  });

  restaurant.consumerReviews.forEach((review) => {
    reviews += `
      <div class="restaurantDetail__review">
      <div class="restaurantDetail__reviewHeader">
          <span class="restaurantDetail__reviewer">
          ${review.name}</span>
          <span>
          ${review.review}</span>
      </div>
      <span class="restaurantDetail__reviewDate">${review.date}</span>
  </div>
      `;
  });

  return `
        <img class="restaurantDetail__image" src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}" crossorigin="anonymous" />

        <div class="restaurantDetail__header">
            <div class="restaurantDetail__status">
                <h3 class="restaurantDetail__name">${restaurant.name}</h3>
                <span>${cuisine}</span>
            </div>
            <hr />
            <div class="restaurantDetail__status">
                <span>${restaurant.city}, ${restaurant.address}</span>
                <span class="restaurants__rating"><span>${restaurant.rating}</span></span>
            </div>
            <hr />
        </div>

        <div class="restaurantDetail__body">
            <div class="restaurantDetail__menu">
                <div class="restaurantDetail__foods">
                    <h4>Foods</h4>
                    ${foods}
                </div>
                <div class="restaurantDetail__drinks">
                    <h4>Beverages</h4>
                    ${drinks}
                </div>
            </div>
            <hr />
            <div class="restaurantDetail__reviews">
                <h4>Reviews</h4>
                <div class="restaurantDetail__reviewsContainer">
                    ${reviews}
                </div>
            </div>
            <hr />
            <form class="restaurantDetail__reviewForm">
                <h4 class="restaurantDetail__addReviewHeader">Add Your Reviews</h4>
                <div class="restaurantDetail__inputContainer">
                    <label for="name">Name: </label>
                    <input type="text" placeholder="Your Name" required name="name" id="name" class="restaurantDetail__formName" />
                    <div class="input__after"></div>
                </div>
                <div class="restaurantDetail__inputContainer">
                    <label for="review">Review: </label>
                    <input type="text" placeholder="Your Username" required name="review" id="review" class="restaurantDetail__formReview" />
                    <div class="input__after"></div>
                </div>

                <button class="restaurantDetail__addReviewBtn">Submit</button>

                <span class="reviewResult"></span>
            </form>
        </div>
    `;
};

const createRestaurantTemplate = (restaurant) => {
  return `
        <div class="restaurants__restaurant">
            <img class="restaurants__image" src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}" crossorigin="anonymous" />

            <div class="restaurants__details">
                <h3 class="restaurants__name"><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h3>
                <p class="restaurants__description">${restaurant.description}</p>
            </div>

            <div class="restaurants__footer">
                <span>${restaurant.city}</span>
                <span class="restaurants__rating"><span>${restaurant.rating}</span></span>
            </div>
        </div>
    `;
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
