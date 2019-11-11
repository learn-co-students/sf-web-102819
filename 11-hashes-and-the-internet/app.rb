require 'json'
require 'pry'
require 'rest-client'

def initialize_program
    puts
    puts "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
    puts "} Welcome to the BookWorm CLI! {"
    puts "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
    request_user_input
end

def request_user_input
    puts "Enter a title or some keywords for books in which you're interested."
    user_input = gets.chomp
    process_user_input(user_input)
end

def process_user_input(user_input)
    user_input.split(" ").join("+")
end

def get_books_hash(user_input)
    response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{user_input}")
    response_hash = JSON.parse(response)
    books  = response_hash["items"].map{ |item| item["volumeInfo"] }
    # binding.pry
    process_books_hash(books)
end

def process_books_hash(raw_books_array)
    # binding.pry
    raw_books_array.map do |book|
        title = book["title"]
        authors = format_authors(book["authors"])
        description = format_description(book["description"])
        {:title => title, :authors => authors, :description => description}
    end
end

def format_authors(authors_array)
    if !authors_array
        return "Anonosaurus Rex"
    elsif authors_array.length == 1
        authors_array[0]
    else  
        return authors_array[0...-1].join(", ") + "and " + authors_array[-1]
    end
end

def format_description(description)
    if !description
        return "Beyond description."
    else
        return description
    end
end

def print_books(books_hash)
    # binding.pry
    octothorpe_wall = "#" * 79
    books_hash.each do |book|
        puts octothorpe_wall
        puts
        puts "#{book[:title]} by #{book[:authors]}"
        puts "*-" * 39 + "*"
        puts book[:description]
        puts
    end
    puts octothorpe_wall
end

query = initialize_program
books_hash = get_books_hash(query)
print_books(books_hash)
