var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "1234",
    database: "bingeDB"
});

connection.connect(function (err) {
    if (err) throw err;
    movieSearch();
});

function movieSearch() {
    inquirer
        .prompt({
            name: "movie",
            type: "input",
            message: "What movie would you like see?"
        })
        .then(function (answer) {
            console.log(`Search of movie: ${answer.movie}`);
            connection.query("SELECT movie_name, movie_year, movie_streaming FROM items WHERE ?", { movie_name: answer.movie }, function (err, res) {
                // console.log(res, 'res');
                if(err) {
                    console.error(err);
                }
                else if(!res.length) {
                    console.error('No title found')
                }
                else {
                    console.log(
                        " || Movie: " +
                        res[0].movie_name +
                        " || Year: " +
                        res[0].movie_year +
                        " || Streaming Service: " +
                        res[0].movie_streaming
                    );
                }
            });
        });
}