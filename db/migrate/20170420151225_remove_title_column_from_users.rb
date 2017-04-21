class RemoveTitleColumnFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :title
  end
end
