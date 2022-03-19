# == Schema Information
#
# Table name: users
#
#  id                  :bigint           not null, primary key
#  username            :string
#  email               :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  title               :string
#  phone               :string
#  skype               :string
#  display_name        :string
#  status_text         :string
#  status_emoji        :string
#  status_expiration   :datetime
#  profile_picture_url :string
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
