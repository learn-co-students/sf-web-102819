class RecipesController < ApplicationController
  def index
    @recipes = Recipe.all 
    render json: @recipes, only: [:id, :name], include: :ingredients
  end

  def show
    @recipe = Recipe.find(params[:id])
    render json: @recipe
  end
end
