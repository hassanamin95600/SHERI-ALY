const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname)));
app.use('/providers', express.static(path.join(__dirname, 'providers')));

app.get('/', (req, res) => {
  res.send('Nuvio Providers Server Running. Access /manifest.json to see the manifest.');
});

app.get('/manifest.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'manifest.json'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
