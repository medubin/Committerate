class CreateActivityLogs < ActiveRecord::Migration[5.1]
  def change
    create_table :activity_logs do |t|
      t.integer :activity_id, null: false
      t.timestamps
    end
  end
end
