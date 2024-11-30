const { Pool } = require('pg');

// Configurar conexión a PostgreSQL
const pool = new Pool({
    user: 'delorah_user',       // Reemplaza con tu usuario de PostgreSQL
    host: 'localhost',
    database: 'delorah',     // Nombre de la base de datos
    password: 'delorah.user123', // Reemplaza con tu contraseña de PostgreSQL
    port: 5432,
});

module.exports = pool;