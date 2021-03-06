var express    = require('express')
var app        = express()
var passport   = require('passport')
var session    = require('express-session')
var bodyParser = require('body-parser')
var env        = require('dotenv').load()
var exphbs     = require('express-handlebars')

var PORT = process.env.PORT || 3000;

    app.use(express.static("public"));
    //For BodyParser
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());


     // For Passport
    app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions



    app.set('views', './views')



     //For Handlebars
    // app.set('views', './views')
    app.engine('handlebars', exphbs({
        defaultLayout: "main",
    }));
    app.set('view engine', 'handlebars');
    

    // app.get('/', function(req, res){
	//   res.send('Welcome!');
	// });


	//Models
    var models = require("./models");


    //Routes
    require("./routes/html-routes.js")(app);

    var authRoute = require('./routes/auth.js')(app,passport);


    //load passport strategies
    require('./config/passport/passport.js')(passport,models.user);


    //Sync Database
   	models.sequelize.sync().then(function(){
    console.log('Database running')

    }).catch(function(err){
    console.log(err,"Database error")
    });



	app.listen(PORT, function(err){
		if(!err)
        console.log("App listening on PORT " + PORT);

	});



