require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'pry'

# database config
ActiveRecord::Base.establish_connection(
  :adapter => 'postgresql',
  :username => 'daniel',
  :database => 'fumblr'
)

ActiveRecord::Base.logger = Logger.new(STDERR) # show sql in the terminal

# create a class to map to table
class Post < ActiveRecord::Base
  validates :title, :presence => true

  belongs_to :category # singular because belongs to means belongs to one
end

class Category < ActiveRecord::Base
  has_many :posts # plural
end


before do
  @categories = Category.all
end

after do
  ActiveRecord::Base.connection.close
end

get '/' do
  @posts = Post.all
  erb :index
end

get '/posts/new' do
  erb :new
end

post '/posts' do
  post = Post.new
  post.title = params[:title]
  if post.save
    redirect to '/'
  else
    erb :new
  end 
end

# json api
get '/api/posts' do
  content_type :json
  Post.all.to_json
end

post '/api/posts' do
  post = Post.new
  post.title = params[:title]
  post.save

  content_type :json
  post.to_json  
end





