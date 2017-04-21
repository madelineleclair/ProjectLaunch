json.extract! @project, :id, :category, :project.title, :image_url, :project.description, :location, :goal, :launch,
  :launch_date, :duration, :rewards.title, :pledge_amount, rewards.description,
  :delivery_date, :number_available
