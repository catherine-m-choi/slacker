class ConversationMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :conversation_memberships do |t|
      t.references :user, foreign_key: true, null: false 
      t.references :conversation, foreign_key: true, null: false 
      
      t.timestamps
    end
  end
end
