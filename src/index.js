const express = require('express');
const app = express();
const port = process.env.PORT || 8080;


app.get('/', (req, res) => {
  res.send('Aku Tutor service is running!');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'akututor', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Aku Tutor service listening on port ${port}`);
});
