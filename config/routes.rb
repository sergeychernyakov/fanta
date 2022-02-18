Rails.application.routes.draw do

  devise_for :users
  root to: 'home#index'
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get 'item/page' => 'home#item_page'
  get 'profile/page' => 'home#profile_page'
  get 'map/page' => 'home#map_page'

end
