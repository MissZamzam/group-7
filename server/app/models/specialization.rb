class Specialization < ActiveRecord::Base
    belongs_to :pet
    belongs_to :doctor
end