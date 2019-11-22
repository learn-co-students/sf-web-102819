class BooksController < ApplicationController
  before_action :find_book, only: [:show, :edit, :update, :destroy]
  
  def index
    @books = Book.all
  end

  def show
  end

  def new
    @book = Book.new
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

  def find_book
    @book = Book.find(params[:id])
  end

  def find_authors
    @authors = Author.all
  end

  def book_params
    params.require(:book).permit(:title, :publisher, :genre, :year, :author_id,
      :checked_out, author_attributes: [:name, :id])
  end
end
