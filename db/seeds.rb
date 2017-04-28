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
location: "New York City, NY", goal: 600, launch: true, launch_date: Time.new, category: "Technology", duration: 30)

project2 = Project.create!(user_id: user2.id, title: "Visit Sukiyabashi Jiro",
image: "https://s3.us-east-2.amazonaws.com/project-launch-dev/seeds/jiro_sushi-8.jpg",
description: "Sukiyabashi Jiro is one of the most famous sushi restaurants in the world. I'm raising money to visit the restuarant in Japan this summer.",
location: "New York City, NY", goal: 2000, launch: true, launch_date: Time.new(), category: "Food", duration: 45 )

project3 = Project.create!(user_id: user2.id, title: "Super Smash Bros Tournament",
image: "https://s3.us-east-2.amazonaws.com/project-launch-dev/seeds/super_smash_brothers_tournament.jpg",
description: "The worlds largest Super Smash Bros Tournament is coming to
New York. Get your tickets nows.", goal: 50000, location: "New York City, NY", launch: true, launch_date: Time.new(), category: "Games", duration: 60 )

story1 = Story.create(project_id: project1.id, description:
"When Liz Blackburn, who won a Nobel Prize for her work in genetics, took questions, Goldie Hawn, regal on a comfy sofa, purred, “I have a question about the mitochondria. I’ve been told about a molecule called glutathione that helps the health of the cell?” Glutathione is a powerful antioxidant that protects cells and their mitochondria, which provide energy; some in Hollywood call it “the God molecule.” But taken in excess it can muffle a number of bodily repair mechanisms, leading to liver and kidney problems or even the rapid and potentially fatal sloughing of your skin. Blackburn gently suggested that a varied, healthy diet was best, and that no single molecule was the answer to the puzzle of aging.

Yet the premise of the evening was that answers, and maybe even an encompassing solution, were just around the corner. The party was the kickoff event for the National Academy of Medicine’s Grand Challenge in Healthy Longevity, which will award at least twenty-five million dollars for breakthroughs in the field. Victor Dzau, the academy’s president, stood to acknowledge several of the scientists in the room. He praised their work with enzymes that help regulate aging; with teasing out genes that control life span in various dog breeds; and with a technique by which an old mouse is surgically connected to a young mouse, shares its blood, and within weeks becomes younger.",

risks_and_challenges: "Joon Yun, a doctor who runs a health-care hedge fund, announced that he and his wife had given the first two million dollars toward funding the challenge. “I have the idea that aging is plastic, that it’s encoded,” he said. “If something is encoded, you can crack the code.” To growing applause, he went on, “If you can crack the code, you can hack the code!” It’s a big ask: more than a hundred and fifty thousand people die every day, the majority of aging-related diseases. Yet Yun believes, he told me, that if we hack the code correctly, “thermodynamically, there should be no reason we can’t defer entropy indefinitely. We can end aging forever.”

Nicole Shanahan, the founder of a patent-management business, announced that her company would oversee longevity-related patents that Yun had pledged to the cause. “I’m here with my darling, Sergey,” she said, referring to her boyfriend, Sergey Brin, the co-founder of Google. “And he called me yesterday and said, ‘I’m reading this book, “Homo Deus,” and it says on page twenty-eight that I’m going to die.’ I said, ‘It says you, personally?’ He said, ‘Yes!’ ” (In the book, the author, Yuval Noah Harari, discusses Google’s anti-aging research, and writes that the company “probably won’t solve death in time to make Google co-founders Larry Page and Sergey Brin immortal.”) Brin, sitting a few feet away, gave the crowd a briskly ambiguous nod: Yes, I was singled out for death; no, I’m not actually planning to die.")

story2 = Story.create(project_id: project2.id, description: "Heralded as a Japanese national treasure, Jiro Ono, 86, is the first sushi chef in the world to receive three Michelin stars, and is the proprietor of the world’s most celebrated sushi restaurant, Tokyo’s Sukiyabashi Jiro.
Hidden in a basement attached to the Ginza Metro Station, Sukiyabashi Jiro has vaulted into the worldwide cultural milieu thanks to its appearance on Anthony Bourdain’s “No Reservations” TV show and the recent release of the David Gelb feature-length documentary “Jiro Dreams of Sushi.”",
risks_and_challenges: "The price is the biggest challenge. One meal at Jiro's can cost hundrededs of dollars per person and must be reserved in advamde"
)

story3 = Story.create(project_id: project3.id, description: "Super Smash Bros. is a series of crossover fighting games published by Nintendo, that primarily features characters from franchises established on its systems. All five games have been directed by Masahiro Sakurai.

The gameplay objective differs from that of traditional fighters by aiming to knock opponents off of the stage instead of depleting life bars. The original Super Smash Bros., released in 1999 for the Nintendo 64, had a small budget and was originally a Japan-only release, but its domestic success led to a worldwide release. The series achieved even greater success with the release of Super Smash Bros. Melee, which was released in 2001 for the GameCube and became the best-selling game on that system. A third installment, Super Smash Bros. Brawl, was released in 2008 for the Wii. Although HAL Laboratory has been the developer of the first two titles, the third game was developed through the collaboration of several companies. The fourth and fifth installments,[1] Super Smash Bros. for Nintendo 3DS and Wii U, were released in 2014 for the Nintendo 3DS and Wii U, respectively. The 3DS installment was the first series title to be released on a handheld platform.",
risks_and_challenges: "None to think of. Everyone loves Super Smash Bros.")

reward1 = Reward.create!(project_id: project1.id,
title: "Spend a day hanging out with me",
pledge_amount: 50, description: "You get to hang out with me for a day, lucky you",
delivery_date: Time.new())

reward2 = Reward.create(project_id: project2.id,
title: "One free answer to any question", pledge_amount: 10,
description: "Ask me any question you want and I will give you an honest answer",
delivery_date: Time.new())

reward3 = Reward.create(project_id: project3.id,
title: "VIP tickets", pledge_amount: 200,
description: "Tickets include early admission into events and meeting the game designers",
delivery_date: Time.new())

contribution1 = Contribution.create!(name: "suzzy", email_address:'suzzy@gmail.com', project_id: project1.id, amount: 500, reward_id: reward1.id)
contribution2 = Contribution.create!(name: "suzzy", email_address:'suzzy@gmail.com', project_id: project2.id, amount: 500, reward_id: reward2.id)
contribution3 = Contribution.create!(name: "suzzy", email_address:'suzzy@gmail.com', project_id: project3.id, amount: 200, reward_id: reward3.id)
contribution4 = Contribution.create!(name: "suzzy", email_address:'suzzy@gmail.com', project_id: project3.id, amount: 250, reward_id: reward3.id)
