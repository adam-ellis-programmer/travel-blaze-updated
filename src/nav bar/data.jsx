import {
  Fa500Px,
  FaAccusoft,
  FaAdversal,
  FaAvianex,
  FaBitcoin,
  FaBtc,
  FaCodiepie,
  FaDocker,
  FaGithubSquare,
} from 'react-icons/fa'
import { nanoid } from 'nanoid'
// prettier-ignore

const sublinks = [
  {
    pageId: nanoid(),
    page: 'destination',
    headerData: {
      labelOne: 'where to?',
      labelTwo: 'activity',
      labelThree: 'go',
    },
    defaultImgs: [
      {
        img: 'https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5ldyUyMHlvcmt8ZW58MHx8MHx8fDA%3D',
      },
    ],
    links: [
      {
        id: nanoid(),
        label: 'america',
        icon: <Fa500Px />,
        url: '/destination/america',
        mainImg:
          'https://plus.unsplash.com/premium_photo-1676667573109-273586405c96?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y291cGxlfGVufDB8fDB8fHww',
        subData: [
          {
            id: nanoid(),
            activity: 'working america ',
            img: 'https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5ldyUyMHlvcmt8ZW58MHx8MHx8fDA%3D',
            url: '#',
          },
          {
            id: nanoid(),
            activity: 'Adventure america ',
            img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFtZXJpY2F8ZW58MHx8MHx8fDA%3D',
            url: '#',
          },
          {
            id: nanoid(),
            activity: 'Volunteering america',
            img: 'https://plus.unsplash.com/premium_photo-1680836316292-74ea0b9c6ce7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG5ldyUyMHlvcmt8ZW58MHx8MHx8fDA%3D',
            url: '#',
          },
          {
            id: nanoid(),
            activity: 'Couples america ',
            img: 'https://images.unsplash.com/photo-1682695795798-1b31ea040caf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8Y291cGxlfGVufDB8fDB8fHww',
            url: '#',
          },
          {
            id: nanoid(),
            activity: 'Around america  ',
            img: 'https://plus.unsplash.com/premium_photo-1676667573109-273586405c96?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y291cGxlfGVufDB8fDB8fHww',
            url: '#',
          },
        ],
      },
      {
        id: nanoid(),
        label: 'australia',
        icon: <FaAccusoft />,
        url: '/destination/australia',
        mainImg:
          'https://images.unsplash.com/photo-1560246144-2c33654542e4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGF1c3RyYWxpYXxlbnwwfHwwfHx8MA%3D%3D',
        subData: [
          {
            id: nanoid(),
            activity: 'working australia ',
            img: 'https://images.unsplash.com/photo-1560246144-2c33654542e4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGF1c3RyYWxpYXxlbnwwfHwwfHx8MA%3D%3D',
            url: '#',
          },
          {
            id: nanoid(),
            activity: 'Adventure australia ',
            img: 'https://images.unsplash.com/photo-1494233892892-84542a694e72?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXVzdHJhbGlhfGVufDB8fDB8fHww',
            url: '#',
          },
          {
            id: nanoid(),
            activity: 'Volunteering australia',
            img: 'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXVzdHJhbGlhfGVufDB8fDB8fHww',
            url: '#',
          },
          {
            id: nanoid(),
            activity: 'Couples australia ',
            img: 'https://images.unsplash.com/photo-1598580415913-0e2323a66f02?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGF1c3RyYWxpYXxlbnwwfHwwfHx8MA%3D%3D',
            url: '#',
          },
          {
            id: nanoid(),
            activity: 'Around australia  ',
            img: 'https://images.unsplash.com/photo-1509259305526-037fbbf698fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF1c3RyYWxpYXxlbnwwfHwwfHx8MA%3D%3D',
            url: '#',
          },
        ],
      },
      {
        id: nanoid(),
        label: 'south asia',
        icon: <FaAdversal />,
        url: '/destination/asia',
        mainImg:
          'https://images.unsplash.com/photo-1584227039542-1871579a7d16?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGFsb25nJTIwYmF5fGVufDB8fDB8fHww',
        subData: [
          {
            id: nanoid(),
            activity: '12 day Vietnam Explorer',
            img: 'https://images.unsplash.com/photo-1584227039542-1871579a7d16?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGFsb25nJTIwYmF5fGVufDB8fDB8fHww',
            url: '#',
          },
          {
            id: nanoid(),
            activity: 'Thailand Packpacket Experience',
            img: 'https://images.unsplash.com/photo-1494949360228-4e9bde560065?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRoYWlsYW5kfGVufDB8fDB8fHww',
            url: '#',
          },
          {
            id: nanoid(),
            activity: '24 Day Thailand and Vietnam',
            img: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D',
            url: '#',
          },
          {
            id: nanoid(),
            activity: '15 Cambodia Explorer',
            img: 'https://plus.unsplash.com/premium_photo-1661924223647-40abbac077c0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtYm9kaWF8ZW58MHx8MHx8fDA%3D',
            url: '#',
          },
          {
            id: nanoid(),
            activity: '30 Day Asia Trip',
            img: 'https://images.unsplash.com/photo-1602642977157-b7c8b8003afd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbWJvZGlhfGVufDB8fDB8fHww',
            url: '#',
          },
        ],
      },
    ],
  },

  {
    pageId: nanoid(),
    page: 'activities',
    defaultImgs: [
      {
        img: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWR2ZW50dXJlfGVufDB8fDB8fHww',
      },
    ],
    headerData: {
      labelOne: 'activity',
      labelTwo: 'what to do',
      labelThree: 'lets go',
    },
    links: [
      {
        id: nanoid(),
        label: 'adventure',
        // icon: <FaBiking />,
        url: '/activities/adventure',
        mainImg:
          'https://images.unsplash.com/photo-1489914169085-9b54fdd8f2a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWR2ZW50dXJlfGVufDB8fDB8fHww',
        subData: [
          {
            id: nanoid(),
            activity: 'Mountain Hiking',
            img: 'https://plus.unsplash.com/premium_photo-1661814278311-d59ab0b4a676?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGlraW5nfGVufDB8fDB8fHww',
            url: '#',
          },
          {
            id: nanoid(),
            activity: 'Extreme Sports',
            img: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFmdGluZ3xlbnwwfHwwfHx8MA%3D%3D',
            url: '#',
          },
          {
            id: nanoid(),
            activity: 'Scuba Diving',
            img: 'https://images.unsplash.com/photo-1544551763-8dd44758c2dd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHNjdWJhJTIwZGl2aW5nfGVufDB8fDB8fHww',
            url: '#',
          },
          {
            id: nanoid(),
            activity: 'Rock Climbing',
            img: 'https://images.unsplash.com/photo-1522362485439-83fcff4673f0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9jayUyMGNsaW1iaW5nfGVufDB8fDB8fHww',
            url: '#',
          },
          {
            id: nanoid(),
            activity: 'Safari Expeditions',
            img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FmYXJpfGVufDB8fDB8fHww',
            url: '#',
          },
        ],
      },
      {
        id: nanoid(),
        label: 'cultural',
        // icon: <FaUniversity />,
        url: '/activities/cultural',
        mainImg:
          'https://images.unsplash.com/photo-1522582451902-3545817f6046?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGN1bHR1cmV8ZW58MHx8MHx8fDA%3D',
        subData: [
          {
            id: nanoid(),
            activity: 'Historical Tours',
            img: 'https://images.unsplash.com/photo-1616849813254-6df6a8295798?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGhpc3RvcmljYWwlMjBwbGFjZXxlbnwwfHwwfHx8MA%3D%3D',
            url: '#',
          },
          {
            id: nanoid(),
            activity: 'Art Workshops',
            img: 'https://plus.unsplash.com/premium_photo-1673676884428-ad8c7271c16e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGFydGlzdHxlbnwwfHwwfHx8MA%3D%3D',
            url: '#',
          },
          {
            id: nanoid(),
            activity: 'Culinary Experiences',
            img: 'https://plus.unsplash.com/premium_photo-1683707120403-9add00a6140e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGN1bGluYXJ5fGVufDB8fDB8fHww',
            url: '#',
          },
          {
            id: nanoid(),
            activity: 'Music Festivals',
            img: 'https://plus.unsplash.com/premium_photo-1719066378950-f9df97d6e083?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bXVzaWMlMjBmZXN0aXZhbHxlbnwwfHwwfHx8MA%3D%3D',
            url: '#',
          },
          {
            id: nanoid(),
            activity: 'Language Immersion',
            img: 'https://images.unsplash.com/photo-1534777367038-9404f45b869a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGN1bHR1cmV8ZW58MHx8MHx8fDA%3D',
            url: '#',
          },
        ],
      },
      {
        id: nanoid(),
        label: 'wellness',
        // icon: <FaYoga />,
        url: '/activities/wellness',
        mainImg:
          'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VsbG5lc3N8ZW58MHx8MHx8fDA%3D',
        subData: [
          {
            id: nanoid(),
            activity: 'Yoga Retreats',
            img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eW9nYXxlbnwwfHwwfHx8MA%3D%3D',
            url: '#',
          },
          {
            id: nanoid(),
            activity: 'Meditation Camps',
            img: 'https://images.unsplash.com/photo-1444312645910-ffa973656eba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVkaXRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
            url: '#',
          },
          {
            id: nanoid(),
            activity: 'Spa Experiences',
            img: 'https://images.unsplash.com/photo-1585815157396-ad62043f721b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhdW5hfGVufDB8fDB8fHww',
            url: '#',
          },
          {
            id: nanoid(),
            activity: 'Nature Healing',
            img: 'https://plus.unsplash.com/premium_photo-1663047725430-f855f465b6a4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwaGVhbGluZ3xlbnwwfHwwfHx8MA%3D%3D',
            url: '#',
          },
          {
            id: nanoid(),
            activity: 'Fitness Camps',
            img: 'https://images.unsplash.com/photo-1450500392544-c2cb0fd6e3b8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZpdG5lc3MlMjBjYW1wfGVufDB8fDB8fHww',
            url: '#',
          },
        ],
      },
    ],
  },
]

export default sublinks
