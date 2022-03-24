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
class ConversationMembership < ApplicationRecord
  belongs_to :user
  belongs_to :conversation
end
