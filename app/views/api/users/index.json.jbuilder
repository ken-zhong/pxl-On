@users.each do |user|
  json.set! user.username do
    json.partial! 'api/users/user', user: user
  end
end
