# Ticket Booking System

A full-stack **Ticket Booking System** built using **Next.js, React, MongoDB Atlas, Mongoose, and Tailwind CSS**. The application allows organizers to manage venues and events while customers can browse events, book tickets, and view their bookings with QR code-based tickets.

---

## Live Demo

🔗 https://ticket-booking-system-one-green.vercel.app

---

## GitHub Repository

🔗 https://github.com/Ashlesha1524/Ticket-Booking-System

---

# Features

## Authentication
- User Registration
- User Login
- JWT Authentication
- Organizer and Customer Roles

## Organizer Module
- Organizer Dashboard
- Add Venue
- View Venues
- Delete Venue
- Create Events
- View Events

## Customer Module
- Browse Events
- View Event Details
- Select Seats
- Book Tickets
- View My Bookings
- Cancel Booking
- QR Code Ticket Generation

---

# Tech Stack

### Frontend
- Next.js
- React.js
- Tailwind CSS

### Backend
- Next.js API Routes
- Node.js

### Database
- MongoDB Atlas
- Mongoose

### Authentication
- JWT (JSON Web Token)
- bcryptjs

### Other Libraries
- QRCode React
- React Hot Toast
- Axios

---

# Project Structure

```
ticket-booking-system
│
├── app
│   ├── organizer
│   ├── customer
│   ├── venue
│   ├── event
│   ├── booking
│   ├── my-bookings
│   ├── login
│   ├── register
│   └── api
│
├── components
│
├── models
│
├── lib
│
├── public
│
└── package.json
```

---

# Installation

Clone the repository

```bash
git clone https://github.com/Ashlesha1524/Ticket-Booking-System.git
```

Move into the project

```bash
cd Ticket-Booking-System
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# Environment Variables

Create a `.env.local` file.

```env
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY

EMAIL_USER=YOUR_EMAIL

EMAIL_PASS=YOUR_EMAIL_PASSWORD
```

---

#  Future Enhancements

- Online Payment Gateway
- Booking Analytics Dashboard
- Admin Reports

---

#  Developed By

**Ashlesha Mishra**

B.Tech CSE (Data Science)

Pranveer Singh Institute of Technology

