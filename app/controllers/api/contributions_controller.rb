class Api::ContributionsController < ApplicationController

  def index
    @contributions = Contribution.select("SUM(amount) as total_contributions", "COUNT(*) as total_contributers")
    .where("project_id = #{params[:project_id]}")
    render 'api/contributions/index.json.jbuilder'
  end

  def create
    
  end
end
