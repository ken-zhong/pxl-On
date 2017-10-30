class ChangeAssociationWithCoverPhotos < ActiveRecord::Migration[5.1]
  def change
      remove_column :users, :profile_picture_id
      remove_column :users, :profile_cover_id
      add_column :photos, :author_profile_id, :integer
      add_column :photos, :author_cover_id, :integer
  end
end
