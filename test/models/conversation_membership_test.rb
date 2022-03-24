# == Schema Information
#
# Table name: conversation_memberships
#
#  id              :bigint           not null, primary key
#  user_id         :bigint           not null
#  conversation_id :bigint           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
require 'test_helper'

class ConversationMembershipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
