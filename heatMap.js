console.log('java works');

function initialize() {

  var mapOptions = {
   zoom: 7,
   center: {lat: -37.8, lng: 144.95},
   zoomControl: true,
   scaleControl: true,
   streetViewControl: false,

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

//------Heat Map location data------\\

// var geoHeatData = JSON.parse(data);
//
// var coords = geoHeatData.map(function mapToLatLng(c){
//     return new google.maps.LatLng(c.geometry.coordinates[0], c.geometry.coordinates[1])
// });

var heatMapData = [
 new google.maps.LatLng(37.782, -122.447),
 new google.maps.LatLng(37.782, -122.445),
 new google.maps.LatLng(37.782, -122.443),
 new google.maps.LatLng(37.782, -122.441),
 new google.maps.LatLng(37.782, -122.439),
 new google.maps.LatLng(37.782, -122.437),
 new google.maps.LatLng(37.782, -122.435),
 new google.maps.LatLng(37.785, -122.447),
 new google.maps.LatLng(37.785, -122.445),
 new google.maps.LatLng(37.785, -122.443),
 new google.maps.LatLng(37.785, -122.441),
 new google.maps.LatLng(37.785, -122.439),
 new google.maps.LatLng(37.785, -122.437),
 new google.maps.LatLng(37.785, -122.435)
];

var heatmap = new google.maps.visualization.HeatmapLayer({
  data: heatMapData
  // data: new google.maps.MVCArray(coords)
});

//------Heat Map Functions------\\

function changeGradient() {
  var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ]
  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
};

function changeRadius() {
  heatmap.set('radius', heatmap.get('radius') ? null : 20);
};

function changeOpacity() {
 heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}
