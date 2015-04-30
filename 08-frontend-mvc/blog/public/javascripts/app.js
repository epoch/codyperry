_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
}

//-------------------------------

var AboutView = Backbone.View.extend({
  tagName: 'h1',
  render: function() {
    this.$el.html("about");
    return this;
  }
});

var HomeView = Backbone.View.extend({
  // don't use el: yet
  tagName: 'h1',
  render: function() {
    this.$el.html("home");
    return this;
  }
});

var Router = Backbone.Router.extend({
  routes: {
    "home": "home",
    "about": "about",
    "foo/:id": "foobar"
  },

  foobar: function() {
    console.log('foo bar');
  },

  home: function() {
    var view = new HomeView();
    $('#container').html(view.render().el);
  },

  about: function() {
    var view = new AboutView();
    $('#container').html(view.render().el);
  }
});

var router = new Router();
Backbone.history.start();

$('span').on('click', function() {
  router.navigate('home', true);
});