class Doctor < ActiveRecord::Base
	belongs_to :department
	has_many :appointments
	has_many :patients, through: :appointments
end