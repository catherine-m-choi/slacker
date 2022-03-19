json.key_format! camelize: :lower

json.extract! user, 
  :id, 
  :username, 
  :title, 
  :phone, 
  :skype, 
  :display_name, 
  :status_text, 
  :status_emoji, 
  :status_expiration, 
  :profile_picture_url