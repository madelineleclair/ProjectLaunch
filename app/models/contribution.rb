class Contribution < ActiveRecord::Base

  validates :project, :user, :reward, presence:true

  belongs_to :user
  belongs_to :project
  belongs_to :reward
end
