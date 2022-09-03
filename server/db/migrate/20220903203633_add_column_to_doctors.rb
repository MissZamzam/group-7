class AddColumnToDoctors < ActiveRecord::Migration[7.0]
  def change
    add_column :doctors, :specialization, :string
    add_column :doctors, :phone_number, :integer
    add_column :doctors, :picture_link, :string
    add_column :doctors, :years_of_experience, :integer
  end
end
