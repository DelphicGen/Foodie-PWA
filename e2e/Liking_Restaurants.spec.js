/* eslint-disable new-cap */
const assert = require('assert');
Feature('Liking Restaurants');

Scenario('liking one restaurant', async ({I}) => {
  I.amOnPage('/#/home');

  I.seeElement('.restaurants__name a');

  const firstRestaurant = locate('.restaurants__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurants__restaurant');
  const likedRestaurantName = await I.grabTextFrom('.restaurants__name a');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('disliking one restaurant', async ({I}) => {
  I.amOnPage('/#/home');
  I.seeElement('.restaurants__name a');
  let firstRestaurant = locate('.restaurants__name a').first();
  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurants__restaurant');
  firstRestaurant = locate('.restaurants__name a').first();
  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada restaurant untuk ditampilkan');
});
