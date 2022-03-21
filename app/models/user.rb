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
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable

  devise :registerable,
          :recoverable, :rememberable, :confirmable
  devise :omniauthable, :omniauth_providers => [:google_oauth2]

  attr_reader :password
  
  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP } 
  validates :password_digest, presence: { message: 'Password can\'t be blank' }
  validates :password, length: {minimum: 8, allow_nil: true}

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

  # For oauth
  # def self.find_or_create_by_google_oauth(auth)
  #   user = User.where(:provider => auth.provider, :uid => auth.uid).first

  #   unless user
  #     user = User.create!(
  #     provider: auth.provider,
  #     uid: auth.uid,
  #     email: auth.info.email,
  #     password: Devise.friendly_token[0,20]
  #   )
  #   end

  #   user
  # end

  def self.from_omniauth(auth)
    User.where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0, 20]
      user.display_name = auth.info.name   # assuming the user model has a name
      # user.image = auth.info.image # assuming the user model has an image
      # If you are using confirmable and the provider(s) you use validate emails, 
      # uncomment the line below to skip the confirmation emails.
      user.skip_confirmation!
    end
  end

  def self.new_with_session(params, session)
    super.tap do |user|
      if data = session["devise.google_oauth2_data"] && session["devise.google_oauth2_data"]["extra"]["raw_info"]
        user.email = data["email"] if user.email.blank?
      end
    end
  end

end
