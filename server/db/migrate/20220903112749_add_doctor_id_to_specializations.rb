class AddDoctorIdToSpecializations < ActiveRecord::Migration[7.0]
  def change
    add_column :specializations, :doctor_id, :integer
  end
end
