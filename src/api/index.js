const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const { error } = require('./middlewares/error');
const loginRoute = require('./routes/loginRoute');
const querysRoute = require('./routes/querysRoute');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/terms', (req, res) => res.json({ message: 'Termos de Serviço' }));
app.use('/login', loginRoute);
app.use('/consulta', querysRoute);

app.use(error);

module.exports = app;
