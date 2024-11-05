Expense Tracker
A simple expense tracker application built with React, NestJS, and PostgreSQL.

Features
Add expenses with date, amount, category, and comment.
View a list of all transactions.
Technologies Used
Frontend: React, Bootstrap
Backend: NestJS, TypeORM
Database: PostgreSQL
Getting Started
Prerequisites
Node.js and npm
PostgreSQL
Installation
Clone the repository

git clone https://github.com/Abylaikhan-Bari/WEB_DEV_TEST.git
cd expense-tracker

Set up the backend

cd expense-tracker-backend
npm install
Configure PostgreSQL connection in src/app.module.ts:


TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: '',  // Add your PostgreSQL username
  password: '',  // Add your PostgreSQL password
  database: 'expense_db',
  autoLoadEntities: true,
  synchronize: true,
});
Run the backend server

npm run start
Set up the frontend


cd ../expense-tracker-frontend
npm install
npm start
Open http://localhost:3001 in your browser.

Database Setup
Ensure PostgreSQL is installed and running on your machine.

Create the Database:

Open a SQL client (e.g., psql command line or DBeaver).
Run the following command to create a new database named expense_db:

CREATE DATABASE expense_db;
Create the transactions Table:

Connect to the expense_db database and run the following SQL commands to create the required table:

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    dateTime TIMESTAMP NOT NULL,
    author VARCHAR(50),
    sum DECIMAL(10, 2) NOT NULL,
    category VARCHAR(50),
    comment TEXT
);
Update Backend Configuration:

Ensure the backend configuration (in src/app.module.ts) is set to connect to the new database with the correct credentials.
