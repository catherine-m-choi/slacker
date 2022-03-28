class AddColumnsToMessagesTable < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :pinned, :boolean
    add_column :messages, :pinner_id, :integer
  end
end
