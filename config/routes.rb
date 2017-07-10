Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show]
    resources :activities, only: [:create, :show, :index]
    resources :activity_logs, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy, :show]
    resource :activity_stats, only: [:show]

    resource :user, only: [:create]
  end

  root "static_pages#root"
  get '*path', to: 'static_pages#root'
end
