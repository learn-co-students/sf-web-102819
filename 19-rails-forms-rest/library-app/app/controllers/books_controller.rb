class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def show
    find_book
  end

  def new
    @book = Book.new
  end

  def create
    @book = Book.create(book_params)
    redirect_to @book
  end

  def edit
    find_book
  end

  def update
    find_book
    @book.update(book_params)
    redirect_to books_path
  end

  private

  def book_params
    params.require(:book).permit(:title, :author, :publication_date)
  end

  def find_book
    @book = Book.find(params[:id])
  end

end
