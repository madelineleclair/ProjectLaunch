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

user3 = User.create(name: Faker::Name.name, email: Faker::Internet.email, password: Faker::Pokemon.name)

user4 = User.create(name: Faker::Name.name, email: Faker::Internet.email, password: Faker::Pokemon.name)

user5 = User.create(name: Faker::Name.name, email: Faker::Internet.email, password: Faker::Pokemon.name)
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
  New York. Get your tickets nows.", goal: 50000,
  location: "New York City, NY", launch: true,
  launch_date: Time.new(), category: "Games", duration: 60 )

project4 = Project.create(user_id: user3.id, title: "A Dog a Day",
  image: "https://s3.us-east-2.amazonaws.com/project-launch-dev/seeds/westie.jpg",
  description: "A Dog a Day if a web service that will send you a picture
  of a new cute dog every day.", goal: 2000, location: "New York City, NY", launch: true, launch_date: Time.new(), category: "Technology", duration: 2)

project5 = Project.create!(user_id: user2.id, title: "Code Monkey Island",
  image: "https://s3.us-east-2.amazonaws.com/project-launch-dev/seeds/code_monkey_island.png",
  description: "A board game designed to teach players of all ages computer science logic!", goal: 15000, location: "Brooklyn, NY",
  launch: true, launch_date: Time.new(), category: "Games", duration: 30)

project6 = Project.create!(user_id: user3.id, title: "Hoverboard",
  image: "https://s3.us-east-2.amazonaws.com/project-launch-dev/seeds/lexus_hover_board.jpg",
  description: "The future now", goal: 100000, location: "Palo Alto, CA",
  launch: true, launch_date: Time.new(), category: "Technology", duration: 60)

project7 = Project.create(user_id: user1.id, title: "VR Glasses",
  image: "https://s3.us-east-2.amazonaws.com/project-launch-dev/seeds/vr.jpg",
  description: "Next generation viewing experience", goal: 75000, location: "San Francisco, CA",
  launch: true, launch_date: Time.new(), category: "Technology", duration: 25)

project8 = Project.create(user_id: user1.id, title: "Make a sandwich",
  image: "https://s3.us-east-2.amazonaws.com/project-launch-dev/seeds/sandwich.jpg",
  description: "On a quest to make the most delicious pastrami sandwich",
  goal: 500, location: "Boston, MA", launch: true,
  launch_date: Time.new(), category: "Food", duration: 60)

project9 = Project.create(user_id: user5.id, title: "New age marshmallows",
  image: "https://s3.us-east-2.amazonaws.com/project-launch-dev/seeds/marshmallow.jpg",
  description: "The most delicious marshmallows you will ever taste",
  goal: 55000, location: "New York City, NY", launch: true,
  launch_date: Time.new(), category: "Food", duration: 55)

project10 = Project.create(user_id: user4.id, title: "Munchkin",
  image: "https://s3.us-east-2.amazonaws.com/project-launch-dev/seeds/munchkin.jpg",
  description: "Compete in a dungeon adventure card game to kill monsters, gain treasure, grab magic items and reach level 10",
  goal: 15000, location: "Nashville, TN", launch: true,
  launch_date: Time.new(), category: "Games", duration: 45)

project11 = Project.create(user_id: user3.id, title: "Tardis",
  image: "https://s3.us-east-2.amazonaws.com/project-launch-dev/seeds/tardis.jpg",
  description: "Time and Relative Dimension in Space", goal: 990000,
  location: "Gallifrey", launch: true, launch_date: Time.new(),
  category: "Technology", duration: 45)

project12 = Project.create(user_id: user4.id, title: "Smooth Ice",
  image: "https://s3.us-east-2.amazonaws.com/project-launch-dev/seeds/icecream.jpg",
  description: "Opening a restaurant that makes the smoothest ice cream",
  location: "New York City, NY", launch: true, launch_date: Time.new(),
  category: "Food", goal: 100000, duration: 55)

project13 = Project.create(user_id: user5.id, title: "Millennium Falcon",
  image: "https://s3.us-east-2.amazonaws.com/project-launch-dev/seeds/spaceship.JPG",
  description: "Travel anywhere in the universe",
  location: "Palo Alto, CA", launch: true, launch_date: Time.new(),
  category: "Technology", goal: 500000, duration: 55)

project14 = Project.create(user_id: user3.id, title: "Indoor Garden",
  image: "https://s3.us-east-2.amazonaws.com/project-launch-dev/seeds/indoor_garden.jpg",
  description: "Green up the room by growing plants indoors",
  location: "Boston, MA", launch: true, launch_date: Time.new(),
  category: "Technology", goal: 75000, duration: 60)

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

story4 = Story.create(project_id: project4.id, description: "A dog a day is a web service dedicated to providing usings the cuteness of dogs, even if they do not own one.
  Each day, a user will receive a new picture of a cute dog. Pictures will be based off of users' individual preferences and each user will receive unique photos.",
  risks_and_challenges: "We are a young company and the online space can be extremely competitive. Our team has experience in marketing, dog walking, retail sales of dog related products, breeding, e-commerce. We
  believe that our diverse background makes us able to overcome the challenges of the competitive market.")

story5 = Story.create(project_id: project5.id, description: "Code Monkey Island is the most exciting educational board game in the world.
  It teaches kids how to use and master the fundamentals of computer science, and is played in thousands of homes, schools, libraries,
  and after school camps around the world.",
  risks_and_challenges: "The toy game industry is extremely competitive. Vast amounts of toys and games exist. To overcome these challenges,
  we have assembled a crack team of experts from the toy industry, people who have spent years working with children, and marketers to help promote the brand.")

story6 = Story.create(project_id: project6.id, description: "Back to the future come to life. The hoverboard is constructed from an insulated core,
  containing HTSLs (high temperature superconducting blocks). These are housed in cryostats - reservoirs of liquid nitrogen
  that cool the superconductors to -197°C. The board is then placed above a track containing permanent magnets.
  When the board is cooled to its operating temperature the track’s magnetic flux lines are ‘pinned’ into place, maintaining the hover
  height of the board.",
  risks_and_challenges: "We are seeking to mass produce our hoverboard. Due to the extremely technical nature of the product and the current restrictions
  on its range, we have assembled a strong team of engineers to futher research on the hoverboard to improve its range.")

story7 = Story.create(project_id: project7.id, description: "Our VR system offers the most polished and easy-to-use tethered VR
  experience with a relatively reasonable price tag. You can only play proprietary titles on it,
  like Resident Evil 7: Biohazard, but a theater mode lets you play any PS4 game as if you were sitting in front of a
  large screen, and the VR games we've tried have impressed us.",
  risks_and_challenges: "VR technology is still developing but many products have already made a name for themselves. We have a team of
  engineers, designers, strategists, and marketers to help our system stand out on the market.")

story8 = Story.create(project_id: project8.id, description: "One of the most enjoyable things in the world is biting down into a
  delicious sandwich. Nothing brings back found memories of warm summer picnics and hikes like a sandwich. I am on a mission to create
  the most delcious pastrami sandwich that was ever created. It will be made with freshly baked bread, my own special curried pastrami, and pickles that will be pickled by myself.",
  risks_and_challenges: "Making the most delicious sandwich ever requires knowledge in baking, curring, and pickling. Anyone can just go to the
  store and by ingredients, but to make them all from scratch requires skill. Although I am not trained as a professional chef, I am willing to go
  the distance and spend hours, days, even months pouring over recipes and practicing new techniques until I achieve sandwich perfection.")

story9 = Story.create(project_id: project9.id, description: "High-end, delectable, and heavenly are just a few words to describe these marshmallows.
  Inspired by the brand Squish Marshmallow, each marshmallow is made with critical attention to detail, unique flavors, and a little bit of love. Eat them
  as is or roast them until golden brown, no matter what your marshmallow preferences are, you will not be disappointed.",
  risks_and_challenges: "Currently, our marshmallows are beingg sold online, but we are looking to expand our operations to a physical location.
  To overcome the challenges of the highly competitive food space, we are working with multiple agents, promoting our brand, and reaching directly out to customers.")

story10 = Story.create(project_id: project10.id, description: "Munchkin captures the essence of the dungeon experience . . .
  with none of that stupid roleplaying stuff. You and your friends compete to kill monsters and grab magic items.
  And what magic items! Don the Horny Helmet and the Boots of Butt-Kicking. Wield the Staff of Napalm . . . or maybe the Chainsaw
  of Bloody Dismemberment. Start by slaughtering the Potted Plant and the Drooling Slime, and work your way up to the Plutonium Dragon.",
  risks_and_challenges: "The toy game industry is extremely competitive. Vast amounts of toys and games exist. To overcome these challenges,
  we have assembled a crack team of experts from the toy industry, and marketers to help promote the brand. We have spent years, designing,
  testing, and preparing the Munchkin to maximize fun.")

story11 = Story.create(project_id: project11.id, description: "The Tardis the
  chosen spaceship of the Time Lords. It can travel in both space and through time and
  take its travelers anywhere and anytime that they want to go. Visit London in the 18th century,
  the pyramids of Egypt while they are still under construction, or alien planets
  outside of your wildest dreams.",
  risks_and_challenges: "A Tardis can be a difficult machine to manage. They don't always take you
  where you want to go, but they do take you where you need to go. We are working with Time Lords to ensure that the construction
  of our Tardis is accurate and the Doctor to help us navigate the Tardis' difficult personality.")

story12 = Story.create(project_id: project12.id, description: "We’re all about awakening your taste buds.
There’s no ice cream here—that is, until we make it right in front of you. Once you order, we pull the lever
and the delicious science of liquid nitrogen does its magic, flash freezing your ice cream in a cloud of ultra cool vapor. It’s Science.",
risks_and_challenges: "The restaurant industry is extremely challenging. Every customer experience influences whether the
customer will return again. Our founder has been trained as a chef and has experience running multiple restaurants.")

story13 = Story.create(project_id: project13.id, description: "The Millennium Falcon, originally known as YT-1300 492727ZED, was a Corellian YT-1300f light freighter used by the smugglers Han Solo and Chewbacca during the Galactic Civil War. It was previously owned by Lando Calrissian, who lost it to Solo in a game of sabacc.
Its aged appearance belied numerous advanced modifications to boost the ship's speed, weapons and shield, including a hyperdrive engine among the fastest in the entire galaxy, enabling it to outrun Imperial Star Destroyers. It included sensor-proof smuggling compartments, which were used during the rescue of Princess Leia Organa to evade Imperial stormtroopers.",
risks_and_challenges: "This ship may look old, but it is ready for action. Our biggest challenge is finding a pilot, but Han Solo is more than capable.")

story14 = Story.create(project_id: project14.id, description: "Green is in. The indoor garden allows users to grow plants
inside your home, apartment, or company. Small, easy to mantain, and efficient, the indoor garden is perfect for people looking to grow
plants and vegetables year round or just green up the place.",
risks_and_challenges: "Making a stylish and efficient product has been our biggest challenge. Through careful planning, trail, and error
we have been able to overcome these issues.")

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

reward4 = Reward.create(project_id: project4.id, title: "VIP access", pledge_amount: 20, description: "Receive special access to our website to view more cute dogs
and post your own cute dog related pictures", delivery_date: Time.new())

reward5 = Reward.create(project_id: project4.id, title: "Spend a day with a dog", pledge_amount: 150, description: "Spend an entire day handing out with our
cute dogs. Watch them frolic around in the dog park, relax with them on the couch, or take them for a walk", delivery_date: Time.new())

reward6 = Reward.create(project_id: project4.id, title: "The ultimate cute dog experience", pledge_amount: 300, description: "OD on the cuteness of our cute dogs. The
cutre dog experience is a complete myster except for those who sign up for it.", delivery_date: Time.new())

reward7 = Reward.create(project_id: project5.id, title: "Early Bird", pledge_amount: 30,
  description: "Enjoy $10 off the retail price.", delivery_date: Time.new())

reward8 = Reward.create(project_id: project5.id, title: "Code Monkey Island", pledge_amount: 40,
  description: "Receive a copy of Code Monkey Island. Thank you for supporting us.", delivery_date: Time.new())

reward9 = Reward.create(project_id: project5.id, title: "Code Monkey Island + Exclusive Mini Game", pledge_amount: 60,
  description: "Double the fun. Receive a copy of Code Monkey Island and an exclusive super secret mini game that can originally
  be obtained here on Project Launch.")

reward10 = Reward.create(project_id: project6.id, title: "Thank you pledge", pledge_amount: 10,
  description: "Obtain good feelings by donating to develope new forms of transportation", delivery_date: Time.new())

reward11 = Reward.create(project_id: project6.id, title: "Mini Model", pledge_amount: 30,
  description: "Receive a mini model of the hoverboard", delivery_date: Time.new())

reward12 = Reward.create(project_id: project7.id, title: "Ride", pledge_amount: 100,
  description: "Take a 10 minute ride on the hoverboard", delivery_date: Time.new())

reward13 = Reward.create(project_id: project8.id, title: "Say name", pledge_amount: 10,
  description: "I will say your name while making the sandwich", delivery_date: Time.new())

reward14 = Reward.create(project_id: project8.id, title: "Recipe Book", pledge_amount: 30,
  description: "Receive a book of the recipes used to make the sandwich", delivery_date: Time.new())

reward15 = Reward.create(project_id: project8.id, title: "Receive a Piece of the sandwich", pledge_amount: 75,
  description: "Receive a piece of the sandwich", delivery_date: Time.new())

reward15 = Reward.create(project_id: project9.id, title: "Good Feelings", pledge_amount: 5,
  description: "Gain good feelings from supporting a growing business", delivery_date: Time.new())

reward16 = Reward.create(project_id: project9.id, title: "One box of marshmallows", pledge_amount: 25,
  description: "Receive a box of 4 different marshmallows", delivery_date: Time.new())

reward17 = Reward.create(project_id: project9.id, title: "Big box of marshmallows",pledge_amount: 45,
  description: "Receive a box of 8 different marshmallows", delivery_date: Time.new())

reward18 = Reward.create(project_id: project9.id, title: "Extra large marshmallows", pledge_amount: 65,
  description: "Receive a box of 12 extra large marshmallows", delivery_date: Time.new())

reward19 = Reward.create(project_id: project10.id, title: "Early Bird", pledge_amount: 30,
  description: "Receive $10 off your purchase of Munchkin", delivery_date: Time.new())

reward20 = Reward.create(project_id: project10.id, title: "Munchkin",
description: "Receive the classic game", delivery_date: Time.new(), pledge_amount: 50)

reward21 = Reward.create(project_id: project10.id, title: "Super Munchkin", pledge_amount: 75,
  description: "Receive the classic Munchkin game plus two expansion packs", delivery_date: Time.new())

reward22 = Reward.create(project_id: project11.id, title: "Take a photo with the Tardis", pledge_amount: 25,
  description: "Take a photo of the Tardis", delivery_date: Time.new())

reward23 = Reward.create(project_id: project11.id, title: "Mini Model", pledge_amount: 45,
  description: "Receive a mini model of the Tardis", delivery_date: Time.new())

reward24 = Reward.create(project_id: project11.id, title: "Take a ride", pledge_amount: 150,
  description: "Take a ride in the Tardis", delivery_date: Time.new())

reward25 = Reward.create(project_id: project12.id, title: "Good Feelings", pledge_amount: 5,
  description: "Gain good feelings from supporting a growing business", delivery_date: Time.new())

reward26 = Reward.create(project_id: project12.id, title: "$10 off you next purchase", pledge_amount: 15,
  description: "Receive $10 off you next purchase", delivery_date: Time.new())

reward27 = Reward.create(project_id: project12.id, title: "Recipe book", pledge_amount: 45,
  description: "Receive a book of our favorite ice cream recipes", delivery_date: Time.new())

reward28 = Reward.create(project_id: project13.id, title: "Take a photo with the Millennium Falcon", pledge_amount: 25,
  description: "Take a photo of the Tardis", delivery_date: Time.new())

reward29 = Reward.create(project_id: project13.id, title: "Mini Model", pledge_amount: 45,
  description: "Receive a mini model of the Fillennium Falcon", delivery_date: Time.new())

reward30 = Reward.create(project_id: project13.id, title: "Take a ride", pledge_amount: 150,
  description: "Take a ride in the Millennium Falcon", delivery_date: Time.new())

reward31 = Reward.create(project_id: project14.id, title: "Go Green", pledge_amount: 30,
  description: "Receive a book on how to go green and garden", delivery_date: Time.new())

reward32 = Reward.create(project_id: project14.id, title: "Indoor Garden", pledge_amount: 65,
  description: "Receive an indoor garden", delivery_date: Time.new())

reward33 = Reward.create(project_id: project14.id, title: "Indoor Garden + Special Gift", pledge_amount: 100,
  description: "Receive an indoor garden plus a special gift that can only be found here on Project Launch", delivery_date: Time.new())

contribution1 = Contribution.create!(name: "suzzy", email_address:'suzzy@gmail.com', project_id: project1.id, amount: 500, reward_id: reward1.id)
contribution2 = Contribution.create!(name: "suzzy", email_address:'suzzy@gmail.com', project_id: project2.id, amount: 500, reward_id: reward2.id)
contribution3 = Contribution.create!(name: "suzzy", email_address:'suzzy@gmail.com', project_id: project3.id, amount: 200, reward_id: reward3.id)
contribution4 = Contribution.create!(name: "suzzy", email_address:'suzzy@gmail.com', project_id: project3.id, amount: 250, reward_id: reward3.id)
contribution5 = Contribution.create!(name: "suzzy", email_address:'suzzy@gmail.com', project_id: project4.id, amount: 300, reward_id: reward6.id)
contribution4 = Contribution.create!(name: "suzzy", email_address:'suzzy@gmail.com', project_id: project4.id, amount: 250, reward_id: reward5.id)
contribution4 = Contribution.create!(name: "suzzy", email_address:'suzzy@gmail.com', project_id: project4.id, amount: 250, reward_id: reward5.id)
contribution4 = Contribution.create!(name: "suzzy", email_address:'suzzy@gmail.com', project_id: project4.id, amount: 500, reward_id: reward6.id)
