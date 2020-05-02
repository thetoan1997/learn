Rails.application.routes.draw do
  get 'page/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'page#index'

  get 'page/dynamic_show', to: 'page#dynamic_show', as: "article"
end
