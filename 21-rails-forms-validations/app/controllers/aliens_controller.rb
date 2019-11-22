class AliensController < ApplicationController
  before_action :find_alien, only: [:show, :edit]

  def index
    # @aliens = Alien.search(params[:search])
    @aliens = Alien.all
  end

  def show
  end

  def edit
  end

  def update
  end

  def new
    @alien = Alien.new
  end

  def create
    @alien = Alien.create(alien_params)
    if @alien.valid?
      redirect_to(aliens_path)
    else  
      flash[:errors] = @alien.errors.full_messages
      redirect_to(new_alien_path)
    end
  end

  def destroy
  end

  private

  def find_alien
    @alien = Alien.find(params[:id])
  end

  def alien_params
    params.require(:alien).permit(:name, :description, :home_planet, :appendages, :dangerous, :search)
  end
end
