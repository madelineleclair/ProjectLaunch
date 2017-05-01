#
# json.array! @categories.each do |category|
#     json.set! category.category do
#       json.total_projects category.total_projects
#     end
# end

@categories.each do |category|
  json.set! category.category do
    json.total_projects category.total_projects
  end
end
