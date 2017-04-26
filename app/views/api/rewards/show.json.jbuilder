
@project.rewards.each do |reward|
  json.set! reward.id do
    json.reward_id reward.id
    json.project_id reward.project_id
    json.title reward.title
    json.pledge_amount reward.pledge_amount
    json.description reward.description
    json.delivery_date reward.delivery_date
    json.number_available reward.number_available
    json.contribution_count reward.contributions.count
  end
end



# json.rewards @project.rewards do |reward|
#   json.reward_id reward.id
#   json.project_id reward.project_id
#   json.title reward.title
#   json.pledge_amount reward.pledge_amount
#   json.description reward.description
#   json.delivery_date reward.delivery_date
#   json.number_available reward.number_available
# end
