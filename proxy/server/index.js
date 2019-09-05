const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = 3005;
const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/bundle.js', (req, res) => {
  app.sendFile(path.resolve(__dirname, 'client/dist/bundle.js'), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('was able to complete .get from proxy server');
    }
  })
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});