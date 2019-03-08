Rails.application.routes.draw do
  root 'games#index'

resources :games do
  resources :characters do
  end
end
  get 'characters/index'
  get 'games/index'
  post 'games/new', to: 'games#form'  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
