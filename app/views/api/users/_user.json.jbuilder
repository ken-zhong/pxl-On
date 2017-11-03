json.username user.username
json.id user.id

json.numFollowers user.followers.length
json.numFollowing user.followees.length

json.thumbnails user.photos.reject {|photo| photo.title == 'profile_pic_id#835612'}
  .map { |photo| asset_path(photo.image.url(:thumb)) }

if user.profile_photo
  json.profilePhotoUrl asset_path(user.profile_photo.image.url(:thumb))
end

if user.cover_photo
  json.coverPhotoUrl asset_path(user.cover_photo.image.url)
end

if current_user
  json.isFollowing user.followers.any? { |f| f.id == current_user.id }
else
  #  how to handle else case? We'll try just not show the isFollowing property.
  # json.isFollowing 'disabled'
end

json.followers user.followers.map { |user| user.username }
json.following user.followees.map { |user| user.username }
json.photos user.photos.reject { |photo| photo.title == 'profile_pic_id#835612' }
  .map {|photo| photo.id }
