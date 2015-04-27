_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
}

var profiles = [{
  username: 'phil',
  blurp: 'little pony',
  flirt: 5,
  image_url: 'https://placekitten.com/g/300/200'
}, {
  username: 'beta',
  blurp: 'phil phil phil',
  flirt: 500,
  image_url: 'https://placekitten.com/g/300/200'
}];

var profileItem = _.template($("#profile-item-template").html());


_.each(profiles, function(profile, index) {
  var html = profileItem(profile);
  console.log(html);
  $('#container').append(html);  
});