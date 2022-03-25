class Api::ConversationMembershipsController < ApplicationController
  def create
    @membership = ConversationMembership.new(memberships_params)
    if @membership.save
      render :show
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end

  private
  def memberships_params
    params.require(:conversation_memberships).permit(:user_id, :conversation_id)
  end
end
