Rails.application.routes.draw do
  devise_for :users
	resources :jankens do
		collection do
			get 'tables'
			get 'battle'
		end
	end
	root 'jankens#index'
end
