class DinnersController < ApplicationController
	before_action :find_dinner, only: [:show, :update, :edit, :destroy]

	def index
		@dinners = Dinner.all
	end

	def show
	end

	def new
		@dinner = Dinner.new
		@users = User.all
	end

	def create
		@dinner = Dinner.create(dinner_params)

		redirect_to user_path(@dinner.user.id)
	end

	def edit
	end

	def update
		@dinner.update(dinner_params)
		
		redirect_to @dinner
	end

	def destroy
		@dinner.destroy

		redirect_to dinners_path
		# or redirect_to @dinners
	end

	private
	def dinner_params
		params.require(:dinner).permit(:name, :cost, :user_id)
	end

	def find_dinner
		@dinner = Dinner.find(params[:id])
	end
end
