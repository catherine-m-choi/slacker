class OmniauthCallbacksController < Devise::OmniauthCallbacksController
  skip_before_action :verify_authenticity_token, only: :google_oauth2

  def google_oauth2
    @user = User.from_omniauth(request.env["omniauth.auth"])

    if @user.persisted?
      # logged in user and bootstrapping currentUser
      login!(@user)
      @user.add_default_channels
      @user.add_default_convo
      
      sign_in_and_redirect @user, event: :authentication # this will throw if @user is not activated
      set_flash_message(:notice, :success, kind: "Google") if is_navigational_format?
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

end
