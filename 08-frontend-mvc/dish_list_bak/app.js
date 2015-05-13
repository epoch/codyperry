_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
}

var randomDishTitle = function(){
  var list = ['cake','pudding','beer','donut','hotdog','muffin','bourbon'];
  return _.sample(list,2).join(' ');
}

var Dish = Backbone.Model.extend({
});

var dishes = [];

dishes.push(new Dish({
  title: 'cake pudding',
  venue: 'general assembly',
  star_count: 5,
  image_url: 'https://cheflippe.files.wordpress.com/2012/06/pudding-cake.jpg'
})); 

dishes.push(new Dish({
  title: 'beer muffin',
  venue: 'general assembly',
  star_count: 500,
  image_url: 'http://placehold.it/400x400'
}));


var DishItemView = Backbone.View.extend({
  events: {
    "click .star": "starred",
    "click h2": "showDetail"
  },
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },
  showDetail: function() {
    router.navigate('dishes/0', {trigger: true});
  },
  starred: function() {
    this.model.set('star_count', this.model.get('star_count') + 1); 
    // this.$el.find('p').html(this.model.get('star_count') + ' stars');
  },
  render: function() {
    var template = _.template( $("#dish-item-template").html() );
    this.$el.html(template(this.model.toJSON()));
    return this;
  }
});

var HomeView = Backbone.View.extend({
  el: '#container', // define the selector which this view is associated with
  render: function () {

    _.each(dishes, function (dish) {
      var view = new DishItemView({model: dish});
      view.render();
      this.$el.append(view.el);
    }, this);
  }
});

var DishDetailView = Backbone.View.extend({
  el: "#container",
  events: {
    "click a": "home"
  },
  home: function() {
    router.navigate('#', true);
  },
  render: function() {
    var template = _.template("<div>{{ title }}</div> <a href='#'>Home</a>");
    this.$el.html( template(this.model.toJSON()) );
    return this;
  }
});

var Router = Backbone.Router.extend({
  routes: {
    "": "home",
    "dishes/:id": "showDish"
  },
  home: function() {
    var homeView = new HomeView();
    homeView.render();
  },
  showDish: function(id) {
    var dish = dishes[id];
    var dishDetailView = new DishDetailView({ model: dish });
    dishDetailView.render();    
  }
});

// _.each(dishes, function(dish) {
//   var view = new DishItemView({ model: dish });
//   $('#container').append(view.render().el);
// });

$('.new-dish-box h1').on('click', function() {
  var dish = { 
    title: randomDishTitle(), 
    venue: 'general assembly',
    star_count: Math.floor(Math.random() * (100 - 0)) + 0,  
    image_url: 'http://placehold.it/400x400' 
  }
  var dish = new Dish(dish);
  dishes.push(dish);
  var view = new DishItemView({ model: dish });
  $('#container').append(view.render().el);

});

var router = new Router();
Backbone.history.start();






