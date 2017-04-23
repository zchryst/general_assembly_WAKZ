function initialize() {

  var mapOptions = {
   zoom: 7,
   center: {lat: -37.8, lng: 144.95},
   zoomControl: true,
   scaleControl: true,
   streetViewControl: false

  }

  var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

  for (var country in countryArr) {
    // Add the circle for this city to the map.
    var countryCircle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: countryArr[country],
      radius: Math.sqrt(countryList[country]) * 100
    });

}

function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAQwSV_8lxj1jesWeXrfH8nH7jc-hFjj8U&callback=initialize";
  document.body.appendChild(script);
};

window.onload = loadScript;

var countryList = { }

_.map(survey, function (person) {
  var userCountry = person.country
    if (countryList[userCountry] != undefined) {
      countryList[userCountry] = countryList[userCountry] + 1
    }
    else {
      countryList[userCountry] = 1
    }
});

var countryOnly = _.keys(countryList)

var countryArr = ['United Kingdom']

var coordsLat = [];

var coordsLon = [];

function codeAddress(countryArr, callback) {
  for(var i = 0; i < countryArr.length; i++) {
    currCountry = countryArr[i];
    var geocoder = new google.maps.Geocoder();
      geocoder.geocode({'address': countryArr[i]}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          coordsLat.push(results[0].geometry.location.lat())
          coordsLon.push(results[0].geometry.location.lng())
        } else {
          throw('No results found: ' + status);
      }
    })
  }
}

codeAddress(countryArr, function() {
});
