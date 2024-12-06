# React CRUD App with JSON Server
## Description
This project is a simple CRUD (Create, Read, Update, Delete) application built with React and JSON Server. It manages a list of products where you can perform the following actions:

## View the list of products.
- Add new products.
- Edit existing products.
- Delete products.
- JSON Server is used as a mock backend to store and retrieve product data.

## Features

- Dynamic routing for creating, updating, and viewing the list of products.
- A responsive UI designed using Bootstrap.
- CRUD operations integrated with a JSON Server.
- Getting Started
- Prerequisites
- Node.js (v14 or higher)
- npm or yarn

---
Installation
1. Clone the Repository
Copier le code
```bash
git clone https://github.com/MostafaZrour/React-CRUD-Json-Server.git
```
cd React-CRUD-Json-Server
2. Install Dependencies
Copier le code
```bash
npm install
```
3. Install JSON Server
Install JSON Server globally (if not already installed):

Copier le code
```bash
npm install -g json-server
```
Running the Project
1. Start JSON Server
JSON Server uses a db.json file to simulate a REST API. Ensure that db.json is located in the project root.
Start JSON Server with the following command:

Copier le code
```bash
json-server --watch db.json --port 3001
```
2. Start the React Development Server
In a separate terminal, start the React application:

Copier le code
```bash
npm start
```
3. Open in the Browser
The application will run at:

Copier le code
```bash
http://localhost:3000
```
JSON Server will run at:

Copier le code
```bash
http://localhost:3001/products
```
Project Structure
php
Copier le code
```bash
React-CRUD-Json-Server/
├── public/            # Public assets
├── src/               # React application source code
│   ├── components/    # Contains all React components like forms, product lists, etc.
│   ├── pages/         # Page components for routing
│   └── App.jsx        # Main App component
├── db.json            # JSON Server's mock database file
├── package.json       # Project dependencies
└── README.md          # Documentation
```
## Usage
Add, edit, or delete products using the user interface.
All changes are reflected in the db.json file.
Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License
This project is open-source and available under the MIT License.