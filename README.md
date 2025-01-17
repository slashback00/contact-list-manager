Contact List Manager

A simple web application to manage contacts. Users can add, view, and search for contacts by name or email. Built with a Node.js backend, MongoDB database, and React frontend.

Features

    Add Contacts: Users can add a contact with a name and a unique email.
    View Contacts: Displays a list of all contacts in the database.
    Search Contacts: Allows users to search contacts by name or email.

Tech Stack
Backend

    Node.js: Server-side runtime.
    Express.js: Web framework.
    MongoDB: Database for storing contact data.
    Mongoose: MongoDB object modeling.

  Frontend
  
    React: Library for building the user interface.
    Axios: For making API requests.


Installation
Prerequisites

    Node.js: Install Node.js from nodejs.org.
    MongoDB: Ensure MongoDB is installed and running on your system.
    Git: For cloning the repository.

Backend Setup

    Navigate to the backend folder:

cd backend

Install dependencies:

    npm install

Start the server:

    npx nodemon server.js

    The backend will run on http://localhost:5002.

Frontend Setup

    Navigate to the frontend folder:

    cd frontend

Install dependencies:

    npm install

Start the React development server:

    npm start

    The frontend will run on http://localhost:3000.

API Endpoints
Base URL

    http://localhost:5002
Routes

    Add a Contact
    POST /contacts
    Request Body:

{
  "name": "John Doe",
  "email": "johndoe@example.com"
}

Response:

{
  "message": "Contact added successfully",
  "contact": {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "_id": "12345"
  }
}

Get All Contacts
GET /contacts
Response:

{
  "message": "Contacts fetched successfully",
  "contacts": [
    {
      "name": "John Doe",
      "email": "johndoe@example.com",
      "_id": "12345"
    }
  ]
}

Search Contacts
GET /contacts/search?query=<search_query>
Response:

    {
      "message": "Contacts fetched successfully",
      "contacts": [
        {
          "name": "John Doe",
          "email": "johndoe@example.com",
          "_id": "12345"
        }
      ]
    }

Directory Structure

contact-list-manager/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .gitignore
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── components/
│   ├── package.json
│   ├── package-lock.json
│   └── .gitignore
└── README.md

Troubleshooting

    MongoDB not running
    Make sure MongoDB is installed and running:

mongod --dbpath ~/data/db

Backend server not starting
Check for any errors when running:

    npx nodemon server.js

Frontend issues
If npm start doesn't work, ensure all dependencies are installed:

    npm install


Approach and Design Decisions
Approach

    Backend:
        A RESTful API was developed using Express.js to handle requests from the frontend.
        MongoDB was used as the database, and Mongoose was employed for schema modeling.
        Clear separation of concerns was maintained: the backend is responsible for data storage and retrieval, while the frontend handles presentation.

    Frontend:
        Built with React to create a responsive and dynamic UI.
        Axios was used for API communication to perform CRUD operations.
        React state management was used to dynamically update the UI based on user actions and server responses.

    API Endpoints:
        Endpoints for adding, retrieving, and searching contacts were designed.
        Validation checks were implemented in the backend to ensure unique emails.

Design Decisions

    Database:
        MongoDB was chosen for its flexibility and JSON-like document storage, which is ideal for handling contact records.
        Unique constraints were applied to the email field to ensure data integrity.

    Backend Validation:
        Validation logic was implemented in the backend to prevent duplicate email entries and handle errors gracefully.
        Error handling provides meaningful feedback to the frontend, improving user experience.

    Frontend Communication:
        Axios was selected for its ease of use and support for promises, making API requests straightforward.
        Use of React state ensures real-time updates when data changes.

    Trade-offs:
        Single Backend Port: The backend server listens on a single port (5002), simplifying deployment but requiring CORS for cross-origin requests during development.
        MongoDB Local Setup: Requires MongoDB to be running locally, which might not be ideal for production. Switching to a cloud database like MongoDB Atlas in production is a viable option.
