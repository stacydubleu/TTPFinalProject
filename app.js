//require an express instance application becomes an instance
//order matters

var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

var mustaches = ['a.png', 'b.png', 'c.png', 'd.png', 'e.png', 'f.png', 'g.png', 'h.png', 'i.png', 'j.png', 'k.png', 'l.png', 'm.png', 'n.png', 'o.png', 'p.png', 'q.png', 'r.png', 's.png', 't.png'];
app.engine('handlebars', exphbs({defaultLayout:'main'})); //goes to main for layout 
app.set('view engine', 'handlebars'); //npm documentation readddd
app.use(express.static('public'));

//incoming request matches, top to bottom. 

app.get("/", function(req, res){ //function is a handler for the incoming request, get request to the root app points to root
	res.render('home'); //req request, res response //render the page
}); 


app.get("/about", function(req, res){
	res.render('about');
});

app.get("/random", function(req, res){
	var randomstaches = mustaches[Math.floor(Math.random()*mustaches.length)];
	res.render('random', {stuff: randomstaches});
});

app.listen(3000, function(){
	console.log('Inspiration app listening on port 3000...');
});