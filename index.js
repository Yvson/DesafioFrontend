const { getAllFunds, getFundById, getHistoricalDataFundById } = require('./services/api/funds');

const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 5000;

const app = express();

// Fazer o Node servir os arquivos para o cliente React
app.use(express.static(path.resolve(__dirname, './frontend/build')));

// Rotas da API
app.get('/api/funds', async (req, res) => {
  let funds = await getAllFunds();
  return res.json(funds);
});

app.get('/api/funds/:fundId', async (req, res) => {
  let fund = await getFundById(req.params.fundId);
  return res.json(fund);
});

app.get('/api/funds/historicaldata/:fundId', async (req, res) => {
  let historicalData = await getHistoricalDataFundById(req.params.fundId);
  return res.json(historicalData);
});


// Rotas gerenciadas pelo React
app.get('*', (req, res) => {
  res.sendFile(path.resolve('./frontend/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor ativo na porta ${PORT}`);
});

