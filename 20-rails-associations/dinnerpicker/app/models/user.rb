class User < ApplicationRecord
	has_many :dinners, :dependent => :delete_all
end
