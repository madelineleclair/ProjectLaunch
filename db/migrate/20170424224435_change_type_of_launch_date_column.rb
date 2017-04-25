class ChangeTypeOfLaunchDateColumn < ActiveRecord::Migration
  def change
    remove_column :projects, :launch_date
    add_column :projects, :launch_date, :datetime
  end
end
