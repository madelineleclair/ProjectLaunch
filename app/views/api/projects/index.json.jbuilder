@projects.each do |project|
  json.project_id project.id
  json.title project.title
  json.owner project.user.name
  json.description project.description
  json.image_url asset_path(project.image.url)
  json.location project.location
end
