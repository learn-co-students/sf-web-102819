class AuthorsController < ApplicationController
  before_action :find_author

  def show
  end
  
  def destroy
    @author.destroy
    redirect_to books_path
  end

  private

  def find_author
    @author = Author.find(params[:id])
  end
end
