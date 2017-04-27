json.extract! @story, :id, :project_id, :description, :risks_and_challenges
json.image_url asset_path(@story.image.url)
