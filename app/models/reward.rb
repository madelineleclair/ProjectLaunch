# == Schema Information
#
# Table name: rewards
#
#  id               :integer          not null, primary key
#  project_id       :integer          not null
#  title            :string           not null
#  pledge_amount    :integer          default("0"), not null
#  description      :text             not null
#  number_available :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  delivery_date    :date             not null
#

class Reward < ActiveRecord::Base
  validates :project, :title, :pledge_amount, :description, :delivery_date,
    presence: true
    validates :title, uniqueness: true

  belongs_to :project
  has_many :contributions
end
