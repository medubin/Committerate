Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show]
    resources :activities, only: [:create, :show, :index]
    resources :activity_logs, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy, :show]

    resource :user, only: [:create]
  end

  root "static_pages#root"
end
