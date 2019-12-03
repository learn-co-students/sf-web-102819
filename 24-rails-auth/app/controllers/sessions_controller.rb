class SessionsController < ApplicationController
  def new
  end

  def create
    # byebug
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      # byebug
      redirect_to @user
    else  
      flash[:error] = "Invalid username or password."
      redirect_to login_path
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to login_path
  end
end