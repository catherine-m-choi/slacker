json.key_format! camelize: :lower

json.extract! message, 
  :id, 
  :user_id, 
  :body, 
  :messageable_type,
  :messageable_id,
  :parent_message_id,
  :created_at,
  :updated_at