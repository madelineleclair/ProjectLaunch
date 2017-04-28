class AddColumnsToContributions < ActiveRecord::Migration
  def change
    add_column :contributions, :name, :string, null: false
    add_column :contributions, :email_address, :string, null: false
  end
end
