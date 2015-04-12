require 'sinatra'
require 'sinatra/reloader'
require 'pg' # for postgresql database
require 'pry'

require_relative 'config'
require_relative 'dish'

after do
  ActiveRecord::Base.connection.close
end

get '/' do
  @dishes = Dish.all
  erb :index
end

get '/dishes' do
  sql = 'SELECT * FROM dishes order by name;'
  @rows = run_sql(sql)
  erb :index
end

# show new form
get '/dishes/new' do
  erb :new
end

# show edit form
get '/dishes/:id/edit' do
  # sql = "SELECT * FROM dishes WHERE id = #{ params[:id] }"
  # rows = run_sql(sql)
  # @dish = rows[0]
  @dish = Dish.find(params[:id])
  erb :edit
end

# create new dish  
post '/dishes' do
  Dish.create(name: params['name'], image_url: params['image_url'])
  redirect to '/'
end

# update existing dish
put '/dishes/:id' do
  # sql = "UPDATE dishes SET name='#{ params[:name] }', image_url='#{ params[:image_url] }' WHERE id = #{ params[:id] };"
  # run_sql(sql)
  dish = Dish.find(params[:id])
  dish.name = params[:name]
  dish.image_url = params[:image_url]
  dish.save

  # dish.update name: params[:name], image_url: params[:image_url]

  redirect to '/'
end

# delete a dish
delete '/dishes/:id/delete' do
  # sql = "DELETE FROM dishes WHERE id = #{ params[:id] }"
  # run_sql(sql)

  # find the object I want to delete
  dish = Dish.find params[:id]

  # call delete on the object
  dish.delete

  redirect to '/'
end

def run_sql(sql)
  db = PG.connect(:dbname => 'goodfoodhunting')
  rows = db.exec(sql)
  db.close
  return rows
end