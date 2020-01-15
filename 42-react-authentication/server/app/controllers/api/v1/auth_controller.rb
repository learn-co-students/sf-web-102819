class Api::V1::AuthController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def create # POST /api/v1/login
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect to: :home
    else
      redirect to: :sign_in
    end
  end

end
