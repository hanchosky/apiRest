const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('El Servidor esta Funcionando!');
    console.log('El Servidor esta Funcionando!');

});


app.listen(15000);