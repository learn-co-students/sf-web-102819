class UsersController < ApplicationController
    before_action :find_and_return_user, only: [:show]
    before_action :authorized, only: [:new, :create]

    def index
    end

    def show
    end

    def new
        @user = User.new
    end

    def create
        @user = User.new(user_params)
        if @user.valid?
            @user.save
            redirect_to @user
        else  
            redirect_to :new
        end
    end

    private

    def find_and_return_user
        @user = User.find(params[:id])
    end

    def user_params
        params.require(:user).permit(:username, :password, :password_confirmation)
    end
end
