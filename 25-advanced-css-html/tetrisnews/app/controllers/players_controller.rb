class PlayersController < ApplicationController
	before_action :find_player, only: [:show, :update, :edit, :destroy]

	def index
		@players = Player.all
	end

	def show
	end

	def new
		@player = Player.new
	end

	def create
		@player = Player.create(player_params)

		redirect_to @player
	end

	def edit
	end

	def update
		@player.update(player_params)
		
		redirect_to @player
	end

	def destroy
		@player.destroy

		redirect_to players_path
	end

	private
	def player_params
		params.require(:player).permit(:name, :score, :image)
	end

	def find_player
		@player = Player.find(params[:id])
	end
end
