# == Schema Information
#
# Table name: projects
#
#  id                 :integer          not null, primary key
#  user_id            :integer          not null
#  title              :string           not null
#  description        :text
#  location           :string
#  goal               :integer          default("1")
#  duration           :integer
#  category           :string           not null
#  launch             :boolean          default("false")
#  created_at         :datetime
#  updated_at         :datetime
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  launch_date        :datetime
#

class Project < ActiveRecord::Base
  include PgSearch

  pg_search_scope :search_for, against:
    {
      title: "A",
      description: "B",
      location: "C",
      category: "D"
      },
      using: {
                tsearch: {prefix: true}
              }
  validates :category, :user, presence: true
  validates :category, inclusion: %w(Untitled Technology Food Games)
  has_attached_file :image, default_url: "missing_picture.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  validates_presence_of :description, :location, :goal, :duration, :image,  on: :update
  validates :duration, :numericality => { less_than: 61 }, on: :update


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
