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

