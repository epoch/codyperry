require 'sinatra'
require 'sinatra/reloader'
require 'pg' # for postgresql database
require 'pry'

get '/' do
  sql = 'SELECT * FROM dishes;'
  @rows = run_sql(sql)
  erb :index
end

get '/dishes' do
  sql = 'SELECT * FROM dishes;'
  @rows = run_sql(sql)
  erb :index
end

get '/dishes/new' do
  erb :new
end

post '/dishes' do
  sql = "INSERT INTO dishes (name,image_url) VALUES ('#{ params['name'] }', '#{ params['image_url']}')"
  run_sql(sql)
end

def run_sql(sql)
  db = PG.connect(:dbname => 'goodfoodhunting')
  rows = db.exec(sql)
  db.close
  return rows
end