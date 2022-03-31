class AddGiphyColumnToMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :giphy, :boolean
  end
end
