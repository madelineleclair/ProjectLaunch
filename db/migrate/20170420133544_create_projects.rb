class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :type, null: false
      t.integer :user_id, null: false 
      t.timestamps null: false
    end
  end
end
