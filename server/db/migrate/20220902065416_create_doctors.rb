class CreateDoctors < ActiveRecord::Migration[7.0]
  def change
    create_table :doctors do |t|
    t.string :name
    t.string :location
    t.integer :license_number 
    end
  end
end
