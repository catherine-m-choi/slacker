class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.references :user, foreign_key: true, null: false
      t.text :body, null: false
      t.references :messageable, polymorphic: true, null: false
      t.integer :parent_message_id, index: true

      t.timestamps
    end
  end
end
