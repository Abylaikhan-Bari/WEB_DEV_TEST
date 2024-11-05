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
git clone <https://github.com/Abylaikhan-Bari/WEB_DEV_TEST.git>
cd expense-tracker
Set up the backend
cd expense-tracker-backend
npm install
Configure PostgreSQL connection in src/app.module.ts:
TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: '',
  password: '',
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
