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

require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
