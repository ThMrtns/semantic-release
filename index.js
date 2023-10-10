const express = require('express')
const app = express()

app.get('/', function (_req, res) {
  res.send('Hello beautiful World')
})

app.get('/v2/', function (_req, res) {
  res.send('Hello V2 World')
})


app.get('/v3/', function (_req, res) {
  res.send('Hello V3 World')
})

app.get('/newfeature/', function (_req, res) {
  res.send('New Feature Endpoint Response')
})

app.listen(3000)
