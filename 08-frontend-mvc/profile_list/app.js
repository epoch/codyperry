_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
}

//-------------------------------

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

var ProfileItemView = Backbone.View.extend({
  tagName: "div",
  className: "profile-item",
  render: function() {
    var htmlMaker = _.template( $("#profile-item-template").html() );
    var html = htmlMaker(this.model);
    this.$el.html(html);
  }
});

// _.each(profiles, function(profile) {
//   var view = new ProfileItemView({ model: profile });
//   console.log(view.el);
//   view.render();
//   console.log(view.el);
// })
