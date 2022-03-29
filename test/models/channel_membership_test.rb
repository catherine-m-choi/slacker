# == Schema Information
#
# Table name: channel_memberships
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  channel_id :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class ChannelMembershipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
