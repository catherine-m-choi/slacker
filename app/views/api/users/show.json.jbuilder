json.key_format! camelize: :lower

json.extract! @user, 
  :id, 
  :username, 
  :title, 
  :phone, 
  :skype, 
  :display_name, 
  :status_text, 
  :status_emoji, 
  :status_expiration, 
  :profile_picture_url,
  :email

messages = @user.saved_messages.pluck(:id, :message_id)

json.saved_messages do
  messages.each do |msg|
    json.set! msg[0] do
      json.message_id msg[1]
    end
  end
end