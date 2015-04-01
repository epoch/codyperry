require 'sinatra'
require 'httparty'

get '/' do
  @people = HTTParty.get('http://swapi.co/api/people')
  erb :index
end

get '/about' do
  erb :about
end





