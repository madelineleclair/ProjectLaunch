
json.extract! @project, :id, :title, :description,
  :location, :goal, :launch_date, :duration
json.image_url asset_path(@project.image.url)
json.owner @project.user.name
json.owner_image asset_path(@project.user.image.url)
