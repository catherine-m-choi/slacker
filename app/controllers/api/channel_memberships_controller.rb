class Api::ChannelMembershipsController < ApplicationController
  def create
    @membership = ChannelMembership.new(memberships_params)
    if @membership.save
      render :show
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end

  private
  def memberships_params
    params.require(:channel_memberships).permit(:user_id, :channel_id)
  end
end
