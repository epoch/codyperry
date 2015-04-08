require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'
require 'uri'
require 'pg'

get '/' do
  erb :index  #, :layout => false
end

get '/about' do
  erb :about
end

get '/movie' do
  url = "http://www.omdbapi.com/?t=#{params[:movie_name]}"
  
  # check database first
  # if movie exist then fetch from database else fetch from omdb

  db = PG.connect(:dbname => 'omdb')
  rows = db.exec("SELECT * FROM movies WHERE Title = '#{params[:movie_name]}'")

  if rows.count > 0 # movie exist in database
    # @result = { 'title' => 'Katy Perry: Part of Me'}
    @result = rows.first
  else 
    # fetch from omdb
    # @result = { 'Title' => 'Katy Perry: Part of Me', 'Year' => '2000'} 
    raw_result = HTTParty.get(URI.escape(url))

    @result = {} 
    raw_result.each do |key, value|
      @result[key.downcase] = value
    end

    # save to database
    sql = "INSERT INTO movies (Title, Year, Poster) VALUES ('#{ @result['title'] }', '#{ @result['year'] }', '#{ @result['poster'] }');"
    db.exec(sql)
  end
  db.close
  erb :movie
end