# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  username               :string
#  email                  :string           not null
#  password_digest        :string           not null
#  session_token          :string           not null
#  title                  :string
#  phone                  :string
#  skype                  :string
#  display_name           :string
#  status_text            :string
#  status_emoji           :string
#  status_expiration      :datetime
#  profile_picture_url    :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  confirmation_token     :string
#  confirmed_at           :datetime
#  confirmation_sent_at   :datetime
#  provider               :string
#  uid                    :string
#
class User < ApplicationRecord
  
  # For google auth
  devise :registerable, :recoverable, :rememberable
  devise :omniauthable, :omniauth_providers => [:google_oauth2]
  
  # For user auth (not using devise for non-google log in)
  attr_reader :password
  
  # Validations
  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP } 
  validates :password_digest, presence: { message: 'Password can\'t be blank' }
  validates :password, length: {minimum: 8, allow_nil: true}

  # Associations
  has_many :messages, inverse_of: 'user'
  has_many :saved_messages
  has_many :conversation_memberships
  has_many :conversations, through: :conversation_memberships, source: :conversation
  has_many :channel_memberships
  has_many :channels, through: :channel_memberships, source: :channel

  after_initialize :ensure_session_token!

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end
  
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token!
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def self.from_omniauth(auth)
    User.where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0, 20]
      user.display_name = auth.info.name   # assuming the user model has a name
      # user.image = auth.info.image # assuming the user model has an image
      # user.skip_confirmation!
    end
  end

  def self.new_with_session(params, session)
    super.tap do |user|
      if data = session["devise.google_oauth2_data"] && session["devise.google_oauth2_data"]["extra"]["raw_info"]
        user.email = data["email"] if user.email.blank?
      end
    end
  end

  def add_default_channels
    default_channels = [
      Channel.find_by(name: "general"),
      Channel.find_by(name: "friday-hangouts"),
      Channel.find_by(name: "adorable-pets"),
      Channel.find_by(name: "memes"),
      Channel.find_by(name: "dunder-mifflin"),
      Channel.find_by(name: "pawnee-rocks"),
      Channel.find_by(name: "eagleton-sucks"),
    ]

    default_channels.each do |channel|
      ChannelMembership.create!(
        user_id: self.id,
        channel_id: channel.id
      )
    end
  end

  def add_default_convo
    if !self.profile_picture_url 
      self.profile_picture_url = "	https://templesinaidc.org/wp-content/uploads/sites/57/2019/12/gray-square.jpg"
    end
    
    @convo = Conversation.create()
    @catbot = User.find_by(username: 'cat_bot')

    ConversationMembership.create!(
      user_id: self.id,
      conversation_id: @convo.id
    )

    ConversationMembership.create!(
      user_id: @catbot.id,
      conversation_id: @convo.id
    )
    
    Message.create(
      user_id: @catbot.id,
      body: "Welcome to Slacker! To begin, type a message in the chat.",
      messageable_type: 'Conversation',
      messageable_id: @convo.id,
      parent_message_id: nil
    )

    Message.create(
      user_id: @catbot.id,
      body: "You can send a gif by typing in '/giphy' followed by text in the chat box.  ",
      messageable_type: 'Conversation',
      messageable_id: @convo.id,
      parent_message_id: nil
    )

    Message.create(
      user_id: @catbot.id,
      body: "To edit your profile details, click on your profile button on the upper right corner of the screen.",
      messageable_type: 'Conversation',
      messageable_id: @convo.id,
      parent_message_id: nil
    )
  end
  
end
