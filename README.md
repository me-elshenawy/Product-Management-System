# Product Management System

A modern React-based CRUD application for managing products with a clean dashboard, search functionality, and form-based product creation and editing.

## Overview

This project demonstrates a full client-side product management workflow using React, React Router, Bootstrap, and Axios. It communicates with a lightweight JSON Server backend to perform create, read, update, and delete operations on product records.

## Features

- View all products in a responsive table
- Search products by name or category
- Add new products through a form
- Edit existing product details
- View detailed product information
- Delete products from the list
- Toggle free-shipping status for products
- Clean navigation with reusable layout components

## Tech Stack

- React 19
- Vite
- React Router DOM
- Bootstrap 5
- React Bootstrap
- Axios
- JSON Server
- React Icons

## Project Structure

```text
Product Management System/
├── src/
│   ├── Api/              # API service functions
│   ├── components/       # Navbar and Footer
│   ├── css/              # Global and module styles
│   ├── Layout/           # Main layout wrapper
│   ├── pages/            # Home, ProductList, ProductDetail, ProductForm, ErrorPage
│   └── routes/           # Router configuration
├── public/               # Static assets
└── package.json          # Frontend dependencies and scripts

Server/
├── data.json             # Mock product database
└── package.json          # JSON Server setup
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v18 or newer recommended)
- npm or yarn

### 1. Install frontend dependencies

```bash
cd "Product Management System"
npm install
```

### 2. Install backend dependencies

```bash
cd ../Server
npm install
```

### 3. Start the backend server

```bash
npm start
```

The JSON Server will run at:

```text
http://localhost:3005/products
```

### 4. Start the frontend development server

Open a new terminal and run:

```bash
cd "Product Management System"
npm run dev
```

Then open:

```text
http://localhost:5173
```

## Usage

- Visit the home page to browse the product inventory.
- Use the search bar to filter products quickly.
- Click Add Product in the navigation bar to create a new item.
- Use the view, edit, and delete actions in the product table.

## API Behavior

The frontend uses Axios to call the JSON Server endpoints for:

- GET /products
- GET /products/:id
- POST /products
- PUT /products/:id
- DELETE /products/:id

## License

This project is for educational and demonstration purposes.
