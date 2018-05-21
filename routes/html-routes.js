// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads the landing page
  app.get("/", function(req, res) {
    res.render('../views/home');
  });


app.get("/dashboard", function(req, res) {
  res.render('../views/dashboard');
});



app.get("/login", function(req, res) {
  res.render('../views/login');
});

app.get("/favorites", function(req, res) {
  res.render('../views/favorites');
});


};

