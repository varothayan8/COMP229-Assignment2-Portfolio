# MyPortfolio – COMP229 Assignment 2 (Backend)

Node.js + Express REST API with MongoDB (Mongoose) and JWT authentication for the Assignment 1 portfolio frontend.

## Structure
```
MyPortfolio/
├── server.js                  # entry point – DB connection + "Welcome to My Portfolio application."
├── server/
│   ├── config/config.js       # port, JWT secret, MongoDB URI
│   ├── express.js             # Express app, middleware, route mounting, auth error handler
│   ├── models/                # user, contact, project, qualification (Mongoose)
│   ├── controllers/           # CRUD controllers + auth.controller (signin/signout/requireSignin)
│   ├── routes/                # REST routes per collection + auth routes
│   └── helpers/dbErrorHandler.js
├── client/                    # ← Assignment 1 frontend goes here
└── MyPortfolio.postman_collection.json
```

## Setup
1. `npm install` (root)
2. Put your MongoDB Atlas connection string in `server/config/config.js` (`mongoUri`) – database name **Portfolio** – or set the env var `MONGODB_URI`.
3. `node server.js` → open http://localhost:3000 → `{"message":"Welcome to My Portfolio application."}`
4. Run frontend + backend together: `cd client && yarn add --dev nodemon concurrently`, set
   `"dev": "concurrently \"vite\" \"nodemon ../server.js\""` in `client/package.json`, then `yarn dev`.

## API
| Method | URL | Action | Auth |
|---|---|---|---|
| POST | /auth/signin | sign in, returns JWT | – |
| GET | /auth/signout | sign out | – |
| GET / POST / DELETE | /api/users | all / sign up / remove all | DELETE needs token |
| GET / PUT / DELETE | /api/users/:id | by id | token (PUT/DELETE: own account only) |
| GET / POST / DELETE | /api/contacts | all / add / remove all | POST public, rest token |
| GET / PUT / DELETE | /api/contacts/:id | by id | token |
| GET / POST / DELETE | /api/projects | all / add / remove all | GET public, rest token |
| GET / PUT / DELETE | /api/projects/:id | by id | GET public, rest token |
| GET / POST / DELETE | /api/qualifications | all / add / remove all | GET public, rest token |
| GET / PUT / DELETE | /api/qualifications/:id | by id | GET public, rest token |

Protected requests send the header `Authorization: Bearer <token>` (token from `/auth/signin`).

Users: the `password` is a virtual field – it is hashed (HMAC-SHA1 + salt) and stored as `hashed_password`, never in plain text.
