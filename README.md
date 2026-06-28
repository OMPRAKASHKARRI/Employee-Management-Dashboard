# 🚀 Employee Management Dashboard

A modern and responsive **Employee Management Dashboard** built with **React**, **Vite**, **Tailwind CSS**, and **Axios**.

The application provides a complete user management experience with advanced search, filtering, sorting, pagination, and CRUD operations using the JSONPlaceholder API.

---

## 📸 Project Preview



<img width="1873" height="905" alt="Screenshot 2026-06-28 122926" src="https://github.com/user-attachments/assets/b098baab-0ca9-40d0-8611-c7dcb26ae667" />

<img width="1537" height="885" alt="Screenshot 2026-06-28 123111" src="https://github.com/user-attachments/assets/6ee4a56e-390b-49f1-9b31-33a0f9a88de7" />



---

## ✨ Features

### 👥 User Management

- View employees
- Add new employee
- Edit employee details
- Delete employee
- Confirmation dialog before deletion

### 🔍 Search

- Search by First Name
- Search by Last Name
- Search by Email
- Search by Department

### 🎯 Filter

- Filter by First Name
- Filter by Last Name
- Filter by Email
- Filter by Department

### ↕ Sorting

Sort users by

- First Name
- Last Name
- Email
- Department

### 📄 Pagination

Supports

- 10 Rows
- 25 Rows
- 50 Rows
- 100 Rows

### ✅ Form Validation

Implemented using **React Hook Form**

Validation includes

- Required Fields
- Email Validation

### 🎨 Modern UI

- Responsive Design
- Sticky Toolbar
- Colored Department Badges
- Toast Notifications
- Loading Spinner
- Empty State
- Responsive Table

---

# 🛠 Tech Stack

- React 19
- Vite
- Tailwind CSS
- Axios
- React Hook Form
- React Icons
- React Hot Toast

---

# 📂 Folder Structure

```
src
│
├── api
│   ├── axios.js
│   └── userService.js
│
├── components
│   ├── DeleteModal
│   ├── FilterModal
│   ├── Header
│   ├── Pagination
│   ├── Toolbar
│   ├── UserForm
│   └── UserTable
│
├── hooks
│   └── useUsers.js
│
├── utils
│   └── badgeColors.js
│
├── App.jsx
└── main.jsx
```

---

# ⚙ Installation

Clone the repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
```

Go inside the project

```bash
cd YOUR_REPOSITORY_NAME
```

Install dependencies

```bash
npm install
```

Run locally

```bash
npm run dev
```

---

# 🌐 API Used

JSONPlaceholder

```
https://jsonplaceholder.typicode.com/users
```

HTTP Methods Used

- GET
- POST
- PUT
- DELETE

---

# 📌 Assumptions

Since JSONPlaceholder does not provide

- First Name
- Last Name
- Department

the application performs local data transformation.

- Full Name is split into First Name and Last Name.
- Department values are generated locally.
- 100 mock users are generated from the original 10 users to demonstrate pagination, filtering, sorting, and CRUD functionality without modifying the backend.

---

# ⚠ Challenges Faced

- JSONPlaceholder stores only 10 users.
- PUT and DELETE operations on locally generated users are not supported by the mock API.
- To provide a complete CRUD experience, local state management was implemented after successful API simulation.
- Pagination was demonstrated by generating additional mock users while keeping the original API unchanged.

---

# 🚀 Future Improvements

- Authentication & Authorization
- Dark Mode
- Export Users to CSV
- Server-side Pagination
- Real Backend Integration
- Unit Testing
- Role-Based Access Control

---

# 📱 Responsive Design

The application is fully responsive for

- Desktop
- Tablet
- Mobile

---

# 🎥 Demo

Live Demo

```
Add Vercel Link Here
```

---

# 💻 GitHub Repository

```
Add GitHub Repository Link Here
```

---

# 👨‍💻 Author

**Omprakash Karri**

Frontend Developer

