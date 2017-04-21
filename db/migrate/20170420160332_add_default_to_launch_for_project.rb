class AddDefaultToLaunchForProject < ActiveRecord::Migration
  def change
    change_column :projects, :launch, :boolean, default: false
  end
end
