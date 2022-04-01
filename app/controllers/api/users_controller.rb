class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.find_by(params: params[:id])
    if @user
      render :index
    else 
      render json: @user.errors.full_messages , status: 422
    end
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      @user.add_default_channels
      @user.add_default_convo
      render :show
    else
      render json: @user.errors.full_messages , status: 422
    end
  end
  
  def update
    @user = User.find_by(id: params[:user][:id])
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages , status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(
      :email, 
      :username, 
      :password,
      :title,
      :phone,
      :display_name,
      :profile_picture_url,
      :status_text,
      :status_emoji
    )
  end
end
