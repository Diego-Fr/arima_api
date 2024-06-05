const ARIMA = require('arima')
const express = require('express');

const app = express();

  app.get('/arima', (req, res)=>{
    const arima = new ARIMA({
        p: 1,  // Ordem AR
        d: 0,  // Ordem de diferenciação
        q: 1   // Ordem MA
    }).train(req.query.data);

    forecast = arima.predict(10);  // Prever o próximo valor

    res.send(forecast[0])
  })

  const PORT = 8999

  app.listen(PORT, ()=>{
    console.log('funcionando na porta 8999');
  })