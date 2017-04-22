class AddDefaultToPledgeAmountForRewardsTable < ActiveRecord::Migration
  def change
    change_column :rewards, :pledge_amount, :integer, default: 0, null: false
  end
end
