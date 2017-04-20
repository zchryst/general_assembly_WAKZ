console.log('hello world');

var access_token = '35575e4e442a3e27402c7e342a78552e'

$.ajax({
  api: 'https://api.meetup.com/2/members?offset=0&format=json&group_urlname=Machine-Learning-AI-Meetup&photo-host=public&page=20&order=name&access_token=' + access_token,
  method: 'get'
}).done(function(results) {
  console.log(results);
});
