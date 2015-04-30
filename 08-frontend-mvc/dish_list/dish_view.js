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