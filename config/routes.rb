Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :user, only: [:create, :show, :index] do
      resources :photos, only: [:index]
      member do
        patch 'follow'
        delete 'unfollow'
      end
    end
    resources :photos, only: [:create, :show, :update, :destroy, :index]
    resource :session, only: [:create, :destroy]

    # get "/photos/users/:username" => "photos#user_index", as: "photos_user"
  end

  root 'static_pages#root'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
