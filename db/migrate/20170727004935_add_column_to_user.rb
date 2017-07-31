class AddColumnToUser < ActiveRecord::Migration[5.0]
  def change
  	add_column :users, :name, :string, null: false
  	add_column :users, :ticket, :integer
  	add_column :users, :text, :text
  	add_column :users, :image, :text
  end
end
