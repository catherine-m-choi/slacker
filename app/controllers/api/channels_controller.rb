class Api::ChannelsController < ApplicationController
  def index
    @channels = current_user.channels.includes(:members).includes(:messages)
    render :index
  end

  def create
    if (params[:channel].nil?) 
      @channel = Channel.new()
    else
      @channel = Channel.new(channel_params)
    end

    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def update
    @channel = Channel.find_by(id: params[:channel][:id])
    if @channel.nil?
      render json: ["Channel does not exist"], status: 422
    elsif @channel.update(channel_params)
      render :show
    else
      render json: @channel.errors.full_messages , status: 422
    end
  end

  def destroy
    @channel = Channel.find_by(id: params[:id])
    if @channel
      @channel.destroy
      render json: ["Channel successfully deleted"], status: 200
    else
      render json: ["Channel does not exist"], status: 404
    end
  end

  private
  def channel_params
    params.require(:channel).permit(:name, :topic, :description, :founder_id)
  end
end
