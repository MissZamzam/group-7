class Pet < ActiveRecord::Base
    has_many :specializations
    has_many :doctors, through: :specializations
end