# Food Order Website

A modern food order application built using React, Java Spring Boot, and MySQL. The platform allows users to register, view food items, add them to the cart, and place an order. The website provides a responsive UI and integrates JWT for secure authentication.

## Features

- **User Authentication**: Register and login to manage orders.
- **Food Items**: View a list of available food items with details like name, description, price, and image.
- **Cart Management**: Add food items to the cart and proceed to checkout.
- **Responsive UI**: Mobile-friendly design for seamless user experience.
- **JWT Authentication**: Secure login and order management using JSON Web Tokens (JWT).

## Technologies Used

- **Frontend**: React.js, TypeScript, Tailwind CSS
- **Backend**: Java Spring Boot
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Tokens)
- **API Documentation**: Swagger

## Installation

### Prerequisites

- Node.js and npm
- Java 8 or later
- MySQL

### Backend Setup (Java Spring Boot)

1. Clone the repository:

   ```bash
   git clone https://github.com/Rishabh2743/Food_order_app.git
   cd Food_order_app
  cd backend

  re is the updated README with everything in one place, including the instructions from cloning to running the project:

markdown
Copy
Edit
# Food Order Website

A modern food order application built using React, Java Spring Boot, and MySQL. The platform allows users to register, view food items, add them to the cart, and place an order. The website provides a responsive UI and integrates JWT for secure authentication.

## Features

- **User Authentication**: Register and login to manage orders.
- **Food Items**: View a list of available food items with details like name, description, price, and image.
- **Cart Management**: Add food items to the cart and proceed to checkout.
- **Responsive UI**: Mobile-friendly design for seamless user experience.
- **JWT Authentication**: Secure login and order management using JSON Web Tokens (JWT).

## Technologies Used

- **Frontend**: React.js, TypeScript, Tailwind CSS
- **Backend**: Java Spring Boot
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Tokens)
- **API Documentation**: Swagger

## Installation and Setup

### 1. Clone the Repository
First, clone the repository to your local machine.
git clone https://github.com/Rishabh2743/Food_order_app.git
cd Food_order_app
### 2. Backend Setup (Java Spring Boot)
Navigate to the backend directory:

bash
Copy
Edit
cd backend
Set up the MySQL database:

Create a MySQL database called foodapp:

sql
Copy
Edit
CREATE DATABASE foodapp;
Update the application.properties file in the src/main/resources folder with your MySQL credentials:

properties
Copy
Edit
spring.datasource.url=jdbc:mysql://localhost:3306/foodapp
spring.datasource.username=your-username
spring.datasource.password=your-password
spring.jpa.hibernate.ddl-auto=update
Run the Spring Boot application:

bash
Copy
Edit
mvn spring-boot:run
The backend API will be available at http://localhost:8080.

3. Frontend Setup (React.js)
Navigate to the frontend directory:

bash
Copy
Edit
cd frontend
Install dependencies:

bash
Copy
Edit
npm install
Set up the API URL:

Create a .env file in the frontend directory and add the following line:

bash
Copy
Edit
REACT_APP_API_URL=http://localhost:8080/api
Start the React development server:

bash
Copy
Edit
npm start
The frontend will be available at http://localhost:3000.

Contributing
Fork the repository.


License
This project is licensed under the MIT License.

Acknowledgments
Inspired by modern web development practices.

### Summary of the Steps

1. Clone the repo using `git clone https://github.com/Rishabh2743/Food_order_app.git`
2. Set up and configure MySQL database for backend.
3. Run the backend with `mvn spring-boot:run`.
4. Set up frontend by creating a `.env` file for API URL, installing dependencies, and starting the React development server with `npm start`.

This should cover the full setup for both backend and frontend.
