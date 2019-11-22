require 'test_helper'

class FishControllerTest < ActionDispatch::IntegrationTest
  setup do
    @fish = fish(:one)
  end

  test "should get index" do
    get fish_index_url
    assert_response :success
  end

  test "should get new" do
    get new_fish_url
    assert_response :success
  end

  test "should create fish" do
    assert_difference('Fish.count') do
      post fish_index_url, params: { fish: { bony: @fish.bony, name: @fish.name, species: @fish.species, taste: @fish.taste, weight: @fish.weight } }
    end

    assert_redirected_to fish_url(Fish.last)
  end

  test "should show fish" do
    get fish_url(@fish)
    assert_response :success
  end

  test "should get edit" do
    get edit_fish_url(@fish)
    assert_response :success
  end

  test "should update fish" do
    patch fish_url(@fish), params: { fish: { bony: @fish.bony, name: @fish.name, species: @fish.species, taste: @fish.taste, weight: @fish.weight } }
    assert_redirected_to fish_url(@fish)
  end

  test "should destroy fish" do
    assert_difference('Fish.count', -1) do
      delete fish_url(@fish)
    end

    assert_redirected_to fish_index_url
  end
end
