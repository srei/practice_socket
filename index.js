//require express
const express = require('express');

// assign express invocation to app.
const app = express();

//app is a function handler that is supplied to an HTTP server.
const http = require('http').Server(app);


app.get('/', (req,res) => {
	//no + needed w/ path.join
	res.sendFile(path.join(__dirname, './index.html'));
});


http.listen('3000', () => {
	console.log("listening on 3000");
});


