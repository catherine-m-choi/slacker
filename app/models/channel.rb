# == Schema Information
#
# Table name: channels
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  topic       :string
#  description :string
#  founder_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Channel < ApplicationRecord
  has_many :messages, as: :messageable
  has_many :channel_memberships
  has_many :members, through: :channel_memberships, source: :user
end
