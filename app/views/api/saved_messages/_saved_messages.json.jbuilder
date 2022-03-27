json.key_format! camelize: :lower

json.extract! saved_message, 
  :id, 
  :user_id, 
  :message_id 

# json.set! :message_id 
