class Api::ProjectsController < ApplicationController
  # before_action :require_log_in, only: [:edit, :update, :destroy]

  def index
    #this query is not right. Need to rework it
    query_type = params[:fetchType]
    case(query_type)
      when 'almostFunded'
         @projects = Project.select(:id, :title, :description, :location, :goal, :launch_date, :duration, 'name as owner', 'sum(amount) as funding', :image_file_name, :image_content_type, :image_file_size, :image_updated_at)
         .joins(:contributions, :user)
         .group('projects.id', 'users.name')
         .where('launch = true', 'goal > funding')
         .order('funding').limit(3)
      else
        @projects = Project.all
      end

      render 'api/projects/index.json.jbuilder'
  end

  def show
    if (params[:pageType] == "projects_show")
      @project = Project.where('launch = true').includes(:user).find(params[:id])
      render 'api/projects/show.json.jbuilder'
    else
      @project = Project.find(params[:id])
      render 'api/projects/update.json.jbuilder'
    end
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
      # if @project.valid?
        render 'api/projects/update'
      # else
      #   render json: @project.errors.full_messages
      # end
    else
      render json: @project.errors.full_messages, status: 422
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
