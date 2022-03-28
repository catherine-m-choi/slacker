class Api::MessagesController < ApplicationController
  def index
    # if params[:thread] && params[:chat_type] === "Conversation"
    #   parent = Message.find_by(id: params[:parent_message_id])
    #   if parent
    #     @messages = parent.child_messages 
    #   else
    #     @messages = []
    #   end
    #   # debugger
    #   render :index
    # elsif params[:thread] && params[:chat_type] === "Channel"
    #   parent = Channel.find_by(id: params[:parent_message_id])
    #   @messages = parent.child_messages
    #   render :index
    # elsif params[:chat_type] === "Conversation"
    #   convo = Conversation.find_by(id: params[:chat_id])
    #   @messages = convo.messages if convo 
    #   render :index
    # elsif params[:chat_type] === "Channel"
    #   channel = Channel.find_by(id: params[:chat_id])
    #   @messages = channel.messages
    #   render :index
    # else
    @messages = Message.all.includes(:child_messages)
    render :index
    # end
  end
  
  def create
    @message = Message.new(message_params)
    if @message.save!
      # Broadcasting message to chat when message is routed to create
      @chat = @message.chat
      broadcast_hash = {action: "create", message: @message}
      if (params[:thread]) 
        broadcast_hash[thread] = true
      end
      ChatsChannel.broadcast_to(@chat, broadcast_hash)
      render :show
    else
      render json: @message.errors.full_messages , status: 422
    end
  end

  def update
    @message = Message.find_by(id: params[:message][:id])
    if @message.nil?
      render json: ["Message does not exist"], status: 422
    elsif (params[:message][:pinned] != "" || params[:message][:pinned] == true)
      @message.pinned = params[:message][:pinned]
      @message.pinner_id = params[:message][:pinner_id]
      @message.save(touch: false)
      @chat = @message.chat
      broadcast_hash = {action: "update", message: @message}
      ChatsChannel.broadcast_to(@chat, broadcast_hash)
      render :show
    elsif @message.update(message_params)
      @chat = @message.chat
      broadcast_hash = {action: "update", message: @message}
      ChatsChannel.broadcast_to(@chat, broadcast_hash)
      render :show
    else
      render json: @message.errors.full_messages , status: 422
    end
  end

  def destroy
    @message = Message.find_by(id: params[:id])
    if @message
      @chat = @message.chat
      broadcast_hash = {action: "delete", message: @message}
      ChatsChannel.broadcast_to(@chat, broadcast_hash)
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
      :chat_type,
      :thread,
      :pinned,
      :pinner_id
    )
  end
end
