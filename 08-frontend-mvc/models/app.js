var dish = {
  title: "beer muffin",
  starCount: 7
}



var Dish = Backbone.Model.extend({
});

var d1 = new Dish();
d1.set('foo', 'bar');

var d2 = new Dish(dish);

var d3 = new Dish({
  title: 'cotton candy',
  starCount: 21
});

d1.on('change', function() {
  console.log('yay');
});
