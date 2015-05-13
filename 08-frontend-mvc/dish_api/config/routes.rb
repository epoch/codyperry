Rails.application.routes.draw do

  resources :dishes, :only => [:index]
  get '/' => 'dishes#home'

end
