class CreateStoriesTable < ActiveRecord::Migration
  def change
    create_table :stories do |t|
      t.integer :project_id, null: false
      t.string :video_url, null: false
      t.text :description, null: false
      t.text :risks_and_challenges
      t.timestamps
    end
    add_index :stories, :project_id
  end
end
