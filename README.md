# OAuth2 Google Login + JWT Demo 🚀

This is a **Spring Boot** project where I implemented **Google OAuth2 login** and **JWT-based authentication**.  
The goal of this project was to **learn and practice secure authentication and authorization in Java backend development**.

---

## What I Learned 🎓
- How to implement **OAuth2.0 login** with Google.  
- Generating and validating **JWT tokens** for stateless authentication.  
- Securing APIs with **Spring Security** and **roles-based authorization**.  
- Handling **stateless authentication** using filters (`OncePerRequestFilter`).  
- Best practices for **controller separation** (login vs secured endpoints).  
- Configuring **CORS and CSRF** for frontend-backend communication.  
- Integrating **Spring Data JPA** with MySQL for storing user details.  
- Using **RestTemplate** to interact with external APIs.  
- Understanding **token validation, token expiry, and secure user data handling**.

---

## Features ✨
- Login using **Google OAuth2.0**  
- **JWT token generation** for secure APIs  
- **Role-based secured endpoints**  
- Stateless authentication  

---

## Endpoints 🔗
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/auth/google/callback?code=` | Exchange Google auth code for JWT |
| GET | `/api/secure` | Access secured data with JWT |

---

## Tech Stack 🛠
Java | Spring Boot | Spring Security | OAuth2 | JWT | MySQL | Maven

---

## Author 👤
**Aashutosh Shrivastava** – Java Developer | Spring Boot | OAuth2 & JWT Enthusiast
