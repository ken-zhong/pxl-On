require 'test_helper'

class Api::SessionControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get api_session_new_url
    assert_response :success
  end

  test "should get create" do
    get api_session_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_session_destroy_url
    assert_response :success
  end

end
