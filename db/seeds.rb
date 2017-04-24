# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
Project.destroy_all

user1 = User.create(name: "Guest", email: "guest@gmail.com", password: "password")

15.times do
  User.create(name: Faker::Name.name, email: Faker::Internet.email, password: Faker::Pokemon.name )
end

user1 = User.create(name: "Frank Hu", email: "frank@gmail.com", password: "password")

project1 = Project.create(user_id: user1.id, title: "Living Forever", image: File.open("app/assets/images/living_forever.png"), description: "I am reseraching how to live forever so I finally have time to do all the things I want to do.", location: "New York City, NY", goal: 5000000, launch: true, launch_date: Date.new(), category: "Technology")

reward1 = Reward.create(project_id: project1, title: "Spend a day hanging out with me", pledge_amount: 5000, description: "You get to hang out with me for a day, lucky you", delivery_date: Date.new())

contribution1 = Contribution.new(user_id: user1.id, project_id: project1.id, amount: 50000, reward_id: reward1.id)
