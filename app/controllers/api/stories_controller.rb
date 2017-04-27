class Api::StoriesController < ApplicationController
  def show
    @story = Story.find_by(project_id: params[:id])

    render 'api/stories/show.json.jbuilder'
  end

  def create

    @story = Story.new(story_params)

    if @story.save
        render 'api/stories/show.json.jbuilder'
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  # def edit
  # end

  def update
    #make sure id is not blank in params. maybe not sending it up right in component or controller

    @story = current_user.stories.find_by(project_id: params[:id])
    if @story.update(update_project_params)
      render 'api/projects/update'
    else
      render json: @story.errors.full_messages
    end
  end

  private

  def story_params
    params.require(:story).permit(:project_id, :image, :description, :risks_and_challenges)
  end

end
