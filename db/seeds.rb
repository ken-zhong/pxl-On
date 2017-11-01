# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#  USERS
admin = User.create({username: 'admin', password: 'password123'})
User.create({username: 'demo_user', password: 'password'})
users = [
  User.find_by_username('demo_user') || User.create({username: 'demo_user', password: 'password'}),
  User.find_by_username('Ken_Zhong') || User.create({username: 'Ken_Zhong', password: 'starwars'}),
  User.find_by_username('Voldemort') || User.create({username: 'Voldemort', password: 'starwars'}),
  User.find_by_username('Fido') || User.create({username: 'Fido', password: 'starwars'}),
  User.find_by_username('Cheeseburger') || User.create({username: 'Cheeseburger', password: 'starwars'}),
  User.find_by_username('Krabby') || User.create({username: 'Krabby', password: 'starwars'})
]

# FOLLOWS
for i in (0...users.length) do
  for j in (i+1...users.length) do
    Follow.create({
      follower_id: users[i].id,
      following_id: users[j].id
    })
    Follow.create({
      follower_id: users[j].id,
      following_id: users[i].id
    })
  end
end

# PHOTO SEEDS
# Photo.create({
#     title:
#     description:
#     author_id:
#     image:
# })
