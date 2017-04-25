class ChangeLaunchDateColumn < ActiveRecord::Migration
  def change
    change_column :projects, :launch_date, :datetime
  end
end
