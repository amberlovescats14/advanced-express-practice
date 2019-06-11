const express = require("express");
const path = require('path')

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}))

app.use(express.static(path.join(__dirname, 'public')))
//! ROUTES
app.use('/comments', require('./routes/commentsRouter'))
app.use('/contacts', require('./routes/contactsRouter'))
app.use('/products', require('./routes/productsRouter'))
app.use('/vehicles', require('./routes/vehiclesRouter'))


const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});