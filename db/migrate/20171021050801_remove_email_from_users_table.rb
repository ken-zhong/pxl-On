class RemoveEmailFromUsersTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :email
  end
end
