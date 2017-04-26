# == Schema Information
#
# Table name: contributions
#
#  id         :integer          not null, primary key
#  project_id :integer          not null
#  user_id    :integer          not null
#  amount     :integer          not null
#  reward_id  :integer
#  created_at :datetime
#  updated_at :datetime
#

class Contribution < ActiveRecord::Base

  validates :project, :user, :reward, presence:true

  belongs_to :user
  belongs_to :project
  belongs_to :reward
end
