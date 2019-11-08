class Department < ActiveRecord::Base
	has_many :doctors
end