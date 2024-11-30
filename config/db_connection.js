const { Pool } = require('pg');

// Configurar conexión a PostgreSQL
const pool = new Pool({
    user: 'postgres',       
    host: 'postgresql://postgres:vhQEgpGEiHKWgSYuYFlPhTDaJRDyumPF@autorack.proxy.rlwy.net:40937/railway',
    database: 'railway',     
    password: 'vhQEgpGEiHKWgSYuYFlPhTDaJRDyumPF',
    port: 5432,
});

module.exports = pool;