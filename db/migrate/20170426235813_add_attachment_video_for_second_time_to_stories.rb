class AddAttachmentVideoForSecondTimeToStories < ActiveRecord::Migration
  def self.up
    change_table :stories do |t|
      t.attachment :video
    end
  end

  def self.down
    remove_attachment :stories, :video
  end
end
