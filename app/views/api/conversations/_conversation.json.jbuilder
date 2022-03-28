json.key_format! camelize: :lower

json.extract! conversation, 
  :id, 
  :name, 
  :topic, 
  :purpose

json.members conversation.members.pluck(:id)
json.last_message conversation.messages.order(created_at: :desc).limit(1).pluck(:id).first
json.pinned_messages conversation.messages.where(pinned: true).pluck(:id)