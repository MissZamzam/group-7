class AddingColumnsToThePetsTable < ActiveRecord::Migration[7.0]
  def change
    add_column :pets, :tag_number, :integer
    add_column :pets, :pets_breed, :string 
    add_column :pets, :phone_number, :integer
  end
end
