Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users
  root "home#sitemap"
  resources :collections
  resources :items
  get 'home' => 'home#sitemap'
  get 'users/loged_profile' => 'users#profile'

end
