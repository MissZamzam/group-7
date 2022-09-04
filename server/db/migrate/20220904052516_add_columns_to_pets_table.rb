class AddColumnsToPetsTable < ActiveRecord::Migration[7.0]
  def change
    add_column :pets, :pet_type, :string
    add_column :pets, :age, :integer
    add_column :pets, :color, :string
    add_column :pets, :specialization, :string
  end
end
