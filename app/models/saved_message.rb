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
class SavedMessage < ApplicationRecord
  validates :user_id, :message_id, presence: true
  validates_uniqueness_of :message_id, scope: :user_id

  belongs_to :user
end
