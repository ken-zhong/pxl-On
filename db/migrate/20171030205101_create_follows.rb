class CreateFollows < ActiveRecord::Migration[5.1]
  def change
    create_table :follows do |t|
      t.integer :follower_id, null: false
      t.integer :following_id, null: false

      t.timestamps
    end
  end
end
