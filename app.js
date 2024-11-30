// index.js
const express = require('express');
const apiRoutes = require('./routes/api');

const app = express();
const port = 8080;


const cors = require('cors');
app.use(express.json());
// Middleware para datos codificados en URL (opcional, si usas formularios tradicionales)
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// Ruta básica
app.use('/api', apiRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
