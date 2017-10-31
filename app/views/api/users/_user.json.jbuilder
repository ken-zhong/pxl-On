json.username user.username
json.id user.id

json.numFollowers user.followers.length
json.numFollowing user.followees.length

if user.profile_photo
  json.profilePhotoUrl asset_path(user.profile_photo.image.url(:thumb))
end

if user.cover_photo
  json.coverPhotoUrl asset_path(user.cover_photo.image.url(:large))
end

if current_user
  json.isFollowing user.followers.any? { |f| f.id == current_user.id }
else
  #  how to handle else case? We'll try just not show the isFollowing property.
  # json.isFollowing 'disabled'
end
