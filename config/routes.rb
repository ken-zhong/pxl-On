Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :user, only: [:create, :show, :index]
    resources :photos, only: [:create, :show, :update, :destroy, :index]
    resource :session, only: [:create, :destroy]
  end

  root 'static_pages#root'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
