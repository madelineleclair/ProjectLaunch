# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  type        :string           not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  title       :string           default("untitled")
#  image_url   :string
#  description :text
#  location    :string
#  goal        :integer
#  launch      :boolean
#  launch_date :date
#  duration    :integer
#

class Project < ActiveRecord::Base
  validates :category, :user, presence: true
  validates :category, inclusion: %w(Untitled Technology Food)

  belongs_to :user
  has_one :story
  has_many :rewards
end
