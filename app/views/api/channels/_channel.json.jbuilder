json.key_format! camelize: :lower

json.extract! channel, 
  :id, 
  :name, 
  :topic, 
  :description,
  :founder_id

json.members channel.members.pluck(:id)
json.last_message channel.messages.order(created_at: :desc).limit(1).pluck(:id).first
json.pinned_messages channel.messages.where(pinned: true).pluck(:id)