class AddProfileColumnsToUserTables < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :profile_picture, :integer
    add_column :users, :profile_cover, :integer
  end
end
