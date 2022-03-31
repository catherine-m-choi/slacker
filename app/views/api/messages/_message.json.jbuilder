json.key_format! camelize: :lower

json.extract! message, 
  :id, 
  :user_id, 
  :body, 
  :messageable_type,
  :messageable_id,
  :parent_message_id,
  :pinned,
  :pinner_id,
  :giphy,
  :created_at,
  :updated_at

json.reply_count message.child_messages.pluck(:id).length
json.user_replies_ids message.child_messages.pluck(:user_id).uniq[0...4]