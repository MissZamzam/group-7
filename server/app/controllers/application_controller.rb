class ApplicationController < Sinatra::Base
    set :default_content_type, "application/json"

    #get doctors

        get '/doctors/:id' do
            daktari = Doctor.find(params[:id])
            daktari.to_json
        end

        get "/doctors" do
          madaktari = Doctor.all
          madaktari.to_json
        end

    #get specializations

        get '/specializations/:id' do
            spec = Specialization.find(params[:id])
            spec.to_json
        end

        get "/specializations" do
            specs = Specialization.all
            specs.to_json
        end

    #get pets

        get '/pets/:id' do
            pet = Pet.find(params[:id])
            pet.to_json
        end
     
        get "/pets" do
            pets = Pet.all
            pets.to_json
        end
     

    #post
        post '/doctors' do
            daktari = Doctor.create(  
            name: params[:name], 
            location: params[:location],
            license_number: params[:license_number], specialization: params[:specialization],phone_number: params[:phone_number],picture_link: params[:picture_link],years_of_experience: params[:years_of_experience])
            daktari.to_json
        end

      post '/specialization' do
        spec = Specialization.create(
          field_of_speciality: params[:field_of_speciality],
          doctor_id: params[:doctor_id],
          pet_id: params[:pet_id]
        )
        spec.to_json
      end

      post '/pets' do
        pet = Pet.create(
          name: params[:name]
        )
        pet.to_json
      end


    #delete

        delete '/doctors/:id' do
            delete_doc = Doctor.find(params[:id])
            delete_doc.destroy
            delete_doc.to_json
        end

        delete '/specializations/:id' do
            spec = Specialization.find(params[:id])
            spec.destroy
            spec.to_json
        end

        delete '/pets/:id' do
            pet = Pet.find(params[:id])
            pet.destroy
            pet.to_json
        end
end
