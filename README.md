# Project: MyReads

# Description

  This project was created as part of the Udacity React Nanodegree Program. This is a single page web application that has the following features:
  - Users can categorize books as "Currently Reading", "Want to Read", "Read", and "None"
  - Users can enter search terms into the search box to view more books
  - Users can update the category for any given book and it will render to the proper shelf
  - Users can click on a books cover to be taken to a page where more information about the book is displayed

  #### How the components interact with each other:

```
BooksApp.js
└───BookShelf.js
└───SearchBooks.js
└───Book.js

```


# Required Libraries and Dependencies
   - React Router : run `yarn add react-router-dom`
   - PropTypes : run `yarn add prop-types`

# How to Run Project
   1.  Download all Project files
   2.  Run `yarn install` [yarn](https://yarnpkg.com/en/) is preferred package for ReactJs or `npm install` to install all required dependancies &packages .
   3.  Run `yarn start`  or `npm start`
   3.  open browser [MyReads App](http://localhost:3000/)

# Resources

   1. [React Library](https://facebook.github.io/react/)
   2. [Create React App](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html)
   3. [Create React updates-Webpack2](https://facebook.github.io/react/blog/2017/05/18/whats-new-in-create-react-app.html)
   4. [React Router v4](https://tylermcginnis.com/build-your-own-react-router-v4/)