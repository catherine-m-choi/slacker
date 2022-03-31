# == Schema Information
#
# Table name: messages
#
#  id                :bigint           not null, primary key
#  user_id           :bigint           not null
#  body              :text             not null
#  messageable_type  :string           not null
#  messageable_id    :bigint           not null
#  parent_message_id :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  pinned            :boolean
#  pinner_id         :integer
#  giphy             :boolean
#
require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
