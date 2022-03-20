# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.destroy_all

# Test user
User.create(
  username: 'this_is_cat',
  email: 'fake_cat23@gmail.com',
  password: "password",
  title: 'Software Engineer',
  phone: '6464163937',
  skype: nil,
  display_name: 'Catherine C',
  status_text: nil,
  status_expiration: nil,
  profile_picture_url: nil
)
