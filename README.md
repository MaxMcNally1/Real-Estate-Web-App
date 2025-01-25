# Real Estate Marketplace - MERN Stack Application

A full-stack real estate marketplace built with MongoDB, Express.js, React, and Node.js. Features user authentication, property listing management, advanced search functionality, and image uploads.

## Features

- JWT and Google OAuth authentication
- Property listing CRUD operations
- Multi-image upload functionality
- Advanced search with filters and sorting
- Responsive design with Tailwind CSS
- User dashboard for listing management

## Tech Stack

- MongoDB
- Express.js
- React.js
- React Redux 
- Node.js
- JWT
- Google OAuth
- Tailwind CSS
- Firebase Storage

## Deployment

The application is deployed using Render. Access the live demo at https://mern-estate-4nem.onrender.com

## Setup

### Prerequisites
- Node.js
- MongoDB
- Firebase account

### Installation
```bash
# Clone repository
git clone https://github.com/MaxMcNally1/Real-Estate-Web-App.git

# Install backend dependencies
cd api
npm install

# Install frontend dependencies
cd ../client
npm install
```

### Environment Variables

```bash
# Create variable files and add variables
`client/.env`:

VITE_FIREBASE_API_KEY=your-firebase-api-key


`api/.env`:

MONGO=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret
```

### Running the Application
```bash
# Start backend server (from api directory)
npm start

# Start frontend development server (from client directory)
npm run dev
```

### View locally hosted site 
```bash
http://localhost:5173
```

## License
MIT


## Troubleshooting 
MongoDB might pause the clusters assiociated with this app if not in regular use.
Email Max McNally to have the clusters reset. 

Enable pop ups to use Google OAuth
