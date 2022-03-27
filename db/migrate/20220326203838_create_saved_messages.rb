class CreateSavedMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :saved_messages do |t|
      t.references :user, foreign_key: true, null: false 
      t.references :message, foreign_key: true, null: false 
      
      t.timestamps
    end
  end
end
