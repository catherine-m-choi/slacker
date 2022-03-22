class AddColumnsToConversations < ActiveRecord::Migration[5.2]
  def change
    add_column :conversations, :name, :string
    add_column :conversations, :topic, :string
    add_column :conversations, :purpose, :string
  end
end
