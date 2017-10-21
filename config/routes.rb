Rails.application.routes.draw do
  namespace :api do
    get 'session/new'
  end

  namespace :api do
    get 'session/create'
  end

  namespace :api do
    get 'session/destroy'
  end

  get 'session/new'

  get 'session/create'

  get 'session/destroy'

  get 'user/new'

  get 'user/create'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
