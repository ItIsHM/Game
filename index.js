const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

 app.use((req, res, next) => {  
    res.setHeader('Cache-Control', 'no-store');  
    next();  
  }); 
app.use(express.static(path.resolve(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('public', path.join(__dirname, 'public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'tw/index.html'));
});
app.use((req, res) => {
  res.status(404).send('Currently not found...try again later');
});
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
