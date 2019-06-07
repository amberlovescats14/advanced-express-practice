const express = require("express");
const uuid = require('uuid')
const path = require('path')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, 'public')))
//! ROUTES
app.use('/api/comments', require('./routes/api/comments'))
app.use('/api/contacts', require('./routes/api/contacts'))
app.use('/api/products', require('./routes/api/products'))
app.use('/api/vehicles', require('./routes/api/vehicles'))


const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});


