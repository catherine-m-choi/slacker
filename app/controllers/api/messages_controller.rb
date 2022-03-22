class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    if @message.save
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
      :parent_message_id
    )
  end
end
