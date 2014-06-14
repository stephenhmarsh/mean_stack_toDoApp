// set up ==============
	var express 	= require('express');
	var app 			= express();
	var mongoose 	= require('mongoose');

// configuration

	mongoose.connect('mongodb://localhost:27017/toDoAppDb')
	app.configure(function() {
		app.use(express.static(__dirname + '/public'));
		app.use(express.logger('dev'));
		app.use(express.bodyParser());
	})

// define model
	var Todo = mongoose.model('Todo', {
		text : String
	});

// listen

	app.listen(8080);
	console.log("App listening on port 8080");