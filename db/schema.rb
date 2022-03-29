# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_03_29_002322) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channel_memberships", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "channel_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["channel_id"], name: "index_channel_memberships_on_channel_id"
    t.index ["user_id"], name: "index_channel_memberships_on_user_id"
  end

  create_table "channels", force: :cascade do |t|
    t.string "name", null: false
    t.string "topic"
    t.string "description"
    t.integer "founder_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_channels_on_name", unique: true
  end

  create_table "conversation_memberships", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "conversation_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["conversation_id"], name: "index_conversation_memberships_on_conversation_id"
    t.index ["user_id"], name: "index_conversation_memberships_on_user_id"
  end

  create_table "conversations", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.string "topic"
    t.string "purpose"
  end

  create_table "messages", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.text "body", null: false
    t.string "messageable_type", null: false
    t.bigint "messageable_id", null: false
    t.integer "parent_message_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "pinned"
    t.integer "pinner_id"
    t.index ["messageable_type", "messageable_id"], name: "index_messages_on_messageable_type_and_messageable_id"
    t.index ["parent_message_id"], name: "index_messages_on_parent_message_id"
    t.index ["user_id"], name: "index_messages_on_user_id"
  end

  create_table "saved_messages", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "message_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["message_id"], name: "index_saved_messages_on_message_id"
    t.index ["user_id"], name: "index_saved_messages_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "title"
    t.string "phone"
    t.string "skype"
    t.string "display_name"
    t.string "status_text"
    t.string "status_emoji"
    t.datetime "status_expiration"
    t.string "profile_picture_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "provider"
    t.string "uid"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "channel_memberships", "channels"
  add_foreign_key "channel_memberships", "users"
  add_foreign_key "conversation_memberships", "conversations"
  add_foreign_key "conversation_memberships", "users"
  add_foreign_key "messages", "users"
  add_foreign_key "saved_messages", "messages"
  add_foreign_key "saved_messages", "users"
end
