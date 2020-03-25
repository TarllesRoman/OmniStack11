const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/* Para produção use o CORS como abaixo
app.use(cors({
    origin: 'http://SUA_URL.com.br'
}));
*/
app.use(cors());
/**
 * Setando o express para entender o corpo das requisições recebidas como JSON
 */
app.use(express.json());
app.use(routes);




app.listen(3333);