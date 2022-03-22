Rails.application.routes.draw do
  # For omniauth
  devise_for :users, :controllers => { :omniauth_callbacks => "omniauth_callbacks" }
  
  # To listen for WebSocket requests
  mount ActionCable.server => '/cable'

  root :to => "static_pages#root"
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:index, :create]
    resource :session, only: [:create, :destroy]
    resources :messages, only: [:index, :create, :update, :destroy]
  end
end
