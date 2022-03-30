class Api::ChannelMembershipsController < ApplicationController
  def create
    @membership = ChannelMembership.new(memberships_params)
    if @membership.save
      render :show
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end

  def destroy
    @membership = ChannelMembership.where(user_id: params[:user_id]).where(channel_id: params[:channel_id])[0]
    if @membership
      @membership.destroy
      render json: ["Membership successfully deleted"], status: 200
    else
      render json: ["Membership does not exist"], status: 404
    end
  end

  private
  def memberships_params
    params.require(:channel_memberships).permit(:user_id, :channel_id)
  end
end
