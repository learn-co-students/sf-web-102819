class GamesController < ApplicationController
  get '/games' do
    @games = Game.all
    erb :"/games/index"
  end

  get '/games/new' do
    erb :"/games/new"
  end

  get '/games/:id' do
    @game = Game.find(params[:id])
    erb :"/games/show"
  end

  get '/games/:id/edit' do
    @game = Game.find(params[:id])
    erb :'/games/edit'
  end

  post '/games' do
    Game.create(params[:game])
    redirect "/games"
  end

  patch '/games/:id' do
    binding.pry
    @game = Game.find(params[:id])
    @game.update(params[:game])
    redirect "/games/#{@game.id}"
  end
end
