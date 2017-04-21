class CreateRewardsTable < ActiveRecord::Migration
  def change
    create_table :rewards do |t|
      t.integer :project_id, null: false
      t.string :title, null: false
      t.integer :pledge_amount, null: false
      t.text :description, null: false
      t.date :deliver_date, null: false
      t.integer :number_available
      t.timestamps null: false
    end
    add_index :rewards, :project_id, unique: true
  end
end
