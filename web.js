var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var fs = require('fs');

    fs.readFile('index.html', function read(err, data) {
	if (err) throw err;

	response.end(data.toString());

    });
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});