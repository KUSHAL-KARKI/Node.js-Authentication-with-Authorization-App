# **Node.js Authentication with Authorization App**

This is a basic authentication and authorization application built with **Node.js**, **Express**, **EJS**, **MongoDB**, **bcrypt**, and **JWT** for secure password handling and user authentication. The app allows users to sign up, log in, and access protected routes based on roles (e.g., admin or user).

---

## **Features**
- **User Signup**: Create a new user with a hashed password stored securely in MongoDB.
- **User Login**: Authenticate users via JWT-based authentication.
- **Authorization**: Role-based access control using JWT and middleware (e.g., Admin vs. User).
- **Protected Routes**: Restrict access to certain routes based on user roles (admin, user).
- **Error Handling**: Graceful handling of invalid credentials and unauthorized access.
- **Cookies**: Secure JWT token stored in HTTP-only cookies for persistent sessions.
- **Dynamic Pages**: Pages rendered dynamically using **EJS** templates.

---

## **Technologies Used**
- **Node.js**: Backend runtime environment.
- **Express**: Web framework for routing and handling HTTP requests.
- **EJS**: Templating engine for dynamic HTML rendering.
- **MongoDB**: NoSQL database to store user data.
- **Mongoose**: Object Data Modeling (ODM) for MongoDB integration.
- **bcrypt**: Library for hashing passwords securely.
- **jsonwebtoken (JWT)**: Token-based authentication for secure login sessions.
- **cookie-parser**: Middleware for parsing cookies (used for storing JWT token).

---

## **Getting Started**

### **1. Prerequisites**
Ensure you have the following installed:
- **Node.js** (v14+)
- **MongoDB** (either local installation or use a cloud service like **MongoDB Atlas**)

### **2. Installation**
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/auth-app.git
   cd auth-app
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Set up your **.env** file in the project root:
   ```env
   JWT_SECRET=your-secret-key
   MONGO_URI=your-mongodb-connection-string
   ```

4. Start your **MongoDB** server (if running locally):
   ```bash
   mongod
   ```

---

### **3. Running the Application**
1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## **Project Structure**

```
├── src
│   ├── model
│   │   └── user.js        # Mongoose schema for user (including role)
│   ├── routes
│   │   └── authRoute.js   # Authentication routes (signup, login)
│   │   └── adminRoute.js  # Protected route for admin users
│   ├── middlewares
│   │   └── authMiddleware.js  # Authorization middleware for protected routes
│   └── app.js             # Main entry point for app setup
├── public
│   └── style.css          # Custom styles (optional)
├── views
│   │   ├── login.ejs      # Login page template
│   │   ├── signup.ejs     # Signup page template
│   │   ├── home.ejs       # Home page (after login)
│   │   └── admin.ejs      # Admin dashboard (protected route)
├── .env                   # Environment variables (JWT secret, MongoDB URI)
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
```

---

## **Endpoints**

| **Method** | **Route**    | **Description**                           |
|------------|--------------|-------------------------------------------|
| `GET`      | `/`          | Home page (accessible after login)        |
| `GET`      | `/signup`    | Signup form (create a new user)          |
| `POST`     | `/signup`    | Create a new user (hashed password)      |
| `GET`      | `/login`     | Login form (username and password)       |
| `POST`     | `/login`     | Authenticate user and issue JWT token    |
| `GET`      | `/admin`     | Admin dashboard (protected route)        |

---

## **Future Improvements**
- **Password Reset**: Add functionality to reset a forgotten password.
- **Enhance Security**: Implement features like rate limiting, brute force protection, and two-factor authentication (2FA).
- **Role-based Access**: Further extend roles and permissions, e.g., for moderators or super admins.
- **UI/UX Improvements**: Use front-end frameworks like Bootstrap or TailwindCSS for a better user interface.

---

## **License**
This project is licensed under the MIT License. See the `LICENSE` file for details.

---