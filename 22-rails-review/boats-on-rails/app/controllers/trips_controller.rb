class TripsController < ApplicationController
  def index

  end

  def show
    @trip = Trip.find(params[:id])
  end 

  def new
    @trip = Trip.new
    @passenger = Passenger.new
    @trip.passenger = @passenger
  end

  def create
    @passenger = Passenger.create(trip_params[:passenger_attributes])
    @trip = Trip.new(trip_params)
    @trip.passenger = @passenger
    @trip.save
    redirect_to trip_path(@trip)
  end

  def edit

  end

  def update

  end

  def destroy

  end

  private

  def trip_params
    params.require(:trip).permit(:boat_id, :passenger_id, passenger_attributes: [:name, :age])
  end
end
