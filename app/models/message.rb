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
#
class Message < ApplicationRecord
  validates :body, :messageable_type, :messageable_id, :user_id, presence: true

  belongs_to :messageable, polymorphic: true
end
