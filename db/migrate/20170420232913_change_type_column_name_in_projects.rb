class ChangeTypeColumnNameInProjects < ActiveRecord::Migration
  def change
    rename_column :projects, :type, :category
  end
end
