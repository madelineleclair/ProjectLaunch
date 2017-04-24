@projects.each do |project|
  json.project_id project.id
  json.title project.title
  json.funding project.funding
  json.owner project.owner
  json.description project.description
  json.image_url asset_path(project.image.url)
  json.location project.location
end
