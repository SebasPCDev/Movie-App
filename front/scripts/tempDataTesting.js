const tempData = [
  {
    title: "Guardians of the Galaxy Vol. 2",
    year: 2017,
    director: "James Gunn",
    duration: "2h 16min",
    genre: ["Action", "Adventure", "Comedy"],
    rate: 7.7,
    poster:
      "https://image.tmdb.org/t/p/original/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
    id: 1,
    description:
      "Guardians of the Galaxy Vol. 2 follows the Guardians as they struggle to keep their newfound family together while unraveling the mysteries of Peter Quill's true parentage.",
  },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    director: "George Lucas",
    duration: "2h 1min",
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    rate: 8.7,
    poster:
      "https://image.tmdb.org/t/p/original/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
    id: 2,
    description:
      "Star Wars: Episode IV - A New Hope follows Princess Leia, leader of the Rebel Alliance, as she is captured by the sinister Imperial Forces in their quest to dominate the galaxy.",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    director: "Peter Jackson",
    duration: "2h 58min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    id: 3,
    description:
      "The Lord of the Rings: The Fellowship of the Ring follows a group of travelers as they embark on a perilous journey to destroy the One Ring and defeat the evil Sauron before his dark power consumes all of Middle-earth.",
  },
  {
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    duration: "2h 28min",
    genre: ["Action", "Adventure", "Sci-Fi", "Thriller"],
    rate: 8.8,
    poster:
      "https://image.tmdb.org/t/p/original/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    id: 4,
    description:
      "Inception follows a skilled thief with the ability to enter people's dreams and steal their deepest secrets, who is offered a chance at redemption by performing an seemingly impossible task: implanting an idea into someone's mind.",
  },
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    duration: "2h 22min",
    genre: ["Drama"],
    rate: 9.3,
    poster:
      "https://image.tmdb.org/t/p/original/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg",
    id: 5,
    description:
      "The Shawshank Redemption tells the story of an innocent man sentenced to two consecutive life terms in a brutal prison and ultimately finds redemption through an unlikely friendship and his own resourceful ingenuity.",
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    duration: "2h 34min",
    genre: ["Crime", "Drama"],
    rate: 8.9,
    poster:
      "https://image.tmdb.org/t/p/original/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    id: 6,
    description:
      "Pulp Fiction weaves together the lives of several individuals in a series of unconventional stories involving violence, redemption, and a mysterious suitcase.",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    duration: "2h 32min",
    genre: ["Action", "Crime", "Drama", "Thriller"],
    rate: 9,
    poster:
      "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    id: 7,
    description:
      "The Dark Knight sees Batman confronting chaos as the Joker, a psychotic criminal mastermind, unleashes a wave of crime upon Gotham City while seeking to challenge the Dark Knight in a battle of wits and morality.",
  },
  {
    title: "Forrest Gump",
    year: 1994,
    director: "Robert Zemeckis",
    duration: "2h 22min",
    genre: ["Drama", "Romance"],
    rate: 8.8,
    poster:
      "https://image.tmdb.org/t/p/original/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    id: 8,
    description:
      "Forrest Gump's life, a man with below-average intellectual abilities but a pure heart, intertwines with some of the most important events in U.S. history.",
  },
  {
    title: "The Matrix",
    year: 1999,
    director: "The Wachowskis",
    duration: "2h 16min",
    genre: ["Action", "Sci-Fi"],
    rate: 8.7,
    poster:
      "https://image.tmdb.org/t/p/original/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
    id: 9,
    description:
      "The Matrix follows a hacker named Neo who discovers the shocking truth about his simulated reality and joins a group of rebels to free humanity from the control of intelligent machines.",
  },
  {
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    rate: 9.2,
    poster:
      "https://image.tmdb.org/t/p/original/3Tf8vXykYhzHdT0BtsYTp570JGQ.jpg",
    id: 10,
    description:
      "The Godfather saga follows the Corleone family, led by Don Vito Corleone, the patriarch of New York's organized crime, exploring themes of loyalty, honor, and betrayal in the underworld.",
  },
  {
    title: "Schindler's List",
    year: 1993,
    director: "Steven Spielberg",
    duration: "3h 15min",
    genre: ["Biography", "Drama", "History"],
    rate: 8.9,
    poster:
      "https://image.tmdb.org/t/p/original/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    id: 11,
    description:
      "Schindler's List, based on true events, follows Oskar Schindler, a German businessman who saves the lives of more than a thousand Jews during the Holocaust by employing them in his factories.",
  },
  {
    title: "Fight Club",
    year: 1999,
    director: "David Fincher",
    duration: "2h 19min",
    genre: ["Drama"],
    rate: 8.8,
    poster:
      "https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    id: 12,
    description:
      "Fight Club follows an insomniac employee and a charismatic soap salesman as they form an underground fight club as a form of escapism and emotional release from the monotony of their daily lives.",
  },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
    director: "Peter Jackson",
    duration: "2h 59min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.7,
    poster:
      "https://image.tmdb.org/t/p/original/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
    id: 13,
    description:
      "The Lord of the Rings: The Two Towers continues the epic journey of Frodo, Sam, and the Fellowship as they face increasing dangers in their quest to destroy the One Ring and defeat the dark lord Sauron.",
  },
  {
    title: "The Silence of the Lambs",
    year: 1991,
    director: "Jonathan Demme",
    duration: "1h 58min",
    genre: ["Crime", "Drama", "Thriller"],
    rate: 8.6,
    poster:
      "https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg",
    id: 14,
    description:
      "The Silence of the Lambs follows FBI trainee Clarice Starling as she seeks the help of incarcerated serial killer Dr. Hannibal Lecter to catch another murderer known as Buffalo Bill, delving into the darkest corners of the human psyche.",
  },
  {
    title: "Goodfellas",
    year: 1990,
    director: "Martin Scorsese",
    duration: "2h 26min",
    genre: ["Biography", "Crime", "Drama"],
    rate: 8.7,
    poster:
      "https://image.tmdb.org/t/p/original/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    id: 15,
    description:
      "Goodfellas tells the true story of Henry Hill and his rise through the ranks of the mob, exploring the seductive allure of organized crime and the devastating consequences it brings to his life.",
  },
  {
    title: "The Usual Suspects",
    year: 1995,
    director: "Bryan Singer",
    duration: "1h 46min",
    genre: ["Crime", "Mystery", "Thriller"],
    rate: 8.5,
    poster:
      "https://image.tmdb.org/t/p/original/99X2SgyFunJFXGAYnDv3sb9pnUD.jpg",
    id: 16,
    description:
      "The Usual Suspects follows a group of criminals brought together in a police lineup who are manipulated into pulling off a heist by the mysterious Keyser Söze, leading to a twist-filled journey of deception and betrayal.",
  },
  {
    title: "The Green Mile",
    year: 1999,
    director: "Frank Darabont",
    duration: "3h 9min",
    genre: ["Crime", "Drama", "Fantasy"],
    rate: 8.6,
    poster:
      "https://image.tmdb.org/t/p/original/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
    id: 17,
    description:
      "The Green Mile explores the lives of the guards and inmates on Death Row at a Southern prison in the 1930s, focusing on the extraordinary bond formed between a gentle giant with supernatural abilities and a compassionate prison guard.",
  },
  {
    title: "Gladiator",
    year: 2000,
    director: "Ridley Scott",
    duration: "2h 35min",
    genre: ["Action", "Adventure", "Drama"],
    rate: 8.5,
    poster:
      "https://image.tmdb.org/t/p/original/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    id: 18,
    description:
      "Gladiator follows the epic journey of Maximus, a former Roman general who seeks revenge against the corrupt emperor Commodus, culminating in a grand spectacle of honor, courage, and betrayal in the gladiatorial arena.",
  },
  {
    title: "Django Unchained",
    year: 2012,
    director: "Quentin Tarantino",
    duration: "2h 45min",
    genre: ["Drama", "Western"],
    rate: 8.4,
    poster:
      "https://image.tmdb.org/t/p/original/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg",
    id: 19,
    description:
      "Django Unchained follows a freed slave turned bounty hunter as he teams up with a German dentist-turned-gunslinger to rescue his wife from a ruthless plantation owner, leading to a bloody confrontation with the dark heart of the American South.",
  },
  {
    title: "The Departed",
    year: 2006,
    director: "Martin Scorsese",
    duration: "2h 31min",
    genre: ["Crime", "Drama", "Thriller"],
    rate: 8.5,
    poster:
      "https://image.tmdb.org/t/p/original/nT97ifVT2J1yMQmeq20Qblg61T.jpg",
    id: 20,
    description:
      "The Departed follows an undercover cop and a mole in the Boston police force as they try to identify each other while infiltrating an Irish gang and the police department, leading to a deadly game of cat and mouse.",
  },
  {
    title: "The Prestige",
    year: 2006,
    director: "Christopher Nolan",
    duration: "2h 10min",
    genre: ["Drama", "Mystery", "Sci-Fi", "Thriller"],
    rate: 8.5,
    poster:
      "https://image.tmdb.org/t/p/original/tRNlZbgNCNOpLpbPEz5L8G8A0JN.jpg",
    id: 21,
    description:
      "The Prestige explores the intense rivalry between two magicians in Victorian-era London as they engage in a dangerous game of one-upmanship, blurring the line between illusion and reality in their quest for the ultimate trick.",
  },
  {
    title: "The Social Network",
    year: 2010,
    director: "David Fincher",
    duration: "2h",
    genre: ["Biography", "Drama"],
    rate: 7.7,
    poster:
      "https://image.tmdb.org/t/p/original/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
    id: 22,
    description:
      "The Social Network tells the story of the founding of Facebook and the legal battles and personal conflicts that arise among its creators, exploring themes of friendship, ambition, and betrayal in the age of social media.",
  },
  {
    title: "The Grand Budapest Hotel",
    year: 2014,
    director: "Wes Anderson",
    duration: "1h 39min",
    genre: ["Adventure", "Comedy", "Crime"],
    rate: 8.1,
    poster:
      "https://image.tmdb.org/t/p/original/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
    id: 23,
    description:
      "The Grand Budapest Hotel follows the misadventures of a legendary concierge at a famous European hotel and his trusted lobby boy as they become embroiled in the theft of a priceless painting and the battle for an enormous family fortune.",
  },
  {
    title: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
    duration: "2h 49min",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    rate: 8.6,
    poster:
      "https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    id: 24,
    description:
      "Interstellar follows a team of astronauts as they embark on a perilous journey through a wormhole in search of a new habitable planet for humanity, exploring themes of love, sacrifice, and the boundless potential of the human spirit.",
  },
];

module.exports = tempData;

