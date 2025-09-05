# 🌲 Camply

Camply is a full-stack **campground review and booking platform** inspired by YelpCamp.  
It allows users to **explore campgrounds, post reviews, and manage their own listings**.  
This project demonstrates **Node.js + Express backend**, **MongoDB database**, and **EJS + Bootstrap frontend** with authentication, security, and deployment best practices.

---

## 🚀 Live Demo
🔗 [Deployed App on Render](https://camply-y27m.onrender.com/)  

---

## ✨ Features

- 🔐 **Authentication & Authorization**
  - Register, login, and logout with Passport.js
  - Passwords securely hashed using Passport-Local-Mongoose
  - Session persistence with MongoDB-backed sessions

- 🏕 **Campgrounds**
  - Create, Read, Update, Delete (CRUD) campgrounds
  - Upload images (local/Cloudinary support planned)
  - Integrated MapTiler maps for location visualization

- 💬 **Reviews**
  - Add reviews to campgrounds
  - Edit or delete only your own reviews
  - Flash messages for smooth UX feedback

- 🎨 **Frontend**
  - EJS templates with **EJS-Mate layouts**
  - Responsive styling via **Bootstrap 5**
  - Custom CSS for extra design tweaks

- 🛡 **Security**
  - Sessions stored securely in MongoDB Atlas with `connect-mongo`
  - Helmet for HTTP header protection
  - express-mongo-sanitize to prevent NoSQL injection
  - Strong cookie/session security options

- 📦 **Deployment Ready**
  - Tested with **Render**
  - Configurable with `.env` environment variables
  - Works with MongoDB Atlas (cloud database)

---

## 🛠 Tech Stack

| Layer          | Technology                     |
|----------------|---------------------------------|
| **Frontend**   | EJS, Bootstrap 5, Vanilla JS    |
| **Backend**    | Node.js, Express.js             |
| **Database**   | MongoDB (Atlas or local)        |
| **Auth**       | Passport.js (Local Strategy)    |
| **Sessions**   | express-session, connect-mongo  |
| **Security**   | helmet, express-mongo-sanitize  |
| **Deployment** | Render, MongoDB Atlas           |

---

## ⚙️ Installation & Setup

### 1. Clone the Repo
```bash
git clone https://github.com/anitgt/Camply.git
cd Camply
2. Install Dependencies
npm install

3. Setup Environment Variables

Create a .env file in the project root:

# MongoDB Atlas connection string (or local MongoDB)
DB_URL=mongodb://127.0.0.1:27017/Camply

# Session secret for express-session
SESSION_SECRET=yourSuperSecretKey

# MapTiler API key for maps integration
MAPTILER_API_KEY=yourMapTilerKey

4. Run MongoDB (if local)

Make sure MongoDB is installed and running:

mongod

5. Start the Server
npm start


Visit 👉 http://localhost:3000

📂 Project Structure
Camply/
├── app.js                  # Main entry point
├── models/                 # Database schemas (User, Campground, Review)
│   └── user.js
├── routes/                 # Express route handlers
│   ├── users.js
│   ├── campgrounds.js
│   └── reviews.js
├── views/                  # EJS templates
│   ├── layouts/
│   ├── partials/
│   └── error.ejs, home.ejs
├── public/                 # Static files (CSS, JS, images)
│   └── stylesheets/
├── utils/                  # Helper functions
│   └── mongoSanitizeV5.js
├── .env.example            # Example env file
├── package.json
└── README.md

🧑‍💻 Contributing

Fork the repo

Create a new branch:

git checkout -b feature-branch


Commit changes:

git commit -m "Added new feature"


Push and create a Pull Request



📧 Contact

Author: Anit Sarkar

GitHub: anitgt

Email: anit7795@gmail.com
