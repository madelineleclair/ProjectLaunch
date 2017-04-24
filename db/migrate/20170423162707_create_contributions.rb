class CreateContributions < ActiveRecord::Migration
  def change
    create_table :contributions do |t|
      t.integer :project_id, null: false
      t.integer :user_id, null: false
      t.integer :amount, null: false
      t.integer :reward_id
      t.timestamps
    end
    add_index :contributions, :project_id
    add_index :contributions, :user_id
  end
end
