class PiratesController < ApplicationController
  'pirates#index'
  def index
    @pirates = Pirate.all
  end
end