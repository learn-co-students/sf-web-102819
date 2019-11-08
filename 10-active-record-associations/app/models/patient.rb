class Patient < ActiveRecord::Base
	has_many :appointments
	has_many :doctors, through: :appointments
	has_many :departments, through: :doctors
end