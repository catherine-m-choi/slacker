json.key_format! camelize: :lower

json.extract! channel_memberships, 
  :id, 
  :user_id, 
  :channel_id