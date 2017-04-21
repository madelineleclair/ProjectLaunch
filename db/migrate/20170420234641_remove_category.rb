class RemoveCategory < ActiveRecord::Migration
  def change
    remove_column :projects, :category
    add_column :projects, :category, :string, null: false
  end
end
