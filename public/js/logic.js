//Watchlist Nav opening
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// ----- Access The Movie Database API and inject HTML with popular titles ----- //
var start = 0;

function apiCall(dataID) {
  var apiKey = '62acdddbaf7040fc6585e01ab2084159',
    imageUrl = 'https://image.tmdb.org/t/p/w500/',
    end = start + 15;
  $.ajax({
    type: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=' + apiKey,
    dataType: 'jsonp',
    success: function(data) {
      $.each(data.results, function(i, el) {
        var poster = el.poster_path;

        if (!dataID && (i > start && i <= end)) {
          $('<div class="movie" onclick="apiCall(' + el.id + ')" data-id="' + el.id + '"><img class="poster" src="' + imageUrl + el.poster_path + '"/></div>').appendTo('section');

        }
      });

    },
    error: function() {
      console.log('The ajax call to the JSON file has failed');
    }
  });

} // End apiCall function folowed by a call
apiCall();


//API call for a single movie details
function getMovie() {
  // Alien 1979 - ID: 348
  // Deadpool 2016 - ID: 293660


  //!!! Get user input for Var ID, in order to search movie DB for title.


  var ID = 293660;
  $.getJSON("https://api.themoviedb.org/3/movie/" + ID + "?api_key=94a2f36cd4e27626b6a7a07766a76196&append_to_response=credits,person,videos",
      // $.getJSON("https://api.themoviedb.org/3/movie/293660?api_key=94a2f36cd4e27626b6a7a07766a76196&append_to_response=keywords,credits,person,images,videos",
      function(data, status) {
        console.log(data, status);
        // Helper to limit Videos and Cast to a 'set' number (see Handlebars template)
        Handlebars.registerHelper('each_upto', function(ary, max, options) {
          if (!ary || ary.length == 0)
            return options.inverse(this);

          var result = [];
          for (var i = 0; i < max && i < ary.length; ++i)
            result.push(options.fn(ary[i]));
          return result.join('');
        });

        // Format release dates
        var DateFormats = {
          short: "YYYY",
          med: "MMMM YYYY",
          long: "MMMM Do, YYYY"
        };
        Handlebars.registerHelper('formatDate', function(release_date, format) {
          format = DateFormats[format] || format;
          return moment(release_date).format(format);
        });

        var source = $("#simple-template").html();
        var template = Handlebars.compile(source);
        var html = template(data);

        console.log(data, status);

        $("#main").html(html);

      })
    .done(function() {
      console.log(".done");
    })

    .fail(function() {
      console.error(".fail");
    })

    .always(function() {
      console.info(".always");
    })
};
getMovie()

/* Fetching a Cast members detials */
function render(ID) {
  console.log(ID);
  $.getJSON('https://api.themoviedb.org/3/person/' + ID + '?api_key=94a2f36cd4e27626b6a7a07766a76196&language=en-US&append_to_response=credits',
    function(data, status) {
      console.log(data, status);

      var source = $("#bioTemplate").html();
      var template = Handlebars.compile(source);
      var html = template(data);

      $("#castBio").html(html);
    })
};

$('#myModal').on('hidden.bs.modal', function() {
  $(this).removeData('bs.modal');
});

var scroll = new Scroll(document.body);
scroll.to(0, 1200).then(function() {
  //scrolling down 500 pixels has completed!
});
