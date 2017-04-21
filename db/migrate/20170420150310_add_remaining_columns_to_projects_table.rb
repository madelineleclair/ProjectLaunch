class AddRemainingColumnsToProjectsTable < ActiveRecord::Migration
  def change
    add_column :projects, :title, :string, default: 'untitled'
    add_column :projects, :image_url, :string
    add_column :projects, :description, :text
    add_column :projects, :location, :string
    add_column :projects, :goal, :integer
    add_column :projects, :launch, :boolean
    add_column :projects, :launch_date, :date
    add_column :projects, :duration, :integer
  end
end
