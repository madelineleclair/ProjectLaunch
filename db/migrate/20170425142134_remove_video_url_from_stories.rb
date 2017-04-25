class RemoveVideoUrlFromStories < ActiveRecord::Migration
  def change
    remove_column :stories, :video_url
  end
end
