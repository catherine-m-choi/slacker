json.key_format! camelize: :lower

json.extract! conversation_memberships, 
  :id, 
  :user_id, 
  :conversation_id