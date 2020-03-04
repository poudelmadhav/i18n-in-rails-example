Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/:locale/fun', to: 'fun#index'
  root 'fun#index'
  get '/:locale/react', to: 'react#index'
end
