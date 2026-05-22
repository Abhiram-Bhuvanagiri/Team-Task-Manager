# 🚀 Team Task Manager

A modern full-stack MERN application for managing projects and tasks with authentication, dashboard management, and task status tracking.

---

# ✨ Features

## 🔐 Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Logout Functionality

## 📁 Project Management
- Create Projects
- View Projects
- Manage Team Tasks

## ✅ Task Management
- Create Tasks
- Assign Tasks to Projects
- Task Status Tracking
- Mark Tasks as Completed

## 🎨 Modern UI
- Responsive Design
- Glassmorphism UI
- Gradient Backgrounds
- Animated Login/Register Pages
- Modern Dashboard

---

# 🛠️ Tech Stack

## Frontend
- React.js
- React Router DOM
- Axios
- CSS3
- Framer Motion

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt.js

---

# 📂 Folder Structure

```bash
team-task-manager/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Abhiram-Bhuvanagiri/Team-Task-Manager.git
```

---

## 2️⃣ Install Frontend Dependencies

```bash
cd client
npm install
```

---

## 3️⃣ Install Backend Dependencies

```bash
cd ../server
npm install
```

---

# 🔑 Environment Variables

Create `.env` file inside `server` folder:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=mysecretkey
```

---

# ▶️ Run Application

## Start Backend

```bash
cd server
npm run dev
```

---

## Start Frontend

```bash
cd client
npm run dev
```

---

# 🌐 API Routes

## Authentication
- POST `/api/auth/register`
- POST `/api/auth/login`

## Projects
- GET `/api/projects`
- POST `/api/projects`

## Tasks
- GET `/api/tasks`
- POST `/api/tasks`
- PUT `/api/tasks/:id`

---

# 📸 Screenshots

## Login Page
Modern animated authentication page with glassmorphism UI.

## Dashboard
Task and project management dashboard with responsive layout.

---

# 🚀 Future Improvements
- Drag & Drop Tasks
- Team Collaboration
- Notifications
- Task Priority Levels
- Charts & Analytics
- Dark/Light Mode
- Real-time Updates

---

# 👨‍💻 Author

**Abhiram Bhuvanagiri**

GitHub:
https://github.com/Abhiram-Bhuvanagiri

---
