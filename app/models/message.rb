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
#
class Message < ApplicationRecord
  validates :body, :messageable_type, :messageable_id, :user_id, presence: true

  belongs_to :messageable, polymorphic: true
  # has_one :self_ref, class_name: 'Message', foreign_key: :id

  belongs_to :user, 
    class_name: 'User', 
    foreign_key: :user_id

  has_many :child_messages, 
    class_name: 'Message', 
    foreign_key: :parent_message_id

  belongs_to :parent_message, 
    class_name: 'Message', 
    foreign_key: :parent_message_id, 
    optional: true

  # before_save :stop_update_time_stamps

  # def stop_update_time_stamps
  #   self.class.record_timestamps = false if self.saved_change_to_pinned? || self.saved_change_to_pinner_id? 
  # end 

  def chat
    if (self.messageable_type == "Conversation")
      @chat = Conversation.find_by(id: self.messageable_id)
    elsif (self.messageable_type == "Channel")
      @chat = Channel.find_by(id: self.messageable_id)
    end
    return @chat
  end
  
end
