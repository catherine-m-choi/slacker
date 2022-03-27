class Api::SavedMessagesController < ApplicationController

  def index
    @saved_messages = current_user.saved_messages
    # debugger
    if @saved_messages
      render :index
    else
      render json: []
    end
  end

  def create
    @saved_message = SavedMessage.new(saved_message_params)
    if @saved_message.save!
      # @message = Message.find_by(id: params[:saved_message][:message_id])
      render :show
    else
      render json: @message.errors.full_messages , status: 422
    end
  end

  def destroy
    @saved_message = SavedMessage.find_by(id: params[:id])
    if @saved_message
      @saved_message.destroy
      render json: ["Message successfully unsaved"], status: 200
    else
      render json: ["No such saved message"], status: 404
    end
  end
  
  private
  def saved_message_params
    params.require(:saved_message).permit(:user_id, :message_id)
  end

end
