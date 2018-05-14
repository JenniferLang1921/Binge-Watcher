/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

var start = 0;


// ----- Access The Movie Database API and inject HTML ----- //
function apiCall(dataID) {
  var apiKey = '62acdddbaf7040fc6585e01ab2084159',
      imageUrl = 'https://image.tmdb.org/t/p/w500/',
      end = start + 15;
  $.ajax({
    type: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=' + apiKey,
    dataType: 'jsonp',
    success: function (data) {
      $.each(data.results ,function(i, el) {
        var poster = el.poster_path;

   if (!dataID && (i > start && i <= end) ) {
          $('<div class="movie" onclick="apiCall(' + el.id + ')" data-id="' + el.id + '"><img class="poster" src="' + imageUrl + el.poster_path + '"/></div>').appendTo('section');

        }
      });

      },
    error: function () {
      console.log('The ajax call to the JSON file has failed');
    }
  });

} // End apiCall function

apiCall();
