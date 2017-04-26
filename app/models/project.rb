# == Schema Information
#
# Table name: projects
#
#  id                 :integer          not null, primary key
#  user_id            :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  title              :string           default("untitled")
#  image_url          :string
#  description        :text
#  location           :string
#  goal               :integer
#  launch             :boolean          default("false")
#  launch_date        :date
#  duration           :integer
#  category           :string           not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Project < ActiveRecord::Base
  validates :category, :user, presence: true
  validates :category, inclusion: %w(Untitled Technology Food Games)
  # validates :duration, :numericality => { less_than: 61 }
  has_attached_file :image, default_url: "missing_picture.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  # validates :description, presence: true, on: :update
  validates_presence_of :description, :location, :goal, :duration, :image,  on: :update
  # before_update :validate_description, :validate_location, :validate_goal,
  #   :validate_duration, :validate_image

  belongs_to :user
  has_one :story
  has_many :rewards
  has_many :contributions

  def validate_description
    # validate :description, presence: true
    if self.description == ""
      # errors.add(:title, "some error")
      errors[:description] << "Description can't be blank"
    end
  end

  def validate_image
    # validate :description, presence: true
    if self.image.url == ""
      # errors.add(:title, "some error")
      errors[:image] << "Image can't be blank"
    end
  end

  def validate_title
    # validate :description, presence: true
    if self.title == ""
      # errors.add(:title, "some error")
      errors[:title] << "Title can't be blank"
    end
  end

  def validate_location
    # validate :description, presence: true
    if self.location == ""
      # errors.add(:title, "some error")
      errors[:location] << "Location can't be blank"
    end
  end

  def validate_goal
    # validate :description, presence: true
    if self.goal == "" || self.goal == 0
      # errors.add(:title, "some error")
      errors[:goal] << "Goal can't be blank"
    end
  end

  def validate_duration
    # validate :description, presence: true
    if self.duration == "" || self.duration == 0
      errors[:duration] << "Duration can't be blank"
    end
  end
end
