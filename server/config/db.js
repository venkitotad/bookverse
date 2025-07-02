import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false, // change to { rejectUnauthorized: false } if using remote DB like Railway
});

pool.on('connect', () => {
  console.log('✅ PostgreSQL connected');
});

export default pool;
