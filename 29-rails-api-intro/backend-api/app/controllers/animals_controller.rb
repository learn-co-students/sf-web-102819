class AnimalsController < ApplicationController
	# GET /animals
	def index
		@animals = Animal.all
		render json: @animals
	end

	# GET /animals/:id
	def show
		@animal = Animal.find(params[:id])
		render json: @animal
	end

	# POST /animals
	def create
		@animal = Animal.new(animal_params)
		byebug
		if @animal.save
			render json: @animal
		else
			# Animal coudn't be saved
			render json: { error: "Something went wrong" }
		end
	end

	# PATCH /animals/:id
	def update
		@animal = Animal.find(params[:id])
		@animal.update(animal_params)
		render json: @animal
	end

	# DELETE /animals/:id
	def destroy
		@animal = Animal.find(params[:id])
		@animal.destroy
		render json: { message: "Successfully deleted" }
	end

	# No NEW or EDIT, that's JS job

	private
	def animal_params
		params.require(:animal).permit(:name, :gender, :species_id)
	end
end
