Rails.application.routes.draw do
  # For omniauth
  devise_for :users, :controllers => { :omniauth_callbacks => "omniauth_callbacks" }
  
  # To listen for WebSocket requests
  mount ActionCable.server => '/cable'
  root :to => "static_pages#root"
  
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:index, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :messages, only: [:index, :create, :update, :destroy]
    resources :saved_messages, only: [:index, :create, :destroy]
    resources :conversations, only: [:index, :create, :update, :destroy]
    resources :conversation_memberships, only: [:create, :destroy]
    resources :channels, only: [:index, :create, :update, :destroy]
    resources :channel_memberships, only: [:create, :destroy]
  end
  
end
