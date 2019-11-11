require 'json'
require 'pry'
require 'rest-client'

puts
puts "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
puts "} Welcome to the BookWorm CLI! {"
puts "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
puts 
puts "Enter a title or some keywords for books in which you're interested."
user_input = gets.chomp
response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{user_input}")
books_hash = JSON.parse(response)
books_volume_info = books_hash["items"].map { |item| item["volumeInfo"] }
books_selected_info = books_volume_info.map do |book|
    title = book["title"]
    authors = book["authors"]
    description = book["description"]
    {title: title, authors: authors, description: description}
end

binding.pry

# Populate the database with API data

octothorpe_wall = "#" * 79
star_wall_thing = "*-" * 39 + "*"
books_selected_info.each do |book|
    puts octothorpe_wall
    puts
    puts "#{book[:title]} by #{book[:authors]}"
    puts star_wall_thing
    puts book[:description]
    puts
end
puts octothorpe_wall

# binding.pry
puts "Book time!"
