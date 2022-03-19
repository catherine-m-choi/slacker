# == Schema Information
#
# Table name: authorizations
#
#  id         :bigint           not null, primary key
#  provider   :string
#  uid        :string
#  user_id    :integer
#  token      :string
#  secret     :string
#  name       :string
#  link       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Authorization < ApplicationRecord
end
