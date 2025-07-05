🛠️ Setup Instructions
📦 Prerequisites
Node.js (v16 or higher)

npm (comes with Node)

1️⃣ Frontend (React) Setup
Navigate to the frontend folder:

bash
Copy
Edit
cd frontend
Install dependencies:

bash
Copy
Edit
npm install
This will install React, TailwindCSS, Axios, React-Toastify, and other required packages.

Start the frontend server:

bash
Copy
Edit
npm start
Open your browser and visit http://localhost:3000

2️⃣ Backend (Node.js) Setup
Navigate to the backend folder:

bash
Copy
Edit
cd backend
Install dependencies:

bash
Copy
Edit
npm install
This will install Express.js, LowDB, and other required packages.

Start the backend server:

bash
Copy
Edit
npm start
Backend API will run on http://localhost:5000

🗃️ Why use LowDB?
Unlike storing data in variables (which is temporary and resets every server restart), LowDB:
✅ Persists data to a JSON file (db.json).
✅ Provides a lightweight and simple database for small projects.
✅ Allows easy read/write operations without requiring a full database like MongoDB.

This makes it better than in-memory variables for saving user data.

📡 API Endpoints
POST /api/user
Description: Store user details (firstname, lastname, DOB).

Request Body:

json
Copy
Edit
{
  "firstname": "Jane",
  "lastname": "Doe",
  "dob": "2005-09-10"
}
GET /api/user
Description: Fetch the most recently saved user details.


# Clone the repository
git clone https://github.com/your-username/user-info-app.git

# Start Backend
cd backend
npm install
npm start

# Start Frontend
cd ../frontend
npm install
npm start
