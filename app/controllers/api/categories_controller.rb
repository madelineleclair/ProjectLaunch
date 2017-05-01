class Api::CategoriesController < ApplicationController

  def index
    @categories = Project.select(:category, 'COUNT(*) as total_projects')
      .where('launch = true')
      .group(:category)

      render 'api/categories/index.json.jbuilder'
  end

end
