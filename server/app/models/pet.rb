class Pet < ActiveRecord::Base
    belongs_to :specialization
end


# Project has_many Task has_many Programmer
# Project has_many Programmers through Task

# Doctor has_many Specializations has_many Pets
# Doctors has_many Pets through Specialization