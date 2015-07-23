require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do
  erb :index
end

get '/about' do
  erb :about
end

get '/contact' do
  "please give me money"
end

# sinatra dynamic route
get '/hello/:name' do
  "hello there #{ params[:name] }"
end

get '/calc/multiply/:num1/:num2' do
  result = params[:num1].to_i * params[:num2].to_i
  "the result is #{ result }"
end

get '/hello/peeps' do
  "over here"
end



