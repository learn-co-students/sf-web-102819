class DinosaursController < ApplicationController
  def index
    @dinosaurs = Dinosaur.all
  end

  def show
    @dinosaur = Dinosaur.find_by(id: params[:id])
  end

  def edit

  end

  def new
    # if we want to use rails form builder methods like form_for,
    # we have to provide an instance of the model we're building
    @dinosaur = Dinosaur.new
  end

  def create
    new_dino = Dinosaur.new(dino_params)

    if new_dino.save
      redirect_to dinosaur_path(new_dino)
    else
      render :new
    end
  end

  private

  def dino_params
    params.require(:dinosaur).permit(:name, :species, :number_of_teeth, :era, :diet)
  end
end
