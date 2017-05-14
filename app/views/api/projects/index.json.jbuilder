@projects.each do |project|
  json.set! project.id do
    json.project_id project.id
    json.title project.title
    json.funding project.funding
    json.owner project.owner
    json.description project.description
    json.image_url asset_path(project.image.url)
    json.location project.location
    json.goal project.goal
    json.duration project.duration
    json.launch_date project.launch_date
  end
end
