Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users
  get 'home/index'
  root "home#home_page"
# get "/articles", to: "articles#index"
  get 'home/item_detail' => 'home#item_page'
  get 'home/profile' => 'home#profile'
  get 'home/loged_profile' => 'home#loged_profile'
  get 'home/other_user_profile' => 'home#other_user_profile'
  get 'home/sitemap' => 'home#site_map'
  get 'home/newitem' => 'home#create_item'
  get 'home/custom-nft-qoute' => 'home#custom-nft-qoute'
  get 'home/collection' => 'home#explore_collection'
  get 'home/home_page' => 'home#home_page'
  get 'home/home2_page' => 'home#home2_page'
  get 'home/item_sell_page' => 'home#sell_item'
  get 'home/buy-item' => 'home#buy_item'
  get 'home/innerpage' => 'home#inner_page'

end
