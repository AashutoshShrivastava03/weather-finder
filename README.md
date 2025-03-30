# 🌦️ Weather Finder App

A full-stack weather application built using **React (Vite)** on the frontend and **Spring Boot** on the backend. The app allows users to search cities, get real-time weather data, and enjoy smooth UI with loading spinners and autocomplete suggestions.

---

## 🔗 Live Demo

🌐 [Live App Link](#) <!-- (To be added after deployment) -->

---

## ⚙️ Tech Stack

### Frontend
- React (Vite)
- CSS
- OpenWeatherMap APIs

### Backend
- Java Spring Boot
- REST API
- OpenWeatherMap Integration

---

## ✨ Features

- 🌍 City name autocomplete (Geocoding API)
- 🌦️ Real-time weather data (temperature, condition, etc.)
- ⚡ Loading spinner for smooth UX
- 📱 Responsive design
- 🔄 Integrated backend API for data fetching

---

## 🚀 Getting Started (Run Locally)

### 📁 Clone the repository

```bash
git clone https://github.com/AashutoshShrivastava03/weather-finder.git
cd weather-finder
```

## 🧩 Frontend Setup

```bash
cd WEATHER-FRONTEND
npm install
npm run dev
```

## ☕ Backend Setup (Spring Boot)
Make sure you have Java 17+ and Maven installed.

```bash
cd backend/weatherapp
./mvnw spring-boot:run
```
## 🔐 API Key Setup
You need an API key from OpenWeatherMap.

Add your key in the following backend file:

```bash
# backend/weatherapp/src/main/resources/application.properties
openweathermap.api.key=YOUR_API_KEY_HERE
```
## 📁 Folder Structure

```bash
weather-finder/
├── WEATHER-FRONTEND/        # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── assets/
│   │   └── ...
│   ├── public/
│   ├── package.json
│   └── ...
├── backend/
│   └── weatherapp/          # Spring Boot backend
│       ├── src/
│       │   ├── main/
│       │   └── test/
│       ├── pom.xml
│       └── ...
└── README.md
```

## 🙌 Acknowledgements

+ OpenWeatherMap API 🌐 [https://openweathermap.org/](#)
+ React
+ Spring Boot

## 📜 License
This project is open-source and available for educational and non-commercial use.

### Made with 💙 by Aashutosh Shrivastava
