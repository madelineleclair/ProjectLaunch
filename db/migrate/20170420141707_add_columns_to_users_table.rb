class AddColumnsToUsersTable < ActiveRecord::Migration
  def change
    add_column :users, :title, :string, default: "untitled"
  end
end
