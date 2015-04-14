require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'pry'
require 'bcrypt'

enable :sessions

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

class User < ActiveRecord::Base
  has_secure_password
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

get '/session/new' do
  erb :login
end

helpers do 
  def logged_in?
    !!current_user # trick to return boolean
  end

  def current_user
    User.find_by(id: session[:user_id])
  end
end

post '/session' do
  @user = User.where(email: params[:email]).first
  # @user = User.find_by(email: params[:email])

  if @user && @user.authenticate(params[:password])
    session[:user_id] = @user.id
    # correct password
    redirect to '/'
  else
    # incorrect email or password
    erb :login
  end
end

delete '/session' do
  session[:user_id] = nil
  redirect to '/'
end

get '/' do
  @posts = Post.all
  erb :index
end

get '/posts/new' do
  redirect to '/session/new' unless current_user
  erb :new
end

get '/posts/:id' do
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





