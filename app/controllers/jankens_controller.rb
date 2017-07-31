class JankensController < ApplicationController
	def index
	end

	def tables
		@users = User.all.shuffle
		@total_users = User.all
	end

	def battle
	end
end
