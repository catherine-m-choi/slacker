require 'test_helper'

class Api::UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get api_users_new_url
    assert_response :success
  end

end
