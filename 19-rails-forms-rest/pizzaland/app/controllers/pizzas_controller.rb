class PizzasController < ApplicationController
	before_action :find_pizza, only: [:show]

	def index
		@pizzas = Pizza.all
		# render :index
	end

  def show
  end

  def new
		@pizza = Pizza.new
  end

  def create
		@pizza = Pizza.new(pizza_params)
    if @pizza.valid?
			@pizza.save
			redirect_to pizzas_path
    else
      render 'new'
    end
  end

  def edit
  end

  def update
    @pizza.update(pizza_params)
  end

  def destroy
    @pizza.destroy
    redirect_to pizzas_path
  end

	private
	def pizza_params
    params.require(:pizza).permit(:name, :cost, :size, :extra_cheese)
  end

  def find_pizza
    @pizza = Pizza.find(params[:id])
  end
end
