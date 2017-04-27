class RemoveVideoAttachmentFromStories < ActiveRecord::Migration
  def change
    remove_attachment :stories, :video
  end
end
