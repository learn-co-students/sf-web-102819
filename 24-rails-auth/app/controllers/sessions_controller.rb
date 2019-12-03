class SessionsController < ApplicationController
  def new
    # We don't need anything in here, because we're not setting up a blank model 
    # to couple with the form.
  end

  def create
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to @user
    else
      flash[:errors] = "Invalid username or password."
      redirect_to login_path
    end
  end

  def destroy
    session.delete(:user_id) # or session[:user_id] = nil
    redirect_to login_path
  end
end
