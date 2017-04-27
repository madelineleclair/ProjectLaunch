# == Schema Information
#
# Table name: stories
#
#  id                   :integer          not null, primary key
#  project_id           :integer          not null
#  description          :text             not null
#  risks_and_challenges :text
#  created_at           :datetime
#  updated_at           :datetime
#

class Story < ActiveRecord::Base

  validates :project, :description, presence: true
  has_attached_file :image, default_url: "missing_picture.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :project
end




# has_attached_file :video, default_url: "missing_picture.png"
