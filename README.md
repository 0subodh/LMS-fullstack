# Library Management System

## Overview

The **Library Management System** is a full-stack web application designed to manage library resources efficiently. It allows users to search for books, manage borrow/return transactions, and handle administrative tasks seamlessly.

- **Client:** Built with React and BootStrap CSS for an interactive and responsive UI.
- **Server:** Developed using Node.js with Express, handling API requests and database operations.

## Features

### Client (React)

- User authentication (Login/Signup)
- Book search and filtering
- Borrowing and returning books
- User dashboard for tracking borrowed books
- Admin panel for managing books and users

### Server (Node.js + Express)

- RESTful API for handling client requests
- User authentication and role-based access
- Database operations (CRUD) for books and users
- Logging and error handling

## Tech Stack

### Frontend:

- **React.js**
- **React BootStrap Library**
- **React Router**

### Backend:

- **Node.js**
- **Express.js**
- **MongoDB**
- **JWT Authentication**

## Installation

### Prerequisites:

- **Node.js**
- **MongoDB**

### Setup Instructions

1. **Clone the Repository**
   ```sh
   git clone git@github.com:0subodh/LMS-fullstack.git
   cd LMS-fullstack
   ```
2. **Backend Setup**
   ```sh
   cd server_lms
   npm install
   npm start
   ```
3. **Frontend Setup**
   ```sh
   cd client_lms
   npm install
   npm start
   ```

## API Endpoints

| Method     | Endpoint     | Description                      |
| ---------- | ------------ | -------------------------------- |
| **GET**    | `/books`     | Fetch all books                  |
| **POST**   | `/books`     | Add a new book (Admin only)      |
| **PUT**    | `/books/:id` | Update book details (Admin only) |
| **DELETE** | `/books/:id` | Remove a book (Admin only)       |
| **POST**   | `/borrow`    | Borrow a book                    |
| **POST**   | `/return`    | Return a borrowed book           |

## Contribution

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the **MIT License**.

## Contact

For any inquiries or issues, please contact **Subodh Adhikari** at **subodh1adhikari@gmail.com**.
