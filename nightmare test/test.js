var Nightmare = require("nightmare");

// STORY: As a developer nerd, I want to be able to take courses on web tech.
new Nightmare({ show: true })
  // Visit main page
  .goto("https://binge-watcher.herokuapp.com/")
  // Enter movie name
  .type(".search", "Independence Day")
  // click search button.
  .click(".search-button")
  .wait(2000)
  // Take a screenshot and save it to the current directory
  .screenshot("movieresults.png")
  
  // Scroll down a few hundred pixels.
  .scrollTo(500, 0)
  // Take a screenshot and save it to the current directory
  .screenshot("movieresults.png")
  
  // End test
  .end()
  // Execute commands
  .then(function() {
    console.log("Done!");
  })
  // Catch errors
  .catch(function(err) {
    console.log(err);
  });
