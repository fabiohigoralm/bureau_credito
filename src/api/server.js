require('dotenv/config');

const port = process.env.API_PORT || 3001;

const app = require('./index');

app.listen(port);

console.log(`Api rodando na porta ${port}`);
