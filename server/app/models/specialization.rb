class Specialization < ActiveRecord::Base
    has_many :pets
    belongs_to :doctor
end