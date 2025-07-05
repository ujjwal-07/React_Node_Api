#  User Info App – Full Stack (React + Node.js)

This is a **full-stack web application** that allows users to submit their details (firstname, lastname, and DOB), fetch a random dog image, and display the user’s calculated age.  

The project is built using:  
- 🌐 **Frontend**: React (Create React App) + TailwindCSS  
- 🔗 **Backend**: Node.js + Express + LowDB  

---

## 🛠️ Setup Instructions

### 📦 Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node)

---

### 1️⃣ Frontend (React) Setup

1. Navigate to the frontend folder:
   ```bash
   cd frontend
2. Install dependencies:
    ```bash
    npm install
3. Start the frontend:
    ```bash
    npm run dev
4. React app will run on http://localhost:3000 (or similar)



### 2️⃣ Backend (Node.js API)


1. Navigate to the backend folder:
    ```bash
    cd backend
2. Install dependencies:
    ```bash
    npm install
3. Start the server:
    ```bash
    npm start
4. Server will run on http://localhost:5000




## API Reference

#### 📝 Get Latest User


```http

  GET /api/user
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| None |   - | Fetch the most recently saved user details. |

📦 Response Example:

    {
        "data": {
            "firstname": "Ujjwal",
            "lastname": "pandey",
            "dob": "2002-02-21"
        }
    }

#### 📝 Add New User

```http
  POST /api/user
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| None      | - | 📄 Description: Store user details (firstname, lastname, dob).|

📄 Description: Store user details (firstname, lastname, dob).

| Parameter | Type     | Description                               |
| --------- | -------- | ----------------------------------------- |
| firstname | `string` | **Required.** User's first name.          |
| lastname  | `string` | **Required.** User's last name.           |
| dob       | `string` | **Required.** Date of birth (YYYY-MM-DD). |


#### ✅ Request Body Example:

    {
    "firstname": "Jane",
    "lastname": "Doe",
    "dob": "2005-09-10"
    }

#### ✅ Request Body Example:

    {
        "status": "success",
        "data": {
            "firstname": "Ujjwal",
            "lastname": "pandey",
            "dob": "2002-02-21"
        }
    }

# Clone the repository
git clone https://github.com/ujjwal-07/React_Node_Api.git

# Start Backend
    cd backend
    npm install
    npm start

# Start Frontend
    cd ../frontend
    npm install
    npm start


