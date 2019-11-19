require_relative "spec_helper"

def app
  ApplicationController
end

describe ApplicationController do
  it "responds with a welcome message" do
    get '/'
    expect(last_response.status).to eq(200)
    expect(last_response.body).to include("Welcome to the Sinatra Template!")
  end

  it "renders a form with nested attributes" do
    get '/reviews/new'

    fill_in("game[title]", :with => "Duke Nukem")

    # #the below css will match any element (input or button)
    # #with a type attribute set to submit
    # page.find(:css, '[type=submit]').click

    # expect(page).to have_text(/Name:\s+Byron/i)
    # expect(page).to have_text(/Breed:\s+Poodle/i)
    # expect(page).to have_text(/Age:\s+9 months/i)
  end
end
