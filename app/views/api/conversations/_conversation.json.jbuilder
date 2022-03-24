json.key_format! camelize: :lower

json.extract! conversation, 
  :id, 
  :name, 
  :topic, 
  :purpose

json.members conversation.members.pluck(:id)