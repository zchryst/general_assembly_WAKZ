console.log('java works');

function initialize() {

  var mapOptions = {
   zoom: 5,
   center: new google.maps.LatLng(37.8136, 144.9631),
   mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

  heatmap.setOptions({radius: heatmap.get('20')});

  heatmap.setMap(map);

}

function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAQwSV_8lxj1jesWeXrfH8nH7jc-hFjj8U&callback=initialize";
  document.body.appendChild(script);
};

window.onload = loadScript;

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
});

var heatMapData = [
  {location: new google.maps.LatLng(8.8678, 76.5623)},

];

function toggleHeatmap() {
      heatmap.setMap(heatmap.getMap() ? null : map);
    }

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
}
