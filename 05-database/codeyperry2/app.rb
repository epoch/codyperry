require 'sinatra'
require 'sinatra/reloader'
require 'pry'

require_relative 'config'
require_relative 'student'

get '/' do
  erb :index
end

get '/api/students' do
  students = Student.all
  content_type :json
  students.to_json
end