class CreateProjectTable < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.text :description
      t.string :location
      t.integer :goal, default: 1
      t.date :launch_date
      t.integer :duration
      t.string :category, null: false
      t.boolean :launch, default: false
      t.timestamps
    end
  end
end
