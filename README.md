Here is a **complete, professional README** you can use for your capstone. It is written in the style expected for **GitHub portfolio projects**, **bootcamp submissions**, and **frontend developer portfolios**. It clearly explains your app, technologies, APIs, and features.

You can copy this directly into:

```
README.md
```

---

# 🌍 Travel Planner App

A modern **React travel planning application** that allows users to search for destinations, explore travel information, view flight and hotel offers, and save personalized travel itineraries.

The app integrates real-world travel APIs to provide users with relevant travel data and helps them organize and manage their trips in one place.

---

# ✈️ Project Overview

The **Travel Planner** helps users plan their trips by allowing them to:

* Search destinations around the world
* View detailed destination information
* Explore flight offers
* Browse available hotels
* View popular attractions
* Save travel itineraries
* Manage saved trips

The project demonstrates **API integration, React state management, reusable components, and responsive UI design**.

---

# 🧰 Technologies Used

### Frontend

* React
* Vite
* JavaScript (ES6+)
* HTML5
* Tailwind CSS
* React Router

### APIs

* **Amadeus Travel API**

  * Destination search
  * Flight offers
  * Hotel offers

* **Unsplash Image API**

  * Destination images

### Browser Storage

* LocalStorage

  * Saves user itineraries

---

# 🚀 Features

## 🔍 Destination Search

Users can search for destinations by entering a city name.

Example searches:

```
Paris
London
Tokyo
Dubai
New York
```

The application fetches matching destinations from the **Amadeus Locations API** and displays them as destination cards.

---

## 🏙 Destination Cards

Each destination card displays:

* City Name
* Country
* Destination image

Users can click a destination to view more details.

---

## 📍 Destination Details Page

The details page provides travel information including:

### Top Attractions

Popular landmarks and activities for the selected city.

Example:

* Eiffel Tower
* Louvre Museum
* Burj Khalifa
* Times Square

---

### ✈️ Flight Offers

The app fetches available flights using the **Amadeus Flight Offers API**.

Displayed information includes:

* Airline
* Price
* Departure time

---

### 🏨 Hotel Accommodations

Hotels are fetched using the **Amadeus Hotel Offers API**.

Displayed information includes:

* Hotel name
* Hotel ID
* Availability

---

## 📅 Travel Itinerary Planner

Users can create and manage travel itineraries.

Features include:

* Selecting travel dates
* Choosing flights
* Choosing hotels
* Saving trips

---

## 💾 Saved Trips

Users can save trips and manage them later.

Saved trips include:

* City
* Country
* Travel date
* Selected flight
* Selected hotel

Trips are stored in **localStorage**, allowing them to persist even after refreshing the page.

Users can also:

* View saved trips
* Delete trips

---

# 📂 Project Structure

```
src
│
├── components
│   ├── DestinationCard.jsx
│   ├── DestinationList.jsx
│   ├── SearchBar.jsx
│
├── pages
│   ├── HomePage.jsx
│   ├── DestinationDetails.jsx
│   ├── SavedTrips.jsx
│
├── services
│   └── api.js
│
├── utils
│   ├── tripStorage.js
│   └── getDestinationImage.js
│
├── data
│   └── attractions.js
│
├── Layout.jsx
├── App.jsx
└── main.jsx
```

---

# 🔌 API Endpoints Used

### Search Destinations

```
GET /v1/reference-data/locations
```

Example:

```
https://test.api.amadeus.com/v1/reference-data/locations?keyword=Paris&subType=CITY
```

Returns matching destinations.

---

### Flight Offers

```
GET /v2/shopping/flight-offers
```

Example:

```
originLocationCode=LON
destinationLocationCode=PAR
departureDate=2024-10-01
```

Returns available flight offers.

---

### Hotel Offers

```
GET /v2/shopping/hotel-offers
```

Example:

```
https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=PAR
```

Returns hotel accommodations.

---

# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/travel-planner.git
```

Navigate into the project:

```bash
cd travel-planner
```

Install dependencies:

```bash
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file in the root directory:

```
VITE_AMADEUS_API_KEY=your_api_key
VITE_AMADEUS_API_SECRET=your_api_secret
```

You can obtain an API key by registering at:

👉 [https://developers.amadeus.com/](https://developers.amadeus.com/)

---

# ▶️ Run the Application

Start the development server:

```
npm run dev
```

Open the app in your browser:

```
http://localhost:5173
```

---

# 📱 Responsive Design

The application is fully responsive and optimized for:

* Desktop
* Tablet
* Mobile devices

Tailwind CSS ensures a consistent and flexible layout across different screen sizes.

---

# 🛠 Error Handling

The application includes error handling for:

* API request failures
* Network issues
* No search results
* Missing travel data

User-friendly messages are displayed when issues occur.

---

# 🌟 Future Improvements

Possible future enhancements include:

* User authentication
* Cloud database for saved trips
* Budget tracking
* Route optimization
* Weather forecasts
* Social sharing of itineraries
* Dark mode

---

# 🌐 Deployment

The application can be deployed using:

* Netlify
* Vercel
* GitHub Pages

Example deployment steps:

```
npm run build
```

Upload the `dist` folder to your hosting platform.

---

# 👨‍💻 Author

Developed by:

Abubakar Sadic

Frontend Developer

---

# 📜 License

This project is for educational purposes and part of a **Frontend Capstone Project**.
