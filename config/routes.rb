Rails.application.routes.draw do
  scope "(:locale)", locale: /#{I18n.available_locales.join("|")}/ do
    resources :products
    get 'fun', to: 'fun#index'
    get 'react', to: 'react#index'
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'fun#index'
end
