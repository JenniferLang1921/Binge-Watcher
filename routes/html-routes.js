// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads the landing page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/landing.html"));
  });

  app.get("/home", function(req, res) {
    res.render('index');
  });

  app.get("/view-deadpool", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });


};
