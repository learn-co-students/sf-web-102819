class ReviewsController < ApplicationController
  get '/reviews/new' do
    erb :"/reviews/new"
  end
  
  post '/reviews' do
    binding.pry
    @game = Game.new(params[:game].except(:reviews))

    params[:game][:reviews].each do |review_content|
      review = Review.new(review_content)
      review.game = @game
      review.save
    end

    @game.save

    redirect "/games"
  end
end
