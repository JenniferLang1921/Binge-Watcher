# Binge-Watcher

![BingeWatcher](https://github.com/ggaeth/Binge-Watcher/blob/master/public/assets/img/bingewatcher.png)

## Description

Binge-Watcher is a website that allows users to search for movies.

Backend Technologies Used:  Node.js, Express, mySQL Database, Sequilize, Authentication with JSON, Express, MVC File Structure, Nightmare Testing, Mocha Testing, 

Frontend Technologies Used: Javascript, Jquery, Bootstrap, HTMl5, API's,  Anime.js, Handlebars, Scroll.js, Passport.js

## Demo

 Check out Binge-Watcher at https://binge-watcher.herokuapp.com/

## Installation

```
git clone https://github.com/ggaeth/Binge-Watcher.git
cd Binge-Watcher
npm install
type your mysql password in the config file in the development object
```

## Running Locally

To run the application locally and access it in your browser, first set the PORT environment variable to the value of your choice. An example is shown below.
```
export PORT=3000
After the PORT environment variable has been set, run the Node.js application with the command below.
```

```
node server.js
```
The application will now be running locally on PORT, in this case that is port 3000. You can then access it locally from your browser at the URL localhost:PORT, in this case localhost:3000.

## Testing


To test our website, open the terminal in test.js in the nightmare test folder and then run the command:
npm run test 

Click on this picture to watch a video of nightmare.js in action on our Bingewatcher website.

[![](https://i.ytimg.com/vi/MGZolXIfeAM/3.jpg?time=1526787151733)](https://youtu.be/MGZolXIfeAM "NightmareJS Test")

## Future Additions


Some future additions we are considering are adding a login, adding individual queues for users to store their favorite movies in, and adding a comment section with reviews for the individual movies.


## Development Process

Here is a link to a google slides presentation that discussed the development process of this project.  
[Google Slides Presentation](https://docs.google.com/presentation/d/1nYtNPi7_6qxOYhU_5_QDkpOhARMhv5o3FXu4iAD0PyI/edit?usp=sharing)


Coded and Designed by Griffin Gaeth, Pat Shehan, and Jennifer Lang

Thanks to [TMDB](https://www.themoviedb.org/) for use of their API.  



