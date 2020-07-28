var dayDate = moment().format('dddd, MMMM Do YYYY' )
var dayPlusOne = moment().add(1, 'days').format('ddd, MMM D');
var dayPlusTwo = moment().add(2, 'days').format('ddd, MMM D');
var dayPlusThree = moment().add(3, 'days').format('ddd, MMM D');
var dayPlusFour = moment().add(4, 'days').format('ddd, MMM D');
var dayPlusFive = moment().add(5, 'days').format('ddd, MMM D');

function displayCityInfo(chosenCity) {
  $("#searched-city-view").empty();
  city = chosenCity
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q="+ city +"&units=imperial&appid=e9b735c3398cfe4564ec31ab0eed5a07";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response)
               
function getFiveDayForecast (){  
  var lat = response.city.coord.lat;
  var lon = response.city.coord.lon;
  var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&units=imperial&appid=e9b735c3398cfe4564ec31ab0eed5a07";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    var todayIconLink = "http://openweathermap.org/img/wn/"+ response.current.weather[0].icon +"@2x.png";
    var dayOneIconLink = "http://openweathermap.org/img/wn/"+ response.daily[0].weather[0].icon +".png";
    var dayTwoIconLink = "http://openweathermap.org/img/wn/"+ response.daily[1].weather[0].icon +".png";
    var dayThreeIconLink = "http://openweathermap.org/img/wn/"+ response.daily[2].weather[0].icon +".png";
    var dayFourIconLink = "http://openweathermap.org/img/wn/"+ response.daily[3].weather[0].icon +".png";
    var dayFiveIconLink = "http://openweathermap.org/img/wn/"+ response.daily[4].weather[0].icon +".png";



            console.log(response)
            var display= $("<div class='searched-weather pl-4 py-3'>");
            var displayCityDate = $("<h2>").text(city + ": "+ dayDate);
            display.append(displayCityDate);
             
            var icon = $("<img class= 'float-right bg-primary rounded mr-5' src="+todayIconLink+">");
              display.append(icon);
            var temp = $("<h4>").text(" Temperature: " + response.current.temp +"°F");
              display.append(temp);
            var humidity= $("<h4>").text("Humidity: "+ response.current.humidity + "%");
              display.append(humidity);
            var wind= $("<h4>").text("Wind Speed: "+ response.current.wind_speed+ " mph");
              display.append(wind);
            var uvi= $("<h4>U.V. index: </h4>"+"<span id=uvi>")
            var uviVal= $("#uvi").text("8");
              display.append(uvi, uviVal);
            $("#searched-city-view").append(display);
              
              //UVI color function
              if (response.current.uvi<3){
                $("#uvi").addClass("bg-success");
              } else if (response.current.uvi<8){
                $("#uvi").addClass("bg-warning");
              } else {
                $("#uvi").addClass("bg-danger");
              }
              
              $("#five-day").empty();
              var firstDay= $("<div class='five-day-container col-md-2.4 bg-primary rounded px-4 mt-4 py-2 ml-3'id='day-1'>");
              var dayOneDay = $("<h6>").text(dayPlusOne);
              var dayOneIcon = $("<img src="+dayOneIconLink+">");
              var dayOneTemp= $("<p>").text(" Temp: " +response.daily[0].temp.day+"°F");
              var dayOneHumid= $("<p>").text("Humid: "+response.daily[0].humidity+ "%");
              $(firstDay).append(dayOneDay, dayOneIcon, dayOneTemp, dayOneHumid);

              var secondDay= $("<div class='five-day-container col-md-2.4 bg-primary rounded px-4 mt-4 py-2 ml-4'id='day-2'>");
              var dayTwoDay = $("<h6>").text(dayPlusTwo);
              var dayTwoIcon = $("<img src="+dayTwoIconLink+">");
              var dayTwoTemp= $("<p>").text(" Temp: " +response.daily[1].temp.day+"°F");
              var dayTwoHumid= $("<p>").text("Humid: "+response.daily[1].humidity+ "%");
              $(secondDay).append(dayTwoDay, dayTwoIcon, dayTwoTemp, dayTwoHumid);

              var thirdDay= $("<div class='five-day-container col-md-2.4 bg-primary rounded px-4 mt-4 py-2 ml-4'id='day-3'>");
              var dayThreeDay = $("<h6>").text(dayPlusThree);
              var dayThreeIcon = $("<img src="+dayThreeIconLink+">");
              var dayThreeTemp= $("<p>").text(" Temp: " +response.daily[2].temp.day+"°F");
              var dayThreeHumid= $("<p>").text("Humid: "+response.daily[2].humidity+ "%");
              $(thirdDay).append(dayThreeDay, dayThreeIcon, dayThreeTemp, dayThreeHumid);


              var fourthDay= $("<div class='five-day-container col-md-2.4 bg-primary rounded px-4 mt-4 py-2 ml-4'id='day-4'>");
              var dayFourDay = $("<h6>").text(dayPlusFour);
              var dayFourIcon = $("<img src="+dayFourIconLink+">");
              var dayFourTemp= $("<p>").text(" Temp: " +response.daily[3].temp.day+"°F");
              var dayFourHumid= $("<p>").text("Humid: "+response.daily[3].humidity+ "%");
              $(fourthDay).append(dayFourDay, dayFourIcon, dayFourTemp, dayFourHumid);
              
              
              var fifthDay= $("<div class='five-day-container col-md-2.4 bg-primary rounded px-4 mt-4 py-2 ml-4'id='day-5'>");
              var dayFiveDay = $("<h6>").text(dayPlusFive);
              var dayFiveIcon = $("<img src="+dayFiveIconLink+">");
              var dayFiveTemp= $("<p>").text(" Temp: " +response.daily[4].temp.day+"°F");
              var dayFiveHumid= $("<p>").text("Humid: "+response.daily[4].humidity+ "%");
              $(fifthDay).append(dayFiveDay, dayFiveIcon, dayFiveTemp, dayFiveHumid);
              
              $("#five-day").append(firstDay, secondDay, thirdDay, fourthDay, fifthDay);

  });
};
getFiveDayForecast();
          })
        }
var cities = [];
function renderButtons() {

    // Deletes the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#cities-view").empty();
    // Loops through the array of movies
    for (var i = 0; i < cities.length; i++) {

      // Then dynamicaly generates buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<br><button class= 'btn-outline-dark btn d-flex justify-content-center btn-default btn-block'>");
      a.addClass("city");
      a.attr("chosenCity", cities[i]);
      a.text(cities[i]);
      $("#cities-view").prepend(a);
    }
  }
  $("#searchCity").on("click", function(event) {
    event.preventDefault();
    
    var chosenCity = $("#inputCityName").val().trim();
   
    cities.push(chosenCity);

    renderButtons();
    displayCityInfo(chosenCity);
  });
  $(document).on("click", ".city", function(event) {
    event.preventDefault();
    var chosenCity = $(this).text();
    displayCityInfo(chosenCity); 
  })
  