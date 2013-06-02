// express liburutegiari deitzen diogu web zerbitzaria sortzeko
var express = require('express');
var app = express();

// aplikazioa konfigurazioa
app.configure(function() {
	app.set('views', __dirname + '/views');		// bistak gordetzeko karpeta definitzen dugu
	app.set('view engine', 'jade');			// bistarako, jade txantiloi motorra erabiliko da
	app.use(express.static(__dirname + '/public'));	// karpeta estatiko bat definitzen dugu css irudi eta js-ak gordetzeko
});

// errora heltzen diren eskaera guztiei bista nagusia erakutsiko zaie
app.get('/', function(req,res) {
	res.render('layout',{
		title: 'TxioMapa',
		description: 'Txioak mapan'
	});
});



// web aplikazioa 3000 portua entzuten egongo da
app.listen(3000);

console.log('Aplikazioa martxan http://locahost:3000 helbidean.');
