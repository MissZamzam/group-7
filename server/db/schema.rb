# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_09_04_052516) do
  create_table "doctors", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.integer "license_number"
    t.string "specialization"
    t.integer "phone_number"
    t.string "picture_link"
    t.integer "years_of_experience"
  end

  create_table "pets", force: :cascade do |t|
    t.string "name"
    t.string "pet_type"
    t.integer "age"
    t.string "color"
    t.string "specialization"
  end

  create_table "specializations", force: :cascade do |t|
    t.string "field_of_speciality"
    t.integer "doctor_id"
    t.integer "pet_id"
  end

end
