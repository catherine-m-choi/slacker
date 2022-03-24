# == Schema Information
#
# Table name: conversations
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  name       :string
#  topic      :string
#  purpose    :string
#
class Conversation < ApplicationRecord
  has_many :messages, as: :messageable
  has_many :conversation_memberships
  has_many :members, through: :conversation_memberships, source: :user
end
