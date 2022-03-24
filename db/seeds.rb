# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'faker'

Message.destroy_all
ConversationMembership.destroy_all
User.destroy_all
Conversation.destroy_all

# Test user
user1 = User.create(
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

user2 = User.create(
  username: 'banana_person',
  email: 'catherine@test.com',
  password: "password",
  title: 'Banana Salesperson',
  phone: nil,
  skype: nil,
  display_name: 'Banana Bob',
  status_text: nil,
  status_expiration: nil,
  profile_picture_url: 'https://images.newscientist.com/wp-content/uploads/2019/01/31134057/gettyimages-86304874.jpg?crop=4:3,smart&width=1200&height=900&upscale=true'
)

user3 = User.create(
  username: 'hungry_caterpillar',
  email: 'hungry_caterpillar@gmail.com',
  password: "password",
  title: 'Butterfly to be',
  phone: nil,
  skype: nil,
  display_name: 'Hungry Caterpillar',
  status_text: nil,
  status_expiration: nil,
  profile_picture_url: 'https://m.media-amazon.com/images/I/7129w6n+GOL._AC_SL1500_.jpg'
)

user4 = User.create(
  username: 'Michael Scott',
  email: 'michael@scott.com',
  password: "password",
  title: 'Regional Manager',
  phone: nil,
  skype: nil,
  display_name: 'Michael Scott',
  status_text: nil,
  status_expiration: nil,
  profile_picture_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/MichaelScott.png/220px-MichaelScott.png'
)

convo1 = Conversation.create(
  name: 'My first conversation'
)

convo2 = Conversation.create()
convo3 = Conversation.create()
convo4 = Conversation.create()


Message.create(
  user_id: user1.id,
  body: "Welcome to Slack(er)! Type a message in the chat to begin",
  messageable_type: 'Conversation',
  messageable_id: convo1.id,
  parent_message_id: nil,
)

Message.create(
  user_id: user1.id,
  body: "Welcome to Slack(er)! Type a message in the chat to begin",
  messageable_type: 'Conversation',
  messageable_id: convo2.id,
  parent_message_id: nil,
)

Message.create(
  user_id: user1.id,
  body: "Welcome to Slack(er)! Type a message in the chat to begin",
  messageable_type: 'Conversation',
  messageable_id: convo3.id,
  parent_message_id: nil,
)

Message.create(
  user_id: user1.id,
  body: "Welcome to Slack(er)! Type a message in the chat to begin",
  messageable_type: 'Conversation',
  messageable_id: convo4.id,
  parent_message_id: nil,
)

Message.create(
  user_id: user2.id,
  body: "Hiiii, this is fun",
  messageable_type: 'Conversation',
  messageable_id: convo1.id,
  parent_message_id: nil,
)

Message.create(
  user_id: user3.id,
  body: "I'm a caterpillar",
  messageable_type: 'Conversation',
  messageable_id: convo1.id,
  parent_message_id: nil,
)

Message.create(
  user_id: user4.id,
  body: "I'm michael scott ~owo~ *blush*",
  messageable_type: 'Conversation',
  messageable_id: convo1.id,
  parent_message_id: nil,
)

ConversationMembership.create!(
  user_id: user1.id,
  conversation_id: convo1.id
)

ConversationMembership.create!(
  user_id: user1.id,
  conversation_id: convo2.id
)

ConversationMembership.create!(
  user_id: user1.id,
  conversation_id: convo3.id
)

ConversationMembership.create!(
  user_id: user1.id,
  conversation_id: convo4.id
)

ConversationMembership.create!(
  user_id: user2.id,
  conversation_id: convo3.id
)

ConversationMembership.create!(
  user_id: user2.id,
  conversation_id: convo4.id
)

ConversationMembership.create!(
  user_id: user3.id,
  conversation_id: convo1.id
)

ConversationMembership.create!(
  user_id: user4.id,
  conversation_id: convo1.id
)