Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get 'fun', to: 'fun#index'
  root 'fun#index'
end
