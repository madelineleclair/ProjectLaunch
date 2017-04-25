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

  validates :project, :description, presence: true
  has_attached_file :video
  validates_attachment_content_type :video, content_type: /\Avideo\/.*\Z/

  belongs_to :project
end




# has_attached_file :video, default_url: "missing_picture.png"
