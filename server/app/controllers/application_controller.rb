class ApplicationController < Sinatra::Base
    set :default_content_type, "application/json"

    get "/" do
    {message: "Good Luck with your project"}.to_json
    end

    post "/doctors" do
     daktari = Doctor.create(name: param[:name], location: param[:name] ,license_number: param[:license_number])
    end
end
