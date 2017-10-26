require 'test_helper'

class Api::PhotosControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_photos_index_url
    assert_response :success
  end

  test "should get create" do
    get api_photos_create_url
    assert_response :success
  end

  test "should get update" do
    get api_photos_update_url
    assert_response :success
  end

  test "should get delete" do
    get api_photos_delete_url
    assert_response :success
  end

  test "should get show" do
    get api_photos_show_url
    assert_response :success
  end

end
