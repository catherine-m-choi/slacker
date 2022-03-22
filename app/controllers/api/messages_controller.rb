class Api::MessagesController < ApplicationController
  def index
    if params[:chat_type] === "Conversation"
      convo = Conversation.find_by(id: params[:chat_id])
      @messages = convo.messages
      render :index
    elsif params[:chat_type] === "Channel"
      channel = Channel.find_by(id: params[:chat_id])
      @messages = channel.messages
      render :index
    else
      render json: ["Conversation or channel must be selected"], status: 422
    end
  end
  
  def create
    @message = Message.new(message_params)
    if @message.save
      
      # Broadcasting message to chat when message is routed to create
      @chat = @message.chat
      ChatsChannel.broadcast_to(@chat, @message)
      render :show
    else
      render json: @message.errors.full_messages , status: 401
    end
  end

  def update
    @message = Message.find_by(id: params[:message][:id])
    if @message.nil?
      render json: ["Message does not exist"], status: 404
    elsif @message.update(message_params)
      render :show
    else
      render json: @message.errors.full_messages , status: 422
    end
  end

  def destroy
    @message = Message.find_by(id: params[:id])
    if @message
      @message.destroy
      render json: ["Message successfully deleted"], status: 200
    else
      render json: ["Message does not exist"], status: 404
    end
  end

  private
  def message_params
    params.require(:message).permit(
      :user_id, 
      :body, 
      :messageable_id, 
      :messageable_type,
      :parent_message_id,
      :chat_id,
      :chat_type
    )
  end
end
