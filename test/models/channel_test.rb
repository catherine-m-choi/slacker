# == Schema Information
#
# Table name: channels
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  topic       :string
#  description :string
#  founder_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  private     :boolean
#
require 'test_helper'

class ChannelTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
