@saved_messages.each do |message|
  json.set! message.id do
    json.partial! "/api/saved_messages/saved_messages", saved_message: message
  end
end
