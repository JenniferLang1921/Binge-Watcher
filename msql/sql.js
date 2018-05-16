var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "yourpassword",
    database: "bingeDB"
});

connection.connect(function (err) {
    if (err) throw err;
    runSearch();
});

function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
                "Search for a movie",
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "Search for a specific movie":
                    movieSearch();
                    break;
            }
        });
}

function movieSearch() {
    inquirer
        .prompt({
            name: "movie",
            type: "input",
            message: "What movie would you like see?"
        })
        .then(function (answer) {
            console.log(answer.movie);
            connection.query("SELECT * FROM items WHERE ?", { movie: answer.movie }, function (err, res) {
                console.log(
                    " || Movie: " +
                    res[0].movie_name +
                    " || Year: " +
                    res[0].movie_year +
                    " || Year: " +
                    res[0].movie_streaming
                );
                runSearch();
            });
        });
}
