require 'faker'

User.destroy_all
Follow.destroy_all
Photo.destroy_all

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#  USERS
users = [
  User.create({username: 'demo_user', password: 'starwars'}),
  User.create({username: 'Meepo', password: 'password123'}),
  User.create({username: 'Voldemort', password: 'password123'}),
  User.create({username: 'Fido', password: 'password123'}),
  User.create({username: 'Cheeseburger', password: 'password123'}),
  User.create({username: 'Krabby', password: 'password123'}),
  User.create({username: 'Kennen', password: 'password123'}),
  User.create({username: 'Zoidberg', password: 'password123'}),
  User.create({username: 'Neo', password: 'password123'}),
  User.create({username: 'Elsa', password: 'password123'}),
  User.create({username: 'Moana', password: 'password123'}),
  User.create({username: 'Mulan', password: 'password123'}),
  User.create({username: 'Pikachu', password: 'password123'}),
  User.create({username: 'Squirtle', password: 'password123'}),
  User.create({username: 'Megatron', password: 'password123'})
]

# FOLLOWS
for i in (0...users.length) do
  for j in (i+1...users.length) do
    if rand(0..11) > 3
      Follow.create({
        follower_id: users[i].id,
        following_id: users[j].id
        })
    end
    if rand(0..11) > 3
      Follow.create({
        follower_id: users[j].id,
        following_id: users[i].id
        })
    end
  end
end

# PROFILE AND COVER PHOTO SEEDS
users.each_with_index do |user, idx|
  profile = File.open("app/assets/images/_PXL_SEEDS/profile/photo#{idx}.jpg")
  Photo.create({
      title: 'profile_pic_id#835612',
      author_id: user.id,
      author_profile_id: user.id,
      image: profile
  })
  cover = File.open("app/assets/images/_PXL_SEEDS/cover/cover#{idx}.jpg")
  Photo.create({
    title: Faker::GameOfThrones.city,
    description: Faker::HarryPotter.quote,
    author_id: user.id,
    author_cover_id: user.id,
    image: cover
    })
end

users.each_with_index do |user, idx|
  cover = File.open("app/assets/images/_PXL_SEEDS/batch1/p#{idx}.jpg")
  Photo.create({
    title: Faker::Friends.location,
    description: Faker::Friends.quote,
    author_id: user.id,
    author_cover_id: user.id,
    image: cover
    })
end

users.each_with_index do |user, idx|
  cover = File.open("app/assets/images/_PXL_SEEDS/batch2/p#{idx}.jpg")
  Photo.create({
    title: Faker::Team.state,
    description: Faker::Friends.quote,
    author_id: user.id,
    author_cover_id: user.id,
    image: cover
    })
end

users.each_with_index do |user, idx|
  cover = File.open("app/assets/images/_PXL_SEEDS/batch2/p#{idx}.jpg")
  Photo.create({
    title: Faker::Team.state,
    description: Faker::Simpsons.quote,
    author_id: user.id,
    author_cover_id: user.id,
    image: cover
    })
end

# Photo.new({
#     title: Faker::Team.state,
#     description: Faker::StarWars.quote
#     author_id:
#     image:
# })
