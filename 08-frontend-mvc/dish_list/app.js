_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
}
//-------------------------------

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






