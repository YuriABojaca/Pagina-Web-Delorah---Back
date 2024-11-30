const pool = require('../config/db_connection');

// Función para guardar mensajes
const saveMessage = async (name, email, message) => {
    const query = 'INSERT INTO contact.contact_message (name, email, message) VALUES ($1, $2, $3) RETURNING *';
    const values = [name, email, message];
    const result = await pool.query(query, values);
    return result.rows[0];
};
  
module.exports = { saveMessage };