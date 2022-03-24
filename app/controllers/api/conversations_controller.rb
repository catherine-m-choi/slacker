class Api::ConversationsController < ApplicationController
  def index
    @convos = current_user.conversations.includes(:members)
    render :index
  end

  def create
    if (params[:conversation].nil?) 
      @convo = Conversation.new()
    else
      @convo = Conversation.new(conversation_params)
    end

    if @convo.save
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def update
    @convo = Conversation.find_by(id: params[:conversation][:id])
    if @convo.nil?
      render json: ["Conversation does not exist"], status: 422
    elsif @convo.update(conversation_params)
      render :show
    else
      render json: @convo.errors.full_messages , status: 422
    end
  end

  def destroy
    @convo = Conversation.find_by(id: params[:id])
    if @convo
      @convo.destroy
      render json: ["Conversation successfully deleted"], status: 200
    else
      render json: ["Conversation does not exist"], status: 404
    end
  end

  private
  def conversation_params
    params.require(:conversation).permit(:name, :topic, :purpose)
  end
    
end
