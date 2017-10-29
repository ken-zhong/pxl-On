class ModifyProfileCols < ActiveRecord::Migration[5.1]
  def change
    rename_column :users, :profile_picture, :profile_picture_id
    rename_column :users, :profile_cover, :profile_cover_id
  end
end
