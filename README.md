# 📝 Task Filter API UI

> A lightweight full-stack application demonstrating how to connect a Vanilla JavaScript frontend with an Express.js backend using static file serving, REST APIs, query strings, and dynamic routing.

![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-active-success)

---

# 🔗 Repository

https://github.com/ravikantmahi/Task-Filter-api-ui

---

#  Features

## ⚡ Express-Powered Backend
- Lightweight and fast Node.js server using Express.js
- REST-style API architecture
- Beginner-friendly structure

## 🌐 Static Frontend Hosting
- Uses `express.static('public')`
- No separate frontend framework required
- Frontend served directly from Express

## 🔍 Query String Filtering (`req.query`)
Filter tasks dynamically using URL query parameters.

Example:

```bash
/api/tasks?status=pending
```

Supported filters:
- Pending tasks
- Completed tasks
- Dynamic task filtering

---

##  Dynamic Route Parameters (`req.params`)
Fetch specific task records dynamically.

Example:

```bash
/api/tasks/1
```

Useful for:
- Single task details
- Dynamic API routing
- RESTful APIs

---

## 🔄 Frontend Integration
- Uses browser-native `fetch()` API
- Dynamically updates the UI
- Real-time communication between frontend and backend

---

#  Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Backend runtime |
| Express.js | Web server framework |
| HTML5 | Frontend structure |
| CSS3 | Styling |
| Vanilla JavaScript | Frontend logic |
| Fetch API | API communication |

---

# 📂 Folder Structure

```text
Task-Filter-api-ui/
│
├── app.js                 # Express backend server
├── package.json           # Dependencies & metadata
├── package-lock.json
│
└── public/                # Static frontend files
    ├── index.html         # Frontend UI
    ├── style.css          # Styling
    └── script.js          # Frontend logic
```

---

#  Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/ravikantmahi/Task-Filter-api-ui.git
```

---

## 2️⃣ Navigate Into the Project

```bash
cd Task-Filter-api-ui
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Start the Server

```bash
node app.js
```

You should see:

```bash
Server running on http://localhost:5000
```

---

# 🌍 Open the Application

Open your browser and visit:

```text
http://localhost:5000
```

---

# 🧪 API Endpoints

## Get All Tasks

```http
GET /api/tasks
```

---

## Filter Tasks by Status

### Get Pending Tasks

```http
GET /api/tasks?status=pending
```

### Get Completed Tasks

```http
GET /api/tasks?status=completed
```

---

## Get Single Task

```http
GET /api/tasks/1
```

---

# 💡 Example Express Routes

## Query Parameters Example

```js
app.get('/api/tasks', (req, res) => {
    const { status } = req.query;

    if (status) {
        const filteredTasks = tasks.filter(
            task => task.status === status
        );

        return res.json(filteredTasks);
    }

    res.json(tasks);
});
```

---

## Route Parameters Example

```js
app.get('/api/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);

    const task = tasks.find(
        task => task.id === taskId
    );

    if (!task) {
        return res.status(404).json({
            message: 'Task not found'
        });
    }

    res.json(task);
});
```

---

# 🖥️ Frontend Fetch Example

```js
async function loadTasks() {
    const response = await fetch('/api/tasks');

    const data = await response.json();

    console.log(data);
}
```

---

#  Common Pitfall — Live Server Issue

Do NOT open `index.html` using the VS Code **Live Server** extension.

Why?
- Live Server runs on a different port (usually `5500`)
- Express runs on `5000`
- API requests may fail because they are not served from the same origin

✅ Correct Way:

Always open:

```text
http://localhost:5000
```

This ensures:
- Frontend and backend run together
- API routes work correctly
- No CORS problems

---

#  Learning Outcomes

By building this project, you will learn:

- Express.js fundamentals
- Static file serving
- REST API basics
- Query strings vs route parameters
- Frontend/backend communication
- Asynchronous JavaScript with `fetch()`
- Real-world project structure

---

# 📈 Future Improvements

Potential upgrades:

- ✅ Add MongoDB database
- ✅ Full CRUD operations
- ✅ Authentication system
- ✅ Responsive UI
- ✅ Dark mode
- ✅ Deploy on Render/Railway
- ✅ Add React frontend
- ✅ Persistent task storage

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new branch
3. Commit changes
4. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

Made with ❤️ by Ravi Kant

GitHub:
https://github.com/ravikantmahi
