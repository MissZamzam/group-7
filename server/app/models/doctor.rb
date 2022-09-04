class Doctor < ActiveRecord::Base
    has_many :specializations
    has_many :pets ,through: :specializations
end