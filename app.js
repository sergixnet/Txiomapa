var express = require('express');
var app = express();


app.configure(function() {
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.static(__dirname + '/public'));
});


app.get('/', function(req,res) {
	res.render('layout',{
		title: 'TxioMapa',
		description: 'Txioak mapan'
	});
});




app.listen(3000);

console.log('zerbitzaria martxan');
