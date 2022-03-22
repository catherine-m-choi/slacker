Rails.application.routes.draw do
  # For omniauth
  devise_for :users, :controllers => { :omniauth_callbacks => "omniauth_callbacks" }
  # devise_scope :user do
  #   delete 'sign_out', :to => 'devise/sessions#destroy', :as => :destroy_user_session
  # end

  root :to => "static_pages#root"
  namespace :api, defaults: {format: :json} do 
    resources :users, only: :create
    resource :session, only: [:create, :destroy]
    resource :messages, only: [:create, :update, :destroy]
  end
end
