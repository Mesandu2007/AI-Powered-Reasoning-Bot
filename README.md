🤖 Reasoning Bot – Full Stack Chat Application

Talker Bot is a simple full-stack chat application built using React for the frontend and FastAPI for the backend. The project demonstrates how a modern frontend can communicate with a Python backend through REST APIs, handling user input, asynchronous requests, and dynamic UI updates.

🚀 Features

Interactive chat interface

User and bot message styling

Auto-scrolling chat window

FastAPI backend for handling chat requests

React Hooks (useState, useEffect, useRef)

Error handling and loading state

Clean and responsive UI

<img width="837" height="837" alt="Screenshot 2025-12-28 235327" src="https://github.com/user-attachments/assets/d39c81fe-1a76-4d2f-8c67-c908d134826c" />
<img width="1300" height="860" alt="Screenshot 2025-12-28 235219" src="https://github.com/user-attachments/assets/9c8a4f9f-7581-4b33-97e6-b69a4572e40e" />






🛠️ Tech Stack
Frontend

React

JavaScript (ES6+)

HTML & CSS

React Icons

Backend

FastAPI

Python

Uvicorn

📁 Project Structure
talker-bot/
├── frontend/
│   ├── src/
│   ├── App.js
│   ├── App.css
│   └── package.json
│
├── backend/
│   ├── main.py
│   └── requirements.txt
│
└── README.md

⚙️ How It Works

The user types a message in the React frontend.

The message is sent to the FastAPI backend using a POST request.

The backend processes the message and sends a response.

The frontend displays both user and bot messages in a chat-style UI.

▶️ Running the Project Locally
1️⃣ Backend (FastAPI)
cd backend
pip install fastapi uvicorn
uvicorn main:app --reload


Backend will run at:

http://127.0.0.1:8000


API documentation:

http://127.0.0.1:8000/docs

2️⃣ Frontend (React)
cd frontend
npm install
npm start


Frontend will run at:

http://localhost:3000

🔗 API Endpoint

POST /chat

Request Body:

{
  "message": "Hello"
}


Response:

{
  "reply": "Hi! How can I help you?"
}

📌 Learning Outcomes

Understanding frontend-backend communication

Working with REST APIs

Managing state and side effects in React

Handling asynchronous operations

Structuring a full-stack project

Writing clean and maintainable code

🌱 Future Improvements

Add user authentication

Store chat history in a database

Improve AI responses

Deploy the application online

Add typing indicators and timestamps

👨‍💻 Author

Built by a second-year undergraduate passionate about software engineering and full-stack development.

⭐ If you like this project, feel free to star the repository!
