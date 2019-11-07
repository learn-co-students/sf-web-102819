require 'bundler/setup'
Bundler.require # Load all of the gems in our Gemfile

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: "db/development.sqlite"
) # Setting up our database (with Active Record)

ActiveRecord::Base.logger = Logger.new(STDOUT) # To log our SQL queries

require_all 'app' # Load all of our application code
