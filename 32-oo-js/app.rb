class Rectangle
	attr_accessor :height, :width

	def initialize(height, width)
		@height = height
		@width = width
	end

	def area
		height * width
		# @height * @width
		# self.height * self.width
	end

	def self.all
	end
end

r1 = Rectangle.new(5, 4)
r2 = Rectangle.new(15, 30)

puts r1.area
puts r2.area