var http = require('http')
    ,app = require('./config/express');

http.createServer(app).listen(8080, function() {
    console.log('*****************************************************************');
    console.log('** Servidor webservices escutando na porta: ' + this.address().port);
    console.log('*****************************************************************');
});

