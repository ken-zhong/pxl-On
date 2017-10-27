json.extract! photo, :id, :title, :description, :author_id
json.image_url asset_path(photo.image.url)
json.thumb_url asset_path(photo.image.url(:thumb))
json.preview_url asset_path(photo.image.url(:medium))
