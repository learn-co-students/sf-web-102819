class BoatsController < ApplicationController
  def index
    @boats = Boat.all
  end

  def show
    @boat = Boat.find(params[:id])
  end 

  def new
    @boat_types = ["two-masted schooner", "paddleboat", "motorboat", "yacht", "canoe"]
    @boat = Boat.new
    3.times {@boat.passengers.build}
  end

  def create
    @boat = Boat.create(boat_params)
    byebug
    redirect_to boat_path(@boat)
  end

  def edit

  end

  def update

  end

  def destroy

  end

  private

  def boat_params
    params.require(:boat).permit(:name, :boat_type, :length, :afloat, passengers_attributes: [:name, :age])
  end
end
