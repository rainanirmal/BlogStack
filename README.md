# Blogstack 📝

A full-stack blogging application built with **Node.js**, **Express**, and **MongoDB** — developed to deepen backend development skills and explore real-world web application architecture.

🌐 **Live Demo** → [blogstack-rvma.onrender.com](https://blogstack-rvma.onrender.com)

---

## 🚀 Tech Stack

- **Runtime** — Node.js
- **Framework** — Express.js
- **Database** — MongoDB
- **ODM** — Mongoose
- **Templating Engine** — EJS
- **CSS Framework** — Bootstrap
- **Authentication** — JWT (JSON Web Tokens) + Cookie Parser
- **File Uploads** — Multer + Cloudinary (`multer-storage-cloudinary`)
- **Environment Variables** — dotenv

---

## 📁 Folder Structure

```
BlogStack/
├── controllers/
│   ├── blog.js            # Blog logic (add, view, comment)
│   └── user.js            # User logic (signup, signin, logout)
├── middlewares/
│   ├── authentication.js  # JWT cookie verification middleware
│   └── uploads.js         # Multer + Cloudinary upload config
├── model/
│   ├── blog.js            # Blog schema & model
│   ├── comment.js         # Comment schema & model
│   └── user.js            # User schema & model (with password hashing)
├── public/
│   └── images/            # Static images (default avatar)
├── routes/
│   ├── blog.js            # Blog routes
│   └── user.js            # User routes
├── services/
│   ├── authentication.js  # JWT sign & verify helpers
│   └── cloudinary.js      # Cloudinary configuration
├── views/
│   ├── partials/
│   │   ├── head.ejs       # HTML head (Bootstrap CDN)
│   │   ├── nav.ejs        # Dynamic navbar
│   │   └── script.ejs     # Script tags
│   ├── addBlog.ejs        # Add new blog page
│   ├── blog.ejs           # Single blog view with comments
│   ├── home.ejs           # Home page listing all blogs
│   ├── signin.ejs         # Sign in page
│   └── signup.ejs         # Sign up page
├── .env                   # Environment variables (not committed)
├── .gitignore
├── app.js                 # App entry point
└── package.json
```

---

## 🗄️ Database Schema

### User
| Field | Type | Description |
|-------|------|-------------|
| fullName | String | User's full name |
| email | String | Unique email address |
| salt | String | Random salt for password hashing |
| password | String | HMAC SHA-256 hashed password |
| profileImageURL | String | Profile picture (default provided) |
| role | String | `USER` or `ADMIN` |
| timestamps | Date | createdAt & updatedAt |

### Blog
| Field | Type | Description |
|-------|------|-------------|
| title | String | Blog title |
| body | String | Blog content |
| coverImageURL | String | Cloudinary URL of uploaded cover image |
| createdBy | ObjectId | Reference to User model |
| timestamps | Date | createdAt & updatedAt |

### Comment
| Field | Type | Description |
|-------|------|-------------|
| content | String | Comment text |
| blogId | ObjectId | Reference to Blog model |
| createdBy | ObjectId | Reference to User model |
| timestamps | Date | createdAt & updatedAt |

---

## ✨ Features

- User registration and login with password hashing (HMAC SHA-256 + salt)
- JWT-based authentication stored in HTTP cookies
- Create blog posts with a cover image uploaded to **Cloudinary**
- Images are organized per user in Cloudinary (`BlogStack/{userId}/`)
- View all blogs on the home page (authenticated users only)
- Individual blog pages with full content
- Comment on blog posts
- Logout functionality
- Dynamic navbar based on auth state
- Server-side rendering with EJS and Bootstrap UI

---

## ⚙️ Routes

### User Routes (`/user`)
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/user/signup` | Render signup page |
| POST | `/user/signup` | Handle user registration |
| GET | `/user/signin` | Render signin page |
| POST | `/user/signin` | Handle login & set JWT cookie |
| GET | `/user/logout` | Clear cookie & redirect |

### Blog Routes (`/blog`)
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/blog/addblog` | Render add blog page |
| POST | `/blog/` | Create a new blog post (with Cloudinary image upload) |
| GET | `/blog/:id` | View a single blog post with comments |
| POST | `/blog/comment/:blogId` | Add a comment to a blog |

---

## 🛠️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rainanirmal/BlogStack.git
   cd BlogStack
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory
   ```env
   PORT=8000
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. **Run the application**
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:8000`

---

## ☁️ Deployment

This app is deployed on **Render** with **MongoDB Atlas** as the cloud database and **Cloudinary** for image storage.

🌐 Live URL → [blogstack-rvma.onrender.com](https://blogstack-rvma.onrender.com)