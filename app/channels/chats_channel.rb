class ChatsChannel < ApplicationCable::Channel
  
  # Expecting params that include type of chat and id. 
  # For example, streaming a conversation with id of 7:
  # 
  # params = {
  #   chat_type: "Conversation" # or "Channel",
  #   chat_id: 7
  # }
  # 
  # Params are coming from client-side when creating a new
  # subscription. As Rails Guide puts it, "the first argument 
  # to subscriptions.create becomes the params hash in the 
  # cable channel."

  def subscribed
    chat_type = params[:chat_type]
    chat_id = params[:chat_id]

    if (chat_type == "Conversation")
      @chat = Conversation.find_by(id: chat_id)
    elsif (chat_type == "Channel")
      @chat = Channel.find_by(id: chat_id)
    end

    stream_for @chat
  end

  def unsubscribed
    # Any cleanup needed when ChatsChannel is unsubscribed
  end
end
