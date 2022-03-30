class Api::ConversationMembershipsController < ApplicationController
  def create
    @membership = ConversationMembership.new(memberships_params)
    if @membership.save
      render :show
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end

  def destroy
    @membership = ConversationMembership.where(user_id: params[:user_id]).where(conversation_id: params[:conversation_id])[0]
    if @membership
      @membership.destroy
      render json: ["Membership successfully deleted"], status: 200
    else
      render json: ["Membership does not exist"], status: 404
    end
  end

  private
  def memberships_params
    params.require(:conversation_memberships).permit(:user_id, :conversation_id)
  end
end
