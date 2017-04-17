```js
{
  currentUser: {
    id: 1,
    name: 'test-user',
  },
  forms: {
    signUp: { errors: [] },
    logIn: { errors: ["Invalid email or password"] },
    createProject: { errors: [] }
  },
  projects: {
    2: {
      title: "Make a spaceship",
      userName: "test-user",
      image: 'www.fakeurlforcloudinary.com/image/2587',
      goal: 5000000000
      pledges: {
        totalPledged: 300000,
        daysLeft: 29,
      }
    },
    3: {
      title: "Make a sandwich",
      userName: "Frank",
      goal: 100,
      pledges: {
        totalPledged: 500,
        daysLeft: 4,
      }
    }
  },
  project: {
    1: {
      user: {
        image: profile_image,
        name: "test-user",
        numberProjects: 1
      },
      title: "Make a spaceship",
      description: "Making a spaceship to explore the universe",
      video: 'www.faceurl.com/video/5875',
      goal: 5000000000,
      duration: 30,
      pledges: {
        totalPledged: 300000,
        numberBackers: 10,
        daysLeft: 29,
      }
    story: {
      description: "I am making a spaceship to go explore the universe and find Gallifrey. The spaceship will have warp drives and a fully stocked kitchen. I am also looking for a crew to venture out with me"
    },
    rewards: {
      2: {
        title: "Get a thank you note",
        pledgeAmount: 20,
        description: "Receive a handwritten thank you note",
        estimatedDelivery: 'May 2017'
        numberBackers: 1,
      },
      10: {
        title: "Get a warp drive",
        pledgeAmount: 5000000,
        description: "Receive a real and functional wrap drive",
        estimatedDelivery: 'April 2025',
        numberBackers: 0,
      }
    }  
  },
  categories: {
    1: {
      name: food,
      numberProjects: 20,
    },
    2: {
      name: technology,
      numberProjects: 100,
    },
  }
}
```
