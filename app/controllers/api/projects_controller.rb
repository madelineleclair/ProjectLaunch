class Api::ProjectsController < ApplicationController
  # before_action :require_log_in, only: [:edit, :update, :destroy]

  def index
    #this query is not right. Need to rework it
    query_type = params[:fetchType]
    case(query_type)
      when 'almostFunded'
        @projects = Project.joins(:contributions)
          .select('*', 'sum(amount) as total_contributions')
          .where('launch = true')
          .group('projects.id')
          .having('goal < sum(amount)')
          .order('sum(amount) desc')
          .limit(3)
      else
        @projects = Project.all
      end

      render 'api/projects/index.json.jbuilder'
  end

  def show
    @project = Project.find(params[:id])
    render 'api/projects/update.json.jbuilder'
  end

  def create
    @project = Project.new(create_project_params)
    @project.user_id = current_user.id

    if @project.save
        render 'api/projects/create'
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  # def edit
  #   @project = current_user.projects.includes(:story, :rewards) .find(params[:id])
  #
  #   if @project
  #     render 'api/projects/update.json.jbuilder'
  #   else
  #     render json: ["Unable to locate project"]
  #   end
  # end

  def update
    @project = current_user.projects.find(params[:project][:id])

    if @project.update(update_project_params)
      render 'api/projects/update'
    else
      render json: @project.errors.full_messages
    end
  end

  private
    def create_project_params
      params.require(:project).permit(:category, :title)
    end

    def update_project_params
      params.require(:project).permit(:category, :title, :image_url, :description,
      :location, :goal, :launch, :launch_date, :duration, :image)
    end
end
