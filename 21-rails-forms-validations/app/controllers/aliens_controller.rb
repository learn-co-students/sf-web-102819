class AliensController < ApplicationController
  before_action :find_alien, only: [:show, :edit, :update]

  def index
    @aliens = Alien.all
  end

  def show
  end

  def edit
  end

  def update
    @alien.update(alien_params)
    validate_check('edit')
  end

  def new
    @alien = Alien.new
  end

  def create
    @alien = Alien.new(alien_params)
    validate_check('new')
  end

  def destroy
  end

  private

  def validate_check(failure_path)
    if @alien.valid?
      @alien.save
      redirect_to aliens_path
    else  
      flash[:errors] = @alien.errors.full_messages
      render failure_path
    end
  end

  def find_alien
    @alien = Alien.find(params[:id])
  end

  def alien_params
    params.require(:alien).permit(:name, :description, :home_planet, :appendages, :dangerous, :search)
  end
end
