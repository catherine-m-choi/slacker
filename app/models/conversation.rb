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
end
