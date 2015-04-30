_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
}

//-------------------------------

var Dish = Backbone.Model.extend({
});

var DishItemView = Backbone.View.extend({
  events: {
    "click .star": "addStar",
    "click a": "showDetail"
  },
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },
  showDetail: function(event) {
    event.preventDefault();
  },
  addStar: function() {
    var count =  this.model.get('starCount') + 1;
    this.model.set('starCount', count);
  },
  render: function() {
    var htmlMaker = _.template( $('#dish-item-template').html() );
    var html = htmlMaker(this.model.toJSON());
    this.$el.html(html);
  }
});

$('#magic-btn').on('click', function() {
  // create a new dish model object
  var dishModel = new Dish({title: 'fairy floss', starCount: 2});
  // create a new view passing in the data
  var view = new DishItemView({ model: dishModel });
  // render to construct to html
  view.render();
  // append html back to document
  $('#container').append(view.el);
});

$.ajax({
  url: 'http://localhost:3000/dishes',
  datatype: 'json'
}).done(function(dishes) {

  _.each(dishes, function(dish) {
    var dishModel = new Dish(dish);
    // create a new view passing in the data
    var view = new DishItemView({ model: dishModel });
    // render to construct to html
    view.render();
    // append html back to document
    $('#container').append(view.el);
  });

})






