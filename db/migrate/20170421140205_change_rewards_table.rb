class ChangeRewardsTable < ActiveRecord::Migration
  def change
    remove_column :rewards, :deliver_date
    add_column :rewards, :delivery_date, :date, null: false
    remove_index :rewards, :project_id
    add_index :rewards, :title, unique: true
  end
end
