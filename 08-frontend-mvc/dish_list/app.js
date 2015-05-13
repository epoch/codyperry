_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
}
//-------------------------------

var dish1 = new Dish({ title: 'test dish 1', starCount: 2 });
var dish2 = new Dish({ title: 'test dish 2', starCount: 5 });
var dish3 = new Dish({ title: 'test dish 3', starCount: 9 });


var lunch_menu = new Dishes([dish1, dish2, dish3]);





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

var dinner_menu = new Dishes();

dinner_menu.fetch().done(function() {

  dinner_menu.each(function(dish) {
    
    var view = new DishItemView({model: dish});
    view.render();
    $('#container').append(view.el);
    
  });

});

// $.ajax({
//   url: 'http://localhost:3000/dishes',
//   datatype: 'json'
// }).done(function(dishes) {
//   _.each(dishes, function(dish) {
//     var dishModel = new Dish(dish);
//     // create a new view passing in the data
//     var view = new DishItemView({ model: dishModel });
//     // render to construct to html
//     view.render();
//     // append html back to document
//     $('#container').append(view.el);
//   });
// })






