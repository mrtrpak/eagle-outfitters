# Eagle Outfitters

## Goal

- Using create react app and React I am making a mock online clothing shop to enhance my react knowledge and capabilities. This project will help show my abilities to work with an ever growing and expanding professional website.

## Website

[CLICK HERE to go to website!](https://eagle-outfitters.herokuapp.com/)

## Tools Used

- React
- Firebase
- Redux
- React-Redux
- Redux Persist
- Reselect
- Lodash.memoize
- Stripe
- Heroku: hosts deployed website
- Styled-Components

## Concepts Learned

- Memoization
- Currying
- Data Normalization: Objects being better for searching for items than Array. This is a common computing optimization when talking about data structures.

## Why Redux

- a great way to manage large amount of data in state

- useful for sharing data between components

- Predictable state management using 3 principles
  - single source of truth
  - state is read only
  - changes using pure functions

### Redux Flow

- Action: event by user
- Root Reducer: function that receives an input and an expected output (pure)
- Store: entire state of the app
- DOM Changes: the new state makes updates to the DOM

### UI Features

- Cart: the cart icon is able to update the total of items selected by the user to easily be able to reference how many items they have so far. Clicking the cart icon will show a summary of items selected with a photo, item description and how many of that item is in the cart.

- Login/Logout: a user can easily and quickly register on the website securely and upon being signed in a logout option will appear for the user to easily logout when they are ready.