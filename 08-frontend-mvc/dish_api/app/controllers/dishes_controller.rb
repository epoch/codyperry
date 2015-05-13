class DishesController < ApplicationController

  def home
  end

  def index
    dishes = [{
      title: 'backend pie',
      starCount: 3
    }, {
      title: 'rails cake',
      starCount: 5
    }]

    render :json => dishes.to_json
  end

end