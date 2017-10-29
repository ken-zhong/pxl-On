json.username @user.username
json.id @user.id

if @user.profile_photo
  json.profilePhotoUrl asset_path(@user.profile_photo.image.url(:thumb))
end

if @user.cover_photo
  json.coverPhotoUrl asset_path(@user.cover_photo.image.url(:large))
end
