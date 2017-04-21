function initialize() {

  var mapOptions = {
   zoom: 7,
   center: {lat: -37.8, lng: 144.95},
   zoomControl: true,
   scaleControl: true,
   streetViewControl: false

  }

  var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

  heatmap.setOptions({radius: heatmap.get(null)});

  heatmap.setMap(map);

}

function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAQwSV_8lxj1jesWeXrfH8nH7jc-hFjj8U&callback=initialize";
  document.body.appendChild(script);
};

window.onload = loadScript;

var surveyData = JSON.parse(survey);


var citymap = {
  chicago: {
    center: {lat: 41.878, lng: -87.629},
    population: 2714856
  }
};

for (var country in surveyData) {
    // Add the circle for this city to the map.
    var countryCircle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: citymap[city].center,
      radius: Math.sqrt(citymap[city].population) * 100
    });
  }
