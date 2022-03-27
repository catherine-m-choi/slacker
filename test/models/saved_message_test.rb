# == Schema Information
#
# Table name: saved_messages
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  message_id :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class SavedMessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
