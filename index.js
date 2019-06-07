const express = require("express");
const path = require('path')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, 'public')))
//! ROUTES
app.use('/routes/commentsRouter', require('./routes/commentsRouter'))
app.use('/routes/contactsRouter', require('./routes/contactsRouter'))
app.use('/routes/productsRouter', require('./routes/productsRouter'))
app.use('/routes/vehiclesRouter', require('./routes/vehiclesRouter'))


const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});


