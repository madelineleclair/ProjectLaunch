# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
Project.destroy_all
Reward.destroy_all
Contribution.destroy_all

user1 = User.create!(name: "Guest", email: "guest@gmail.com", password: "password")

user2 = User.create(name: "Frank", email: "frank@gmail.com", password: "password")
#
# 15.times do
#   User.create!(name: Faker::Name.name, email: Faker::Internet.email, password: Faker::Pokemon.name )
# end
#
# user1 = User.create!(name: "Frank Hu", email: "frank@gmail.com", password: "password")

project1 = Project.create!(user_id: user1.id, title: "Living Forever",
image: "https://s3.us-east-2.amazonaws.com/project-launch-dev/seeds/cute_dog.jpg",
description: "I am reseraching how to live forever so I finally have time to do all the things I want to do.",
location: "New York City, NY", goal: 600, launch: true, launch_date: DateTime.new(), category: "Technology", duration: 30)

project2 = Project.create!(user_id: user2.id, title: "Visit Sukiyabashi Jiro",
image: "https://s3.us-east-2.amazonaws.com/project-launch-dev/seeds/jiro_sushi-8.jpg",
description: "Sukiyabashi Jiro is one of the most famous sushi restaurants in the world. I'm raising money to visit the restuarant in Japan this summer.",
location: "New York City, NY", goal: 2000, launch: true, launch_date: DateTime.new(), category: "Food", duration: 45 )

project3 = Project.create!(user_id: user2.id, title: "Super Smash Bros Tournament",
image: "https://s3.us-east-2.amazonaws.com/project-launch-dev/seeds/super_smash_brothers_tournament.jpg",
description: "The worlds largest Super Smash Bros Tournament is coming to
New York. Get your tickets nows.", goal: 50000, location: "New York City, NY" launch: true, launch_date: DateTime.new(), category: "Games", duration: 60 )

reward1 = Reward.create!(project_id: project1.id,
title: "Spend a day hanging out with me",
pledge_amount: 50, description: "You get to hang out with me for a day, lucky you",
delivery_date: Date.new())

reward2 = Reward.create(project_id: project2.id,
title: "One free answer to any question", pledge_amount: 10,
description: "Ask me any question you want and I will give you an honest answer",
delivery_date: Date.new())

reward3 = Reward.create(project_id: project3.id,
title: "VIP tickets", pledge_amount: 200,
description: "Tickets include early admission into events and meeting the game designers",
delivery_date: Date.new())

contribution1 = Contribution.create!(user_id: user1.id, project_id: project1.id, amount: 500, reward_id: reward1.id)
contribution2 = Contribution.create!(user_id: user1.id, project_id: project2.id, amount: 500, reward_id: reward2.id)
contribution3 = Contribution.create!(user_id: user1.id, project_id: project3.id, amount: 200, reward_id: reward3.id)
contribution4 = Contribution.create!(user_id: user2.id, project_id: project3.id, amount: 250, reward_id: reward3.id)
