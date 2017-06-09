class CreateActivities < ActiveRecord::Migration[5.1]
  def change
    create_table :activities do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.string :description, null: false
      t.integer :value, null: false
      t.boolean :active, null: false, default: true
      t.timestamps
    end
  end
end
