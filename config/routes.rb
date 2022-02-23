Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users
  get 'home/index'
  root "home#map_page"
# get "/articles", to: "articles#index"
  get 'item/page' => 'home#item_page'
  get 'profile/page' => 'home#profile_page'
  get 'map/page' => 'home#map_page'
end
