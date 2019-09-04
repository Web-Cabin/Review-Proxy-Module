const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = 3010;
const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, '../public')));

// app.get('/api/proxy', (req, res) => {
//   res.send(console.log('hello, the get request went through'));
// });


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});