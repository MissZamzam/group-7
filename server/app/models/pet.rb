class Pet < ActiveRecord::Base
    # belongs_to :specialization
    # belongs_to :doctor
    has_many :specializations
    has_many :doctors, through: :specializations
end
    # has_many :specializations
    # has_many :doctors, through :specializations



# Project has_many Task has_many Programmer
# Project has_many Programmers through Task

# Doctor has_many Specializations has_many Pets
# Doctors has_many Pets through Specialization