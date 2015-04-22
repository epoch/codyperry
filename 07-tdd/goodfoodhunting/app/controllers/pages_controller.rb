class PagesController < ApplicationController

  def index
    # wheres is the render??? which template to display???
    @dishes = Dish.all
  end

  def about
  end

end