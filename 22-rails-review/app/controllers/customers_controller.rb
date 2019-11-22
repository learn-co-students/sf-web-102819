class CustomersController < ApplicationController
  def index
    @customers = Customer.get_customers(params[:sort])
  end

  def show
    @customer = Customer.find(params[:id])
  end

  def new
    @customer = Customer.new
  end

  def create
    @customer = Customer.create(customer_params)
    if @customer.valid?
      redirect_to(@customer)
    else
      render(:new)
    end
  end

  def destroy
    @customer = Customer.find(params[:id])
    @customer.destroy
    redirect_to(customers_path)
  end

  def edit
    @customer = Customer.find(params[:id])
  end

  def update
    @customer = Customer.update(customer_params)
    if @customer.valid?
      redirect_to(@customer)
    else
      @customer = Customer.find(params[:id])
      render(:show)
    end
  end

  private

  def customer_params
    params.require(:customer).permit(:name, :drink_id)
  end
end
