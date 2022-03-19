class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, index: {unique: true}
      t.string :email, null: false, index: {unique: true}
      t.string :password_digest, null: false
      t.string :session_token, null: false, index: {unique: true}
      t.string :title
      t.string :phone
      t.string :skype
      t.string :display_name
      t.string :status_text
      t.string :status_emoji
      t.datetime :status_expiration
      t.string :profile_picture_url

      t.timestamps
    end
  end
end
