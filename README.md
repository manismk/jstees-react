# JsTees
**JsTees is an Ecom app for those who love T-shirt and Javascript. Build with React .**

**Take a look at [Jstees](https://jstees-react.netlify.app/)**

[![Netlify Status](https://api.netlify.com/api/v1/badges/e31a5798-6d85-4cc7-a626-72f6f81d1636/deploy-status)](https://app.netlify.com/sites/jstees-react/deploys)

---

## Table of Contents
1. [Features](#Features)
2. [Todo](#todo)
3. [Demo](#demo)
4. [Reference](#reference)
5. [Author](#author)

---

## Features

**Login** 
- User able to login by entering email and password
- User can use guest credentials to login
- Form validation is done for login fields

**Sign Up**
- User able to create account and signup for the site
- Form validation is done for signup fields

**Home page**
- Landing page with list of featured categories of Tees
- Clicking on categories will take to product listing page with selected category.

**Product listing page**
- Product listing page with list of products card and filter
- Product card has button to wishlist and add to cart
- Clicking on each item on product page takes to single product page

**Filters**
- Filter by price - Range slider to filter the products based on price range.
- Filter by category - Filter based on available categories
- Filter by rating - Filter the products based on ratings
- Sort by price - Sort the products based on price

**Wishlist page**
- Wishlist page shows the list of wishlisted products by the user
- Remove from wishlist and add the product to cart

**Cart page**
- Cart page shows the list of products added to the cart
- Price card shows the actual price, discounted price, delivery charges and total price
- Can increase/decrease the quantity for each product
- Remove item from cart
- Move the product to wishlist from cart

**Private Routes**
- To wishlist and add items to cart you should be logged in.

**Single product page**
- Page for each product with detailed description about the product
- Button to wishlist and add to cart

**Profile page**
- User profile page with name and email id of the user
- Button to logout from the app.

**Search**
- Search bar in the navbar present for all the pages except auth pages
- Type the product name in search bar will show the list of products in drawer clicking on the that will take to the detailed product page

**Loaders and Toasts**
- Loaders and toast is provided as the acknowledgment to the users

**Coupon**
- User can apply the coupon on cart page
- Coupons will be shown in the popup based on cart value
- User can select any one coupon from the popup
- User can also remove the coupon and add other coupons

**Checkout Page**
- Checkout page shows summary of the product and delevering address
- Button to proceed payment.

**Payment Integration**
- Clicking on proceed to pay button on checkout page will open razor pay test payment
- After the successfull payment showing the message in toast, clearing the cart and redirecting to Home

As of now this app uses mock API as the backend, Hence the data can't be persisted on refresh. Will try to add backend in the future.

---

## Todo

- Address management
- Order summary

---

## Demo

![Jstees Demo](jstees-react.gif)

---

## Reference

Resources that help in building jstees includes

1. [React Js](https://reactjs.org/)
2. [React Router](https://reactrouter.com/)
3. [Google Fonts](https://fonts.google.com/)
4. [Fontawesome](https://fontawesome.com/)
5. [Mockbee](https://mockbee.netlify.app/)
6. [React toastify](https://fkhadra.github.io/react-toastify/introduction)
7. [Fastart component library](https://fastart.netlify.app/)

---

## Author

- [Manikandan](https://manikandan.netlify.app/)
- [Twitter](https://twitter.com/_manismk)
- [Linkedin](https://www.linkedin.com/in/manismk/)
