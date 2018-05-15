var express = require('express')
var app = express()
var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv').load()
var exphbs = require('express-handlebars')


var PORT = process.env.PORT || 3000;

//For BodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


// For Passport
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


//For Handlebars

app.engine("hbs", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "hbs");
app.use(express.static("public"));


app.set('views', './views')
app.engine('hbs', exphbs({
  extname: '.hbs'
}));
app.set('view engine', '.hbs');


app.get('/', function(req, res) {
  res.send('Welcome!');
});


//Models
var models = require("./models");


//Routes
require("./routes/html-routes.js")(app);

var authRoute = require('./routes/auth.js')(app, passport);


//load passport strategies
require('./config/passport/passport.js')(passport, models.user);


//Sync Database
models.sequelize.sync().then(function() {
  console.log('Database running')

}).catch(function(err) {
  console.log(err, "Database error")
});



app.listen(3000, function(err) {
  if (!err)
    console.log("App listening on PORT " + PORT);

});
