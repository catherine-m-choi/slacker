class ApplicationController < ActionController::Base
  helper_method :current_user, :require_logged_in, :logged_in?
  
  # CRLLL
  def current_user
    @current_user = User.find_by(session_token: session[:session_token]) 
  end

  def require_logged_in
    redirect_to new_session_url unless logged_in?
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def after_sign_in_path_for(resource)
    stored_location_for(resource) ||
      if resource.is_a?(User)
        '#/welcome'
      else
        super
      end
  end
end
