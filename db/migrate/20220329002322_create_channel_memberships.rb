class CreateChannelMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :channel_memberships do |t|
      t.references :user, foreign_key: true, null: false 
      t.references :channel, foreign_key: true, null: false 

      t.timestamps
    end
  end
end
