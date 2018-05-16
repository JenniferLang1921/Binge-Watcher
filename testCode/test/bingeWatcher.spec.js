
//install karma globally:   npm i -g karma-cli
// then install the folllowing:  npm i -D karma karma-chrome-launcher karma-commonjs karma-browserify browserify watchify mocha chai karma-mocha-reporter
//to make a karma.conf.js file:  karma init
//once done with set-up:  karma start
//Questions:
//choose: mocha
//require js.?:  no
//browsers?: chrome
//location of source?:   click enter
//previous patterns?:  click enter
//Do you want karma to watch?:  yes
//--config file should be created now--
//look at config and make sure under frameworks that browserify is there


//Test #1  Log-in Test

var logIn = require("../src/bingeWatcher.js");
var expect = require("chai").expect;

describe("logIn", function() {
  it("should return two strings", function() {
    expect(logIn('first', 'last')).to.equal('first last');
  });

  it("should throw when there is only one string", function() {
    expect(function() {
      logIn({}, []);
    }).to.throw(Error);
  });
});


//npm run test     in the command line

