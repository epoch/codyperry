class SessionController < ApplicationController

  # login form
  def new
  end

  # logging in
  def create
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to root_path
    else
      render :new
    end
  end

  # logging out
  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end
end
