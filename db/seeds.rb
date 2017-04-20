# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(name: "Guest", email: "guest@gmail.com", password: "password")

100.times do
  User.create(name: Faker::Name.name, email: Faker::Internet.email, password: Faker::Pokemon.name )
end
