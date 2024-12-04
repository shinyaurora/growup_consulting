import mysql from "mysql2/promise"; // Use mysql2 for promises and better performance

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10, // Adjust the pool size as needed
});

export default db;
