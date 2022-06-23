const path = require('path');
const express = require("express");
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

//Fazer o Node servir os arquivos para o cliente React
app.use(express.static(path.resolve(__dirname, './frontend/build')));

//Rotas gerenciadas pelo React
app.get('*', (req, res) => {
  res.sendFile(path.resolve('./frontend/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor ativo na porta ${PORT}`);
});
