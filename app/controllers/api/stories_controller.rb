class Api::StoriesController < ApplicationController
  def show
    @story = Story.find_by(project_id: params[project_id])
    render 'api/stories/show.json.jbuilder'
  end
end
