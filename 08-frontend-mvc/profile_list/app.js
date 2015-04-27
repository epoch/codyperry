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

// var profileItem = _.template($("#profile-item-template").html());

// _.each(profiles, function(profile, index) {
//   var html = profileItem(profile);
//   $('#container').append(html);  
// });

// $('.profile-item').on('click', function() {
//   console.log('360 rotation');
//   console.log("hello " + $(this).find("h2").html());
// });

var ProfileItemView = Backbone.View.extend({
  events: {
    "click h2": "itemClicked"
  },
  itemClicked: function() {
    console.log('item clicked');
  },
  render: function() {
    var template = _.template( $("#profile-item-template").html() );
    this.$el.html(template(this.model));
  }
});

_.each(profiles, function(profile) {
  var view = new ProfileItemView({ model: profile});
  view.render();
  $('#container').append(view.el);
})










// var MenuView = Backbone.View.extend({
//   el: '#menu',
//   events: {
//     'click': 'menuClick'
//   },

//   menuClick: function() {
//     console.log('menu clicked');
//   }
// });

// var menuView = new MenuView();