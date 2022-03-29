class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name, null: false, index: { unique: true}
      t.string :topic
      t.string :description
      t.integer :founder_id, null: false

      t.timestamps
    end
  end
end
