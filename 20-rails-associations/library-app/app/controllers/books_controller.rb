class BooksController < ApplicationController
  before_action :find_book, only: [:show, :edit, :update, :destroy]
  before_action :get_authors, only: [:new, :edit]
  
  def index
    @books = Book.all
  end

  def show
    end

  def new
    @book = Book.new
    @author = @book.build_author
  end

  def create
    book = Book.create(book_params)
    redirect_to book
  end

  def edit
  end

  def update
    @book.update(book_params)
    redirect_to @book
  end

  def destroy
    @book.destroy
    redirect_to books_path
  end

  private

  def get_authors
    @authors = Author.all
  end

  def find_book
    @book = Book.find(params[:id])
  end

  def book_params
    params.require(:book).permit(
      :title, 
      :publisher, 
      :genre, :year, :author_id, :checked_out, author_attributes: [:id, :name])
  end
end
