# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  title       :string           default("untitled")
#  image_url   :string
#  description :text
#  location    :string
#  goal        :integer
#  launch      :boolean          default("false")
#  launch_date :date
#  duration    :integer
#  category    :string           not null
#

class Project < ActiveRecord::Base
  validates :category, :user, presence: true
  validates :category, inclusion: %w(Untitled Technology Food Games)

  belongs_to :user
  has_one :story
  has_many :rewards
end
