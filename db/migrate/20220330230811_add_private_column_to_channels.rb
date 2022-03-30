class AddPrivateColumnToChannels < ActiveRecord::Migration[5.2]
  def change
    add_column :channels, :private, :boolean
  end
end
