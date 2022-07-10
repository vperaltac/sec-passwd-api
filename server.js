const express           = require('express');
const app               = express();
const generate_password = require('./model/generate_password')

const PORT = process.env.PORT || 5000;

app.get('/generate/:length/:special_chars/:numbers/:amount',(req,res) => {
  const length        = parseInt(req.params.length)
  const special_chars = parseInt(req.params.special_chars)
  const numbers       = parseInt(req.params.numbers)
  const amount        = parseInt(req.params.amount)
  
  console.log(`got request: { length: ${length}, special_chars: ${special_chars}, numbers: ${numbers}, amount: ${amount} }`)
  const passwords = generate_password(length, special_chars, numbers, amount)

  console.log(`generated ${passwords.length} passwords`)
  res.send(passwords)
})

app.get('/ping',(req,res) => {
  res.status(200).json({status: 'OK'})
});

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))