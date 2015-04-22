class DishesController < ApplicationController

  def index
    @dishes = Dish.all
  end

  def show
    @dish = Dish.find(params[:id])
  end

  def new
    @dish = Dish.new
  end

  def create
    @dish = Dish.new
    @dish.title = params[:title]
    @dish.image_url = params[:image_url]
    if @dish.save
      redirect_to '/'
    else
      render :new
    end
  end

  # by convention the template is same as the method name
  def edit
    @dish = Dish.find(params[:id])
  end

  def update
    @dish = Dish.find(params[:id])
    @dish.title = params[:title]
    @dish.image_url = params[:image_url]
    if @dish.save
      redirect_to '/'
    else
      render :edit
    end
  end 

  def destroy
    @dish = Dish.find(params[:id])  
    @dish.destroy
    redirect_to '/'
  end 

end