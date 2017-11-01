json.extract! @follow, :id, :follower_id, :following_id
json.follower @follow.follower.username
json. followee @follow.followee.username
