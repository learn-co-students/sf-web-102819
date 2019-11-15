require "pry"
require "rack"
require_relative "./app"
require_relative "./song"

run Application.new
