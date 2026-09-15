# TravelO --- Full-Stack Travel & Hotel Booking Application

TravelO is a full-stack travel and hotel discovery web application built
with **React.js**, **Node.js**, **Express.js**, and **MongoDB**.

The application allows users to explore stays by destination and
category, view hotel details, apply filters, maintain a wishlist, create
an account/sign in, select travel dates and guests, and proceed through
a booking/checkout flow.

## Live Demo

-   **Frontend:** https://traveloapp.netlify.app/
-   **Backend API:** https://travel-app-backend-vcgp.onrender.com/

> The backend is deployed separately from the React frontend. The
> frontend communicates with the backend through REST APIs.

------------------------------------------------------------------------

## Features

### User Authentication

-   User registration and login
-   Authentication handled through JWT access tokens
-   Login/signup modal interface
-   Protected wishlist interactions
-   Client-side validation for username, email, phone number, and
    password fields

### Hotel Discovery

-   Browse available hotels/stays
-   Browse properties by category
-   Search properties by destination
-   View individual hotel/property details
-   Display hotel rating, location, images, and nightly price

### Search & Filtering

-   Destination-based hotel search
-   Category-based filtering
-   Price range filtering
-   Number of bedrooms
-   Number of beds
-   Number of bathrooms
-   Property type
-   Hotel rating
-   Free cancellation option
-   Clear-all and apply-filter controls

### Wishlist

-   Add hotels to a wishlist
-   Remove hotels from the wishlist
-   View saved properties
-   Wishlist actions depend on authentication state

### Stay / Booking Flow

-   Select check-in and check-out dates
-   Select number of guests
-   View hotel-specific pricing
-   Calculate number of nights
-   Calculate service fee
-   Display total payable amount
-   Booking confirmation/checkout page
-   Razorpay is displayed as the intended payment method in the checkout
    UI

> **Note:** The current implementation contains the Razorpay payment
> option and a "Confirm Booking" UI, but the repository does not contain
> a completed Razorpay payment-processing integration.

------------------------------------------------------------------------

# Tech Stack

## Frontend

### React.js

The frontend is a React 18 single-page application.

**Version:** `18.3.1`

Used for: - Component-based UI development - Page rendering -
Application state - Reusable UI components

### React Router DOM

**Version:** `6.23.1`

Used for client-side routing between pages such as:

-   Home
-   Search results
-   Hotel details
-   Filters
-   Wishlist
-   Booking/checkout

Example application routes:

``` text
/
 /hotels/:address
 /hotels/:name/:state/:hotelId/reserve
 /filters
 /wishlist
 /confirm-booking/stay/:id
```

### Axios

**Version:** `1.7.2`

Used for HTTP communication between the React frontend and Express
backend.

The frontend uses Axios to: - Fetch hotels - Fetch categories - Register
users - Authenticate users - Retrieve individual hotel information -
Communicate with wishlist-related APIs

### React Context API

The application uses React Context for sharing application state across
components.

Contexts include:

-   `AuthContext`
-   `CategoryContext`
-   `DateContext`
-   `FilterContext`
-   `WishlistContext`

### React `useReducer`

`useReducer` is used for structured state management for:

-   Authentication
-   Dates/search state
-   Filters
-   Wishlist

This keeps state transitions centralized through reducer actions.

### React Datepicker

**Version:** `6.9.0`

Used for selecting check-in and check-out dates.

### React Infinite Scroll Component

**Version:** `6.1.0`

Included for infinite-scroll style content handling.

### Material UI

**Version:** `5.15.20`

Used for UI components and styling utilities where applicable.

### Emotion

Packages:

-   `@emotion/react`
-   `@emotion/styled`

Used as the styling engine associated with Material UI.

### UUID

**Version:** `9.0.1`

Used for generating UUIDs where unique identifiers are required on the
frontend.

### CSS

The project also uses regular CSS files for component-specific and
page-specific styling.

The frontend contains dedicated stylesheets for components such as:

-   Navbar
-   Hotel cards
-   Authentication
-   Filters
-   Categories
-   Hotel details
-   Hotel images
-   Search
-   Wishlist
-   Payment/checkout

------------------------------------------------------------------------

# Backend

## Node.js

Node.js provides the JavaScript runtime for the backend.

## Express.js

**Version:** `4.19.2`

Express is used to build the REST API and handle:

-   HTTP requests
-   Routing
-   Middleware
-   Authentication middleware
-   API responses

## MongoDB

MongoDB is used as the application's database for persistent storage.

The backend stores application data such as:

-   Users
-   Hotels
-   Categories
-   Wishlist information

## Mongoose

**Version:** `8.4.0`

Mongoose is used as the MongoDB ODM.

The project defines models for:

-   Users
-   Hotels
-   Categories
-   Wishlist

Mongoose provides schema definitions and database interaction through
the Node.js backend.

## JSON Web Token (JWT)

**Version:** `9.0.2`

JWT is used for authentication.

The authentication flow is broadly:

``` text
User
 │
 ├── Register/Login
 │
 ▼
Express API
 │
 ▼
Authentication
 │
 ▼
JWT Access Token
 │
 ▼
Frontend
 │
 ▼
Protected API Requests
```

The backend also contains authentication middleware for verifying
authenticated requests.

## Crypto-JS

**Version:** `4.2.0`

Used for AES-based cryptographic operations in the authentication flow.

## CORS

**Version:** `2.8.5`

Cross-Origin Resource Sharing is enabled so the separately deployed
React frontend can communicate with the backend API.

## dotenv

**Version:** `16.4.5`

Used for loading configuration values from environment variables.

This is useful for keeping values such as database configuration outside
the source code.

## UUID

**Version:** `9.0.1`

Used on the backend where UUID-based unique identifiers are required.

## Nodemon

**Version:** `3.1.2`

Used during backend development to automatically restart the Node.js
server when source files change.

------------------------------------------------------------------------

# Development & Build Tools

  -----------------------------------------------------------------------
  Tool                                Purpose
  ----------------------------------- -----------------------------------
  Git                                 Version control

  GitHub                              Source-code hosting

  npm                                 Package/dependency management

  Node.js                             JavaScript runtime

  Nodemon                             Backend development auto-restart

  Create React App / `react-scripts`  React development and production
                                      build tooling

  VS Code                             Development environment
  -----------------------------------------------------------------------

The React application uses:

``` text
react-scripts 5.0.1
```

for development, testing, and production builds.

------------------------------------------------------------------------

# Architecture

The application follows a client-server architecture.

``` text
                    ┌─────────────────────┐
                    │       User          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React Frontend    │
                    │                     │
                    │ React Router       │
                    │ Context API        │
                    │ useReducer         │
                    │ Axios              │
                    │ Material UI        │
                    └──────────┬──────────┘
                               │
                         HTTP / REST API
                               │
                               ▼
                    ┌─────────────────────┐
                    │  Node.js + Express  │
                    │                     │
                    │ Routes              │
                    │ Controllers         │
                    │ Middleware          │
                    │ JWT Authentication  │
                    └──────────┬──────────┘
                               │
                          Mongoose ODM
                               │
                               ▼
                    ┌─────────────────────┐
                    │      MongoDB        │
                    │                     │
                    │ Users               │
                    │ Hotels              │
                    │ Categories          │
                    │ Wishlist            │
                    └─────────────────────┘
```

------------------------------------------------------------------------

# Frontend Project Structure

``` text
travel-app-frontend-main/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   ├── AuthModal/
│   │   ├── Categories/
│   │   ├── DateSelector/
│   │   ├── Filters/
│   │   │   ├── FreeCancel/
│   │   │   ├── PriceRange/
│   │   │   ├── PropertyType/
│   │   │   └── RoomsAndBeds/
│   │   ├── FinalPrice/
│   │   ├── HotelCard/
│   │   ├── HotelDetails/
│   │   ├── HotelImages/
│   │   ├── Navbar/
│   │   └── SearchStayWithDate/
│   │
│   ├── context/
│   │   ├── auth-context.js
│   │   ├── category-context.js
│   │   ├── date-context.js
│   │   ├── filter-context.js
│   │   └── wishlist-context.js
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── Payment/
│   │   ├── SearchResults/
│   │   ├── SingleHotel/
│   │   └── Wishlist/
│   │
│   ├── reducer/
│   │   ├── auth-reducer.js
│   │   ├── date-reducer.js
│   │   ├── filter-reducer.js
│   │   └── wishlist-reducer.js
│   │
│   ├── services/
│   │   ├── login-service.js
│   │   └── signup-service.js
│   │
│   ├── utils/
│   │   ├── email-regex.js
│   │   ├── find-hotel-in-wishlist.js
│   │   ├── name-regex.js
│   │   ├── number-regex.js
│   │   └── password-regex.js
│   │
│   ├── App.js
│   └── index.js
│
├── package.json
└── package-lock.json
```

------------------------------------------------------------------------

# Backend Project Structure

``` text
Travel-App-Backend-main/
│
├── config/
│   └── dbconfig.js
│
├── controllers/
│   ├── categoryController.js
│   ├── hotelController.js
│   ├── signinController.js
│   ├── signupController.js
│   ├── singlehotelController.js
│   └── wishlistController.js
│
├── data/
│   ├── categories.js
│   └── hotels.js
│
├── middleware/
│   └── verifyuser.js
│
├── model/
│   ├── category.model.js
│   ├── hotel.model.js
│   ├── user.model.js
│   └── wishlist.model.js
│
├── routes/
│   ├── auth.router.js
│   ├── category.router.js
│   ├── categoryimport.router.js
│   ├── dataimport.router.js
│   ├── hotel.router.js
│   ├── singlehotel.router.js
│   └── wishlist.router.js
│
├── server.js
├── package.json
└── package-lock.json
```

------------------------------------------------------------------------

# API Overview

The frontend communicates with the deployed backend through the
following REST API endpoints.

## Authentication

``` http
POST /api/auth/register
POST /api/auth/login
```

## Hotels

``` http
GET /api/hotels
GET /api/hotels?category=<category>
GET /api/hotels/:id
```

## Categories

``` http
GET /api/categories
```

## Wishlist

``` http
POST /api/wishlist
GET /api/wishlist
DELETE /api/wishlist/:id
```

## Data Import

``` http
POST /api/hoteldata
POST /api/categorydata
```

------------------------------------------------------------------------

# State Management

The application uses **React Context API + `useReducer`** rather than an
external state-management library such as Redux.

### Authentication State

Manages:

-   Authentication modal
-   Username
-   Email
-   Phone number
-   Password fields
-   Access token
-   Selected authentication tab

### Date/Search State

Manages:

-   Destination
-   Number of guests
-   Check-in date
-   Check-out date
-   Search modal state

### Category State

Manages the currently selected hotel category.

### Filter State

Manages:

-   Price range
-   Bedrooms
-   Beds
-   Bathrooms
-   Property type
-   Rating
-   Cancellation preference

### Wishlist State

Manages the user's currently selected/saved hotels.

------------------------------------------------------------------------

# Installation

## Prerequisites

Install the following before running the project:

-   Node.js
-   npm
-   MongoDB or a MongoDB Atlas database
-   Git

------------------------------------------------------------------------

## 1. Clone the Repository

``` bash
git clone https://github.com/Siddharth-Thakur100/Travel-App.git
cd Travel-App
```

------------------------------------------------------------------------

# Backend Setup

Navigate to the backend directory:

``` bash
cd Travel-App-Backend-main/Travel-App-Backend-main
```

Install dependencies:

``` bash
npm install
```

Create a `.env` file and add the required environment variables used by
the backend configuration.

Example:

``` env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

> Use the exact variable names expected by your backend configuration.
> Never commit real secrets or database credentials to GitHub.

Start the development server:

``` bash
npm start
```

The backend uses Nodemon, so changes to server files automatically
restart the development server.

------------------------------------------------------------------------

# Frontend Setup

Open another terminal and navigate to the frontend:

``` bash
cd travel-app-frontend-main/travel-app-frontend-main
```

Install dependencies:

``` bash
npm install
```

Start the React development server:

``` bash
npm start
```

The application will normally be available at:

``` text
http://localhost:3000
```

------------------------------------------------------------------------

# Production Build

To create a production build of the React frontend:

``` bash
npm run build
```

The generated production files are placed in the `build/` directory.

------------------------------------------------------------------------

# Environment & Deployment

The project is structured as two separately deployed applications:

``` text
Netlify
   │
   │ React Frontend
   ▼
TravelO UI
   │
   │ Axios / REST API
   ▼
Render
   │
   │ Node.js + Express
   ▼
MongoDB
```

Current deployment:

-   Frontend → Netlify
-   Backend → Render
-   Database → MongoDB

------------------------------------------------------------------------

# Technologies at a Glance

## Frontend

-   React.js
-   JavaScript
-   JSX
-   React Router DOM
-   React Context API
-   React `useReducer`
-   Axios
-   Material UI
-   Emotion
-   React Datepicker
-   React Infinite Scroll Component
-   CSS
-   UUID
-   Create React App / react-scripts

## Backend

-   Node.js
-   Express.js
-   JavaScript
-   MongoDB
-   Mongoose
-   REST APIs
-   JWT
-   Crypto-JS
-   CORS
-   dotenv
-   UUID
-   Nodemon

## DevOps / Development

-   Git
-   GitHub
-   npm
-   Netlify
-   Render
-   MongoDB / MongoDB Atlas
-   VS Code

------------------------------------------------------------------------

# Future Improvements

Potential improvements for the project include:

-   Complete Razorpay payment integration
-   Add persistent wishlist synchronization between frontend and backend
-   Add stronger password hashing such as bcrypt/Argon2
-   Add refresh-token based authentication
-   Add centralized API error handling
-   Add loading and error states throughout the UI
-   Add pagination/server-side filtering for hotel search
-   Add automated frontend and backend tests
-   Add API documentation using Swagger/OpenAPI
-   Add CI/CD using GitHub Actions
-   Improve responsive design and accessibility
-   Add booking history and user profile management
-   Add image optimization and CDN support
-   Move API base URLs into environment variables

------------------------------------------------------------------------

# Project Highlights

This project demonstrates practical experience with:

-   Full-stack JavaScript development
-   React component architecture
-   REST API development
-   MongoDB database integration
-   Mongoose data modeling
-   JWT-based authentication
-   Client-side state management
-   API integration using Axios
-   Search and filtering workflows
-   Wishlist functionality
-   Date-based booking calculations
-   Frontend/backend separation
-   Cloud deployment

------------------------------------------------------------------------

# Author

**Siddharth Thakur**

GitHub: https://github.com/Siddharth-Thakur100

------------------------------------------------------------------------

## License

This project is intended for educational and portfolio purposes.
