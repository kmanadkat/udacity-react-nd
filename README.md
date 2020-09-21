# Udacity - Become React Developer Nanodegree 

This Nanodegree teaches in depth these topics : React Fundamentals, React & Redux, and finally React Native. It contains several hands-on projects giving experience of learning and building industry applications from ground level. Enroll date : 16-09-2020. Below is my course log.

## [React Fundamentals](https://github.com/kmanadkat/udacity-react-nd/tree/master/1%20React%20Fundamentals) 📐📏

### Learnt following topics 🧠

1. Rendering complex UI with JSX
2. Creating Reusable Stateful & Stateless Components
3. Components Composition and Distribution
4. Managing States with setState
5. Higher level Components & Lifting Up State
6. Lifecycle events & Making HTTP requests in componentDidMount() method
7. Sequence of Lifecycle Events during Addition to DOM & Re-rendering of Components
8. React Router - BrowserRouter, Link, Route with history API

### Completed following Exercises & Projects 🕹

1. Rendering User Objects with JSX & Advanced ES6 Filter & Map methods - [1 Small Exercises](https://github.com/kmanadkat/udacity-react-nd/tree/master/1%20React%20Fundamentals/1%20Small%20Exercises)
3. Component Composition & Simple State Management - [2 Chats](https://github.com/kmanadkat/udacity-react-nd/tree/master/1%20React%20Fundamentals/2%20Chats)
2. Advanced State Management with Controlled Components - [3 GamersList](https://github.com/kmanadkat/udacity-react-nd/tree/master/1%20React%20Fundamentals/3%20GamersList)
4. Browser Router, Link, Route, History API & Statemanagement - [4 Contacts With API](https://github.com/kmanadkat/udacity-react-nd/tree/master/1%20React%20Fundamentals/4%20Contacts%20With%20API)

## ![Logo](https://github.com/kmanadkat/udacity-react-nd/blob/my-reads/build/favicon-32x32.png) My Reads - React Nanodegree First Project

This is a mini project for managing user's book shelf. User can categories each book in following shelf categories at `/` route

1. 📖 Currently Reading Books
2. 📚 Books To Read
3. 📦 Completed Reading Books

Book can be removed or added from `/search` route. The shelf states of these books is persistent and stored in a backend provided by udacity. 

**Project Note : ** 

1. Books which are present in shelf has **<span style="color: green">Green Action Menu</span>** button (rounded buttons above every book) & books which are not part of shelf has **<span style="color: blue">Blue Action button</span>**
2. Search Page tries to bring books through API after every letter is entered in input field.
3. Search Page shows no books when search field is empty or book for requested search string doesnot exists.



### ⚙️ Installation & Setup

You should have `npm` and `node` installed in your machine, to confirm type `node --version` in terminal. Below are steps to setup project in your system :

1. Clone the `my-reads` branch of this repository
2. Open Terminal in project folder (containing `package.json` file)
3. Run `npm install` and wait for all dependencies to download
4. Finally run `npm start` this will automatically launch application in default browser at `http://localhost:3000`



### 🕹 Test Online Version

The complete project is deployed at [**Netlify**](https://www.netlify.com/), Visit the following link to try it out : 

https://myreadskrupesh.netlify.app/



### 📖 Project Approach & Screenshots

![Approach](https://github.com/kmanadkat/udacity-react-nd/blob/my-reads/project.jpg)




<hr />



#### Home Page Route : `/`

![Home Page](https://github.com/kmanadkat/udacity-react-nd/blob/my-reads/home.png)


<hr />



#### Search Route : `/search`

![Search page](https://github.com/kmanadkat/udacity-react-nd/blob/my-reads/search.png)



<hr />



#### Book Details Route : `/book/:bookId`

![Book details route](https://github.com/kmanadkat/udacity-react-nd/blob/my-reads/book.png)
