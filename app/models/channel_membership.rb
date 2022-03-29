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
class ChannelMembership < ApplicationRecord
  belongs_to :user
  belongs_to :channel
end
