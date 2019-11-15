class ApplicationController < Sinatra::Base
    set :views, 'app/views'
    # hack the patch
    set :method_override, true 

    # homepage
    get '/' do
        erb :home
    end

    # view all books
    get '/books' do
        # how do we get the books?
        @books = Book.all
        # binding.pry
        erb :index
    end

    # create a book form
    get '/books/new' do
        erb :new
    end

    # view a single book
    get '/books/:id' do
        # pry!! params
        # binding.pry
        @book = Book.find(params[:id])
        erb :show
    end

    # create a book instance
    # view all books
    post '/books' do
        # binding.pry
        Book.create(params)
        @books = Book.all
        erb :index
    end

    # create a book editing form
    get '/books/:id/edit' do
        @book = Book.find(params[:id])
        erb :edit
    end

    # update a book instance
    # view the book
    patch '/books/:id' do
        # binding.pry
        book = Book.find(params[:id])
        book.update(
            title: params[:title], 
            author: params[:author], 
            snippet: params[:snippet]
        )
        # SSOT
        redirect "/books/#{book.id}"
    end

end
