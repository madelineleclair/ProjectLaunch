# == Schema Information
#
# Table name: stories
#
#  id                   :integer          not null, primary key
#  project_id           :integer          not null
#  video_url            :string           not null
#  description          :text             not null
#  risks_and_challenges :text
#  created_at           :datetime
#  updated_at           :datetime
#

class Story < ActiveRecord::Base

  validates :project, :video_url, :description, presence: true

  belongs_to :project
end
