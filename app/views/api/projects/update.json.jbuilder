
json.extract! @project, :id, :category, :title, :description,
  :location, :goal, :launch, :launch_date, :duration
json.image_url asset_path(@project.image.url)


# json.story do
#   json.extract! @project.story, :project_id, :video_url, :description, :risks_and_challenges
# end
  #
  # json.rewards @project.rewards do |reward|
  #   json.reward_id reward.id
  #   json.project_id reward.project_id
  #   json.title reward.title
  #   json.pledge_amount reward.pledge_amount
  #   json.description reward.description
  #   json.delivery_date reward.delivery_date
  #   json.number_available reward.number_available
  # end
