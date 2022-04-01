# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'faker'

SavedMessage.destroy_all
Message.destroy_all
ConversationMembership.destroy_all
ChannelMembership.destroy_all
User.destroy_all
Conversation.destroy_all
Channel.destroy_all

# Test user
user1 = User.create(
  display_name: 'Catherine Choi',
  username: 'this_is_cat',
  email: 'fake_cat23@gmail.com',
  password: "password",
  title: 'Software Engineer',
  phone: Faker::PhoneNumber.phone_number,
  skype: nil,
  status_text: nil,
  status_expiration: nil,
  profile_picture_url: 'https://cdn.britannica.com/60/176360-050-33D949F8/oil-Catherine-II-canvas-collection-Richard-Brompton-1782.jpg?w=400&h=300&c=crop'
)

catbot = User.create(
  display_name: 'CatBot 🐈',
  username: 'cat_bot',
  email: 'catbot3@gmail.com',
  password: "password",
  title: 'Catbot',
  phone: Faker::PhoneNumber.phone_number,
  skype: nil,
  status_text: nil,
  status_expiration: nil,
  profile_picture_url: 'https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg'
)

# Users
users_arr = [
  ["Leslie Knope", "https://media.glamour.com/photos/569580c38fa134644ec26260/master/pass/entertainment-2015-01-leslie-knope-final-season-main.jpg"],
  ["Ann Perkins", "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Ann-Perkins.Parks-and-Recreation.webp"],
  ["Mark Brendanawicz", "https://upload.wikimedia.org/wikipedia/en/2/21/Mark_Brendanawicz.jpg"],
  ["Tom Haverford", "https://miro.medium.com/max/395/0*UdAfgfjdNZIEKS2t."],
  ["Ron Swanson", "https://parade.com/wp-content/uploads/2013/10/tv-show-best-boss-ron-swanson.jpg"],
  ["April Ludgate", "https://screenqueens.files.wordpress.com/2015/03/tumblr_my4j1vm0o41rdh9azo1_1280.png"],
  ["Andy Dwyer", "https://upload.wikimedia.org/wikipedia/en/4/47/Andy_Dwyer.jpg"],
  ["Ben Wyatt", "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Ben_Wyatt_Parks_%26_Rec.jpg/235px-Ben_Wyatt_Parks_%26_Rec.jpg"],
  ["Chris Traeger", "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Chris_Traeger.jpg/218px-Chris_Traeger.jpg"],
  ["Jerry Gergich", "https://pbs.twimg.com/profile_images/680824297137410048/-iBqt7T8_400x400.jpg"],
  ["Donna Meagle", "https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Donna_Meagle.jpg/250px-Donna_Meagle.jpg"],
  ["Craig Middlebrooks", "https://www.personality-database.com/profile_images/3955.png"],
  ["Li'l Sebastian", "https://hips.hearstapps.com/esq.h-cdn.co/assets/15/08/1424204090-tumblr_m4g0ddotsx1qa1w9bo1_1280.jpg"],
  ["Michael Scott", "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/MichaelScott.png/220px-MichaelScott.png"],
  ["Dwight Schrute", "https://upload.wikimedia.org/wikipedia/en/c/cd/Dwight_Schrute.jpg"],
  ["Jim Halpert", "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Jim-halpert.jpg/220px-Jim-halpert.jpg"],
  ["Pam Beesly", "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Pam_Beesley.jpg/220px-Pam_Beesley.jpg"],
  ["Ryan Howard", "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Ryan_Howard_%28The_Office%29.jpg/235px-Ryan_Howard_%28The_Office%29.jpg"],
  ["Stanley Hudson", "https://static3.srcdn.com/wordpress/wp-content/uploads/2020/03/stanely-feature-the-office.jpg"],
  ["Kevin Malone", "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Office-1200-baumgartner1.jpg/260px-Office-1200-baumgartner1.jpg"],
  ["Meredith Palmer", "https://pm1.narvii.com/6410/8b11643ddcc8f5b3b21973e35d120ee3b856dd0b_00.jpg"],
  ["Angela Martin", "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Angela_Martin.jpg/220px-Angela_Martin.jpg"],
  ["Oscar Martinez", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc9v3lcGAR3YFVN-iv3TSEayeVXMN7Y-SEekUXlbLBN6cEnOij463_7bUZxRpgoQjbDY8&usqp=CAU"],
  ["Phyllis Vance", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Phyllis_Smith_FOX_2_St._Louis.JPG/478px-Phyllis_Smith_FOX_2_St._Louis.JPG"],
  ["Roy Anderson", "https://imagez.tmz.com/image/a0/4by3/2020/04/27/a07eb48dbe8241f5b7fac25f718e0145_md.jpg"],
  ["Jan Levinson", "https://static0.srcdn.com/wordpress/wp-content/uploads/2019/11/THE-OFFICE-Jan.jpg"],
  ["Toby Flenderson", "https://pbs.twimg.com/profile_images/885011848608788483/lwli79kw_400x400.jpg"],
  ["Kelly Kapoor", "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Kelly_Kapoor.jpg/220px-Kelly_Kapoor.jpg"],
  ["Andy Bernard", "https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Andy_Bernard_photoshot.jpg/250px-Andy_Bernard_photoshot.jpg"],
  ["Creed Bratton", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Creed_Bratton_2019_%2848474439927%29_CROPPED.jpg/220px-Creed_Bratton_2019_%2848474439927%29_CROPPED.jpg"],
  ["Darryl Philbin", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Craig_Robinson_WonderCon_2013.jpg/800px-Craig_Robinson_WonderCon_2013.jpg"],
  ["Erin Hannon", "https://upload.wikimedia.org/wikipedia/en/9/93/Erin_Hannon.jpg"],
  ["Gabe Lewis", "https://alchetron.com/cdn/gabe-lewis-39b2bc0a-8a55-458c-a7dd-66108e9b747-resize-750.jpeg"],
  ["Holly Flax", "https://upload.wikimedia.org/wikipedia/en/f/f4/Hollytheoffice.jpg"],
  ["Robert California", "https://upload.wikimedia.org/wikipedia/en/b/b1/James-spader-as-robert-california-in-the-office.jpg"],
  ["Nellie Bertram", "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Nellie_Bertram.jpg/240px-Nellie_Bertram.jpg"],
  ["Clark Green", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Clark_Duke_at_WonderCon_2010.jpg/220px-Clark_Duke_at_WonderCon_2010.jpg"],
  ["Pete Miller", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Jake_Lacy_at_TCA_2010.jpg/640px-Jake_Lacy_at_TCA_2010.jpg"],
  ["David Wallace", "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/David_Wallace_%28The_Office%29.jpg/250px-David_Wallace_%28The_Office%29.jpg"],
  ["Deangelo Vickers", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/WillFerrellMay09.jpg/150px-WillFerrellMay09.jpg"],
  ["Jo Bennett", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Kathy_Bates_by_Gage_Skidmore.jpg/180px-Kathy_Bates_by_Gage_Skidmore.jpg"],
  ["Charles Miner", "https://upload.wikimedia.org/wikipedia/commons/3/39/Idris_Elba-4764_%28cropped%29.jpg"],
  ["Karen Filippelli", "https://upload.wikimedia.org/wikipedia/commons/3/3c/Rashida_Jones_2017_%28cropped%29.jpg"],
  ["Todd Packer", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_Koechner_%2811024155545%29.jpg/220px-David_Koechner_%2811024155545%29.jpg"],
]

users_arr.each do |user_sub_arr| 
  User.create!(
    display_name: user_sub_arr[0],
    username: Faker::Internet.username,
    email: Faker::Internet.email(name: user_sub_arr[0]),
    password: "password",
    title: Faker::Job.title,
    phone: Faker::PhoneNumber.phone_number,
    skype: nil,
    status_text: nil,
    status_expiration: nil,
    profile_picture_url: user_sub_arr[1]
  )
end

# Default channels that everyone subscribes to
default1 = Channel.create!(
  name: "general",
  topic: "Parks and Recreation of Dunder Mifflin ", 
  description: "This channel is for team-wide communication and announcements. All team members are in this channel.",
  founder_id: User.first.id,
)

default2 = Channel.create!(
  name: "friday-hangouts",
  topic: "Waffles", 
  description: "This channel is for planning friday night hangouts.",
  founder_id: User.find_by(display_name: "Kelly Kapoor").id,
)

default3 = Channel.create!(
  name: "adorable-pets",
  topic: "Calling all office pets", 
  description: "This channel is for sharing cute pictures of your pets.",
  founder_id: User.find_by(display_name: "Angela Martin").id,
)

default4 = Channel.create!(
  name: "memes",
  topic: "Memememe", 
  description: "Share your best memes.",
  founder_id: User.find_by(display_name: "Tom Haverford").id,
)

default5 = Channel.create!(
  name: "dunder-mifflin",
  topic: "Go team Dunder Mifflin!", 
  description: "This channel is for staff at Dunder Mifflin Paper Company.",
  founder_id: User.find_by(display_name: "Michael Scott").id,
)

default6 = Channel.create!(
  name: "pawnee-rocks",
  topic: "Go Pawnee!", 
  description: "This channel is for lovers of all things Pawnee.",
  founder_id: User.find_by(display_name: "Leslie Knope").id,
)

default7 = Channel.create!(
  name: "eagleton-sucks",
  topic: "Need I say more", 
  description: "This channel is for everyone who feels strongly that Pawnee is superior to Eagleton.",
  founder_id: User.find_by(display_name: "Leslie Knope").id,
)

default_channels = [
  default1, 
  default2, 
  default3, 
  default4, 
  default5, 
  default6, 
  default7
]

# Setting random timestamps
default_channels.each do |channel|
  channel.created_at = Faker::Date.between(from: 3.years.ago, to: Date.today)
  channel.updated_at = channel.created_at
end

user_ids = User.pluck(:id)

# Adding messages to each channel

default_channels.each do |channel|
  [10, 13, 16, 19].sample.times do 
    Message.create(
      user_id: user_ids.sample,
      body: Faker::TvShows::MichaelScott.quote,
      messageable_type: 'Channel',
      messageable_id: channel.id,
      parent_message_id: nil,
    )
  end


  [10, 13, 16, 19].sample.times do 
    Message.create(
      user_id: user_ids.sample,
      body: Faker::TvShows::Community.quotes,
      messageable_type: 'Channel',
      messageable_id: channel.id,
      parent_message_id: nil,
    )
  end


  [10, 13, 16, 19].sample.times do 
    Message.create(
      user_id: user_ids.sample,
      body: Faker::TvShows::Friends.quote,
      messageable_type: 'Channel',
      messageable_id: channel.id,
      parent_message_id: nil,
    )
  end

end

# Adding thread replies
# default1_messages = default1.messages.pluck(:id)
# default1_parent_1 = default1_messages.sample
# default1_parent_2 = default1_messages.sample
# default1_parent_3 = default1_messages.sample
# default1_parent_4 = default1_messages.sample

# default1_parent_ids = [
#   default1_parent_1,
#   default1_parent_2,
#   default1_parent_3,
#   default1_parent_4,
# ]

default_channels.each do |channel|

  default_messages = channel.messages.pluck(:id)
  default_parent_1 = default_messages.sample
  default_parent_2 = default_messages.sample
  default_parent_3 = default_messages.sample
  default_parent_4 = default_messages.sample
  default_parent_5 = default_messages.sample
  default_parent_6 = default_messages.sample
  default_parent_7 = default_messages.sample

  default_parent_ids = [
    default_parent_1,
    default_parent_2,
    default_parent_3,
    default_parent_4,
    default_parent_5,
    default_parent_6,
    default_parent_7,
  ]
  
  [3,4,5,6].sample.times do
    Message.create(
      user_id: user_ids.sample,
      body: Faker::TvShows::MichaelScott.quote,
      messageable_type: 'Channel',
      messageable_id: channel.id,
      parent_message_id: default_parent_ids.sample,
    )
  end

  [3,4,5,6].sample.times do
    Message.create(
      user_id: user_ids.sample,
      body: Faker::TvShows::Community.quotes,
      messageable_type: 'Channel',
      messageable_id: channel.id,
      parent_message_id: default_parent_ids.sample,
    )
  end

  [3,4,5,6].sample.times do
    Message.create(
      user_id: user_ids.sample,
      body: Faker::TvShows::Friends.quote,
      messageable_type: 'Channel',
      messageable_id: channel.id,
      parent_message_id: default_parent_ids.sample,
    )
  end

  [3,4,5,6].sample.times do 
    msg = channel.messages.sample
    msg.pinned = true
    msg.pinner_id = user_ids.sample
  end
end



default_channels_ids = [
  default1.id, 
  default2.id, 
  default3.id, 
  default4.id, 
  default5.id, 
  default6.id, 
  default7.id
]

# Adding all users to default channels
User.all.each do |user|
  default_channels_ids.each do |channel_id| 
    ChannelMembership.create!(
      user_id: user.id,
      channel_id: channel_id
    )
  end
end

# Convos for demo user
convo7 = Conversation.create()
convo8 = Conversation.create()
convo1 = Conversation.create()
convo9 = Conversation.create()
convo2 = Conversation.create()
convo3 = Conversation.create()
convo4 = Conversation.create()
convo5 = Conversation.create()
convo6 = Conversation.create()

# Members for demo convo


convo1_members = [
  user1.id,
  user_ids.sample,
  user_ids.sample,
  user_ids.sample,
].uniq

convo2_members = [
  user1.id,
  user_ids.sample,
  user_ids.sample,
  user_ids.sample,
  user_ids.sample,
].uniq

convo3_members = [
  user1.id,
  user_ids.sample
].uniq

convo4_members = [
  user1.id,
  user_ids.sample,
  user_ids.sample,
  user_ids.sample,
  user_ids.sample,
  user_ids.sample,
  user_ids.sample,
].uniq

convo5_members = [
  user1.id,
  user_ids.sample,
  user_ids.sample,
].uniq

convo6_members = [
  user1.id,
  user_ids.sample,
  user_ids.sample,
  user_ids.sample,
].uniq

convo7_members = [
  user1.id,
  user_ids.sample
].uniq

convo8_members = [
  user1.id,
  user_ids.sample
].uniq

convo9_members = [
  user1.id,
  user_ids.sample
].uniq


convo1_members.each do |user_id|
  ConversationMembership.create!(
    user_id: user_id,
    conversation_id: convo1.id
  )
end  

convo2_members.each do |user_id|
  ConversationMembership.create!(
    user_id: user_id,
    conversation_id: convo2.id
  )
end  

convo3_members.each do |user_id|
  ConversationMembership.create!(
    user_id: user_id,
    conversation_id: convo3.id
  )
end  

convo4_members.each do |user_id|
  ConversationMembership.create!(
    user_id: user_id,
    conversation_id: convo4.id
  )
end  

convo5_members.each do |user_id|
  ConversationMembership.create!(
    user_id: user_id,
    conversation_id: convo5.id
  )
end  

convo6_members.each do |user_id|
  ConversationMembership.create!(
    user_id: user_id,
    conversation_id: convo6.id
  )
end  

convo7_members.each do |user_id|
  ConversationMembership.create!(
    user_id: user_id,
    conversation_id: convo7.id
  )
end  

convo8_members.each do |user_id|
  ConversationMembership.create!(
    user_id: user_id,
    conversation_id: convo8.id
  )
end  

convo9_members.each do |user_id|
  ConversationMembership.create!(
    user_id: user_id,
    conversation_id: convo9.id
  )
end  

test_convos = [
  convo1,
  convo2,
  convo3,
  convo4,
  convo5,
  convo6,
  convo7,
  convo8,
  convo9,
]

test_convos.each do |convo|
  5.times do 
    Message.create(
      user_id: convo.members.pluck(:id),
      body: Faker::TvShows::MichaelScott.quote,
      messageable_type: 'Conversation',
      messageable_id: convo.id,
      parent_message_id: nil,
    )
  end

  5.times do 
    Message.create(
      user_id: convo.members.pluck(:id),
      body: Faker::TvShows::Community.quotes,
      messageable_type: 'Conversation',
      messageable_id: convo.id,
      parent_message_id: nil,
    )
  end

  5.times do 
    Message.create(
      user_id: convo.members.pluck(:id),
      body: Faker::TvShows::Friends.quote,
      messageable_type: 'Conversation',
      messageable_id: convo.id,
      parent_message_id: nil,
    )
  end

  [2,3,4].sample.times do 
    msg = convo.messages.sample
    if (msg) 
      msg.pinned = true
      msg.pinner_id = convo.members.pluck(:id).sample
    end
    
  end

end



# Adding thread replies
convo1_messages = convo1.messages.pluck(:id)
convo1_parent_1 = convo1_messages.sample
convo1_parent_2 = convo1_messages.sample
convo1_parent_3 = convo1_messages.sample

convo1_parent_ids = [
  convo1_parent_1,
  convo1_parent_2,
  convo1_parent_3,
]

test_convos.each do |convo|
  5.times do 
    Message.create(
      user_id: convo.members.pluck(:id).sample,
      body: Faker::TvShows::MichaelScott.quote,
      messageable_type: 'Conversation',
      messageable_id: convo.id,
      parent_message_id: convo1_parent_ids.sample,
    )
  end

  5.times do 
    Message.create(
      user_id: convo.members.pluck(:id).sample,
      body: Faker::TvShows::Community.quotes,
      messageable_type: 'Conversation',
      messageable_id: convo.id,
      parent_message_id: convo1_parent_ids.sample,
    )
  end

  5.times do 
    Message.create(
      user_id: convo.members.pluck(:id).sample,
      body: Faker::TvShows::Friends.quote,
      messageable_type: 'Conversation',
      messageable_id: convo.id,
      parent_message_id: convo1_parent_ids.sample,
    )
  end
end

Message.all.each do |msg|
  msg.created_at = rand(5.days).seconds.ago
  msg.updated_at = msg.created_at
end

giphys = [
  "ANb0d49iqiDnj97j1w",
  "gIGiyaW0IZq4t0MOFX",
  "VkdsbvJeEThoA",
  "p7JlL9v8mH6Gup4EPU",
  "JuWT34QY0AodfuweLa",
  "BOzWmpTE3WNsSoGZIU",
  "W0c3xcZ3F1d0EYYb0f",
  "NiHfvQknH419ko84cf",
  "HZa5at4wXr2QcpX0SG",
  "BLxXUtWhyttI2QOMVm",
  "l396E41Lr1DMI8f04",
  "iZFdIlFIUEi0h0oCub",
  "6rAb8qljsWvANx6ij2",
  "wssDoM3tnhNfpD80hG",
  "NRcDXleOhjLmhPVM55",
  "yltGOJQBMBn7W",
  "xbH6UeGdW2LzksnNay",
  "C1tWTNs9tf70qXTJ5c",
  "eKDp7xvUdbCrC",
  # Each gif twice since too lazy to find more relevant gifs
  "ANb0d49iqiDnj97j1w",
  "gIGiyaW0IZq4t0MOFX",
  "VkdsbvJeEThoA",
  "p7JlL9v8mH6Gup4EPU",
  "JuWT34QY0AodfuweLa",
  "BOzWmpTE3WNsSoGZIU",
  "W0c3xcZ3F1d0EYYb0f",
  "NiHfvQknH419ko84cf",
  "HZa5at4wXr2QcpX0SG",
  "BLxXUtWhyttI2QOMVm",
  "l396E41Lr1DMI8f04",
  "iZFdIlFIUEi0h0oCub",
  "6rAb8qljsWvANx6ij2",
  "wssDoM3tnhNfpD80hG",
  "NRcDXleOhjLmhPVM55",
  "yltGOJQBMBn7W",
  "xbH6UeGdW2LzksnNay",
  "C1tWTNs9tf70qXTJ5c",
  "eKDp7xvUdbCrC",
]

giphys.each do |gif|
  msg = Message.all.sample
  msg.body = gif
  msg.giphy = true
  msg.save!
end