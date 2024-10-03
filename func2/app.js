const express = require('express');
const client = require('prom-client'); // Importa prom-client

const app = express();
const register = new client.Registry(); // Crea un registro para las métricas

// Crea un ejemplo de métrica: un contador
const counter = new client.Counter({
  name: 'node_requests_total',
  help: 'Total de solicitudes recibidas'
});
register.registerMetric(counter);

// Expon las métricas en /metrics
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});
