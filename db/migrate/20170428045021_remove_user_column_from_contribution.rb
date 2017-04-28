class RemoveUserColumnFromContribution < ActiveRecord::Migration
  def change
    remove_column :contributions, :user_id
  end
end
