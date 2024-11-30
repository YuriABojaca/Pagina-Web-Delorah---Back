const pool = require('../config/db_connection');

// Función para guardar mensajes
const getAll = async (category) => {
    const query = 'SELECT * FROM contact.products WHERE LOWER(category) = LOWER($1)';
    const params = [category];
    const result = await pool.query(query, params);
    return result.rows;
};
  
module.exports = { getAll };