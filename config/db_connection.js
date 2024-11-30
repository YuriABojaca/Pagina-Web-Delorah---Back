const { Pool } = require('pg');

// Configurar conexión a PostgreSQL
const pool = new Pool({
    user: 'postgres.kxlzrabesknzzsgseeto',       
    host: 'aws-0-us-west-1.pooler.supabase.com',
    database: 'postgres',     
    password: 'DataBase2024*&',
    port: 6543,
});

module.exports = pool;