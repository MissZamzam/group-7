class RenameColumnNameInSpecialiation < ActiveRecord::Migration[7.0]
  def change
    rename_column :specializations, :field_of_specialtiy ,:field_of_speciality
  end
end
