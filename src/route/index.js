// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS developer',
  salary: '600$ в місяць',
  address: 'м. Кременчук, просп. Свободи, буд. 23, кв. 45',
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:ivanov@mail.com',
    },

    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },

    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Summary',
    },

    header,
    main: {
      summary: {
        title: 'Summary',
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to  work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
      },
      experience: {
        title: 'Other experience',
        text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
      },
    },

    footer,
  })
})

router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('Skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS Code & NPM',
          point: 9,
          isTop: false,
        },
        {
          name: 'Git and Terminal',
          point: 8,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],

      hobbies: [
        {
          name: 'Ручні вироби з дерева',
          isMain: true,
        },
        {
          name: 'Малювання',
          isMain: true,
        },
        {
          name: 'Вишивка',
          isMain: false,
        },
      ],
    },

    footer,
  })
})

router.get('/education', function (req, res) {
  res.render('education', {
    page: {
      title: 'Resume | Education',
    },

    header,

    footer,

    main: {
      educations: [
        {
          name: 'Кременчуцька гімназія №22',
          isEnd: true,
        },
        {
          name: 'Кременчуцький ліцей №6',
          isEnd: true,
        },
        {
          name: 'Харківський політехнічний інститут',
          isEnd: true,
        },
        {
          name: 'Харківський національний університет імені В.Н. Каразіна',
          isEnd: false,
        },
      ],

      certificates: [
        {
          name: 'Сертифікат про повну середню освіту',
          id: 4224,
        },
        {
          name: 'Сертифікат учасника НМТ',
          id: 2006,
        },
        {
          name: 'Сертифікат про здобуття вищої освіти рівня "Бакалавр"',
          id: 1123,
        },
      ],
    },
  })
})

// ================================================================

router.get('/work', function (req, res) {
  res.render('work', {
    layout: 'big',

    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about: 'Про Junior Fullstack Developer',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],

              stackAmount: 3,

              awards: [
                {
                  name: 'Винагорода IT Brains',
                },
                {
                  name: 'SEO-award',
                },
              ],

              awardAmount: 2,
            },
          ],
        },
      ],
    },

    footer,
  })
})

// ================================================================
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: 'person',
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})



router.get('/bootstrap', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('bootstrap', {
    layout: 'bootstrap'
  })
  //                  ↑↑ сюди вводимо JSON дані
})

router.get('/bootstrap5', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('bootstrapless5', {
    layout: 'bootstrap'
  })
  //                  ↑↑ сюди вводимо JSON дані
})

router.get('/bootstrap3', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('bootstrapLess3', {
    layout: 'bootstrap'
  })
  //                  ↑↑ сюди вводимо JSON дані
})

router.get('/bootstrap4', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('bootstrapLess4', {
    layout: 'bootstrap'
  })
  //                  ↑↑ сюди вводимо JSON дані
})

router.get('/task31', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('task31', {
    layout: 'bootstrap',
    navigation: {
      links: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
      ],
      button: {
        text: 'Lets start',
        href: 'https://nodejs.org/en/',
      },
    },
    header: {
      title: 'Welcome to Our Website',
      description:
        'We offer innovative solutions to help grow your business. Our team of experts is committed to providing tailored strategies that deliver the best results.',
      button: {
        text: 'Learn More',
        link: 'https://www.youtube.com/',
      },
    },
    city: {
      title: 'City list',
      cards: [
        {
          picture: {
            src: 'https://picsum.photos/400/200',
            alt: 'New York',
          },
          title: 'New York City',
          description:
            'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park.',
          button: {
            text: 'Read',
            href: 'https://github.com/',
          },
        },
        {
          picture: {
            src: 'https://picsum.photos/400/200',
            alt: 'Paris',
          },
          title: 'Paris',
          description:
            "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy, and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture, haute couture fashion houses, and designer boutiques along the Rue du Faubourg Saint-Honoré.",
          button: {
            text: 'Read',
            href: 'https://github.com/',
          },
        },
        {
          picture: {
            src: 'https://picsum.photos/400/200',
            alt: 'Tokyo',
          },
          title: 'Tokyo',
          description:
            "Tokyo, Japan’s bustling capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum).",
          button: {
            text: 'Read',
            href: 'https://github.com/',
          },
        },
        {
          picture: {
            src: 'https://picsum.photos/400/200',
            alt: 'Sydney',
          },
          title: 'Sydney',
          description:
            "Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harborfront Opera House, with a distinctive sail-like design. Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby. Sydney Tower’s outdoor platform, the Skywalk, offers 360-degree views of the city and suburbs.",
          button: {
            text: 'Read',
            href: 'https://github.com/',
          },
        },
      ],
    },
    winner: {
      title: 'Our winners',
      table: {
        head: ['#', 'name', 'surname', 'nickname'],
        user: [
          {
            place: 1,
            name: 'Ada',
            surname: 'Lovelace',
            nickname: 'The Enchantress of Numbers',
          },
          {
            place: 2,
            name: 'Grace',
            surname: 'Hopper',
            nickname: 'Amazing Grace',
          },
          {
            place: 3,
            name: 'Katherine',
            surname: 'Johnson',
            nickname: 'The Human Computer',
          },
        ],
      },
    },
    gallery: {
      title: 'Picture history',
      cards: [
        {
          name: 'The Mona Lisa',
          items: [
            'Painting',
            'Oil on poplar panel',
            '1503-1519',
          ],
        },
        {
          name: 'The Persistence of Memory',
          items: ['Painting', 'Oil on canvas', '1931'],
        },
        {
          name: 'The Starry Night',
          items: ['Painting', 'Oil on canvas', '1889'],
        },
      ],
    },
    relaxion: {
      title: 'Relax',
      cards: [
        {
          header: 'Meditation',
          title: 'The Benefits of Meditation',
          description:
            'Meditation can help reduce stress, anxiety, and depression, and improve overall well-being. Studies have also shown that regular meditation practice can enhance cognitive function and even boost the immune system.',
        },
        {
          header: 'Hydration',
          title: 'The Importance of Hydration',
          description:
            'Drinking enough water is essential for good health. Dehydration can lead to a range of symptoms, including fatigue, headaches, and constipation. It can also increase the risk of kidney stones and other health problems.',
        },
        {
          header: 'Yoga',
          title: 'The Benefits of Yoga',
          description:
            'Yoga can improve flexibility, strength, and balance, and help reduce stress and anxiety. It has also been shown to improve heart health and promote a sense of well-being.',
        },
        {
          header: 'Sunscreen',
          title: 'The Importance of Sunscreen',
          description:
            "Protecting your skin from the sun's harmful rays is crucial for reducing the risk of skin cancer and premature aging. Experts recommend using a broad-spectrum sunscreen with an SPF of at least 30 and reapplying every two hours.",
        },
      ],
    },
    rest: {
      cards: [
        {
          header: 'Cooking',
          title: 'The Joy of Cooking',
          description:
            'Cooking is a creative outlet that can bring people together over delicious food.',
          button: 'Learn More',
          footer: 'Photo by Brooke Lark on Unsplash',
        },
        {
          header: 'Travel',
          title: 'The Benefits of Traveling',
          description:
            'Traveling broadens your perspective, provides new experiences, and creates lasting memories.',
          button: 'Explore',
          footer: 'Photo by Sime Basioli on Unsplash',
        },
      ],
    },
    proposition: {
      title: 'Proposition',
      card: [
        {
          header: 'Our Approach',
          title: 'Innovative Solutions for Your Business',
          description:
            'We create effective solutions that cater to your business needs.',
        },
        {
          header: 'Our Expertise',
          title: 'Trusted and Experienced Professionals',
          description:
            'Our team of experts delivers tailored strategies for best results.',
        },
      ],
    },
    footer: {
      title: 'Navigation',
      navigation: [
        {
          text: 'Home',
          href: 'https://github.com/',
        },
        {
          text: 'Contacts',
          href: 'https://www.google.com/',
        },
        {
          text: 'Help',
          href: 'https://www.youtube.com/',
        },
      ],
      socialMedia: [
        {
          name: 'Facebook',
          link: 'https://www.facebook.com/',
        },
        {
          name: 'Twitter',
          link: 'https://twitter.com/',
        },
        {
          name: 'Instagram',
          link: 'https://www.instagram.com/',
        },
      ],
      partners: [
        {
          name: 'Acme Inc.',
          link: 'https://www.acme.com/',
        },
        {
          name: 'Globex Corporation',
          link: 'https://www.globex.com/',
        },
        {
          name: 'Stark Industries',
          link: 'https://www.starkindustries.com/',
        },
      ],
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})


router.get('/bio', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('bio', {

    layout: 'bio',

    name: 'Albert Einstein',
    birthdate: 'March 14, 1879',
    birthplace:
      'Ulm, Kingdom of Württemberg, German Empire',
    deathdate: 'April 18, 1955',
    deathplace: 'Princeton, New Jersey, United States',
    nationality: 'Swiss, German, American',
    occupation: 'Theoretical Physicist',
    known_for: [
      'Theory of Relativity',
      'E=mc²',
      'Photoelectric Effect',
      'Brownian Motion',
    ],
    education: [
      {
        degree: 'Doctor of Philosophy',
        field: 'Physics',
        institution: 'University of Zurich',
        year: 1905,
      },
    ],
    notable_publications: [
      {
        title: 'On the Electrodynamics of Moving Bodies',
        year: 1905,
        publisher: 'Annalen der Physik',
      },
      {
        title:
          'Does the Inertia of a Body Depend Upon Its Energy Content?',
        year: 1905,
        publisher: 'Annalen der Physik',
      },
    ],
    partners: [
      {
        name: 'Mileva Marić',
        relationship: 'First wife',
        years: '1903-1919',
      },
      {
        name: 'Elsa Einstein',
        relationship:
          "Second wife, also Einstein's first cousin",
        years: '1919-1936',
      },
    ],
    awards: [
      {
        title: 'Nobel Prize in Physics',
        year: 1921,
        description:
          'Awarded for his explanation of the photoelectric effect',
      },
    ],
    influences: [
      'Isaac Newton',
      'James Clerk Maxwell',
      'Hermann Minkowski',
    ],
    influenced: [
      'Niels Bohr',
      'Erwin Schrödinger',
      'Werner Heisenberg',
      'Richard Feynman',
    ],
    quotes: [
      'Imagination is more important than knowledge.',
      'I have no special talent. I am only passionately curious.',
      'The important thing is not to stop questioning.',
      'The most beautiful thing we can experience is the mysterious. It is the source of all true art and all science.',
    ],
    major_discoveries: [
      {
        title: 'Photoelectric Effect',
        year: 1905,
        description:
          'Einstein explained the photoelectric effect, where electrons are emitted from a metal surface when it is illuminated by light.',
      },
    ],
    contributions: {
      title: 'Inventions',
      description:
        'Leonardo designed and invented a wide variety of machines and devices, including a helicopter, a diving suit, and a self-propelled cart. Many of his inventions were centuries ahead of their time.',
      year: 'Late 15th to early 16th century',
      field: 'Invention',
    },
  })
})

router.get('/bootstrap6', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('bootstrapless6', {
    layout: 'bootstrap'
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// Підключаємо роутер до бек-енду
module.exports = router
