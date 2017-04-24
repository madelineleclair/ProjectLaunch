class RemoveImageUrl < ActiveRecord::Migration
  def change
    remove_column :projects, :image_url
  end
end
