module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://anshulsood11.github.io/`,
    // Your Name
    name: 'Anshul Sood',
    // Main Site Title
    title: `Anshul Sood | Software Engineer`,
    // Description that goes under your name in main bio
    description: `Software Developer from India.`,
    // Optional: Twitter account handle
    // author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/anshulsood11`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/anshulsood11/`,
    // Content of the About Me section
    about: `I'm a Software Engineer with over a year of experience, currently working at Walmart. I love building innovative and impactful products with a primary focus on writing clean, efficient, scalable code. Though primarily interested in Backend development, I love exploring other fields and have done projects across Full-stack development, Deep Learning and Robotics.\nGet in touch at anshulsoodnet@gmail.com if you have an exciting opportunity or want to collaborate on a project.`,
    education: [
      {
        name: 'B.E. Computer Science, Birla Institute of Technology and Science, Pilani',
        info: '2017 - 2021',
        description: 'Activities and Societies: Electronics and Robotics Club, Spree 2018 (Sports Fest) Organizing Committee',
        link:''
      }
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Software Engineer 2, Walmart Global Tech',
        info: 'July 2021 - Present',
        description: '‣ Building core capabilities to facilitate international trade on the Walmart eCommerce platform.\n'+
        '‣ Have worked in domains like Cataloging, Logistics, Seller Onboarding etc., primarily contributing in backend development.\n'+
        '‣ Tech Stack: Java, Spring Framework, Kafka, Azure, GraphQL',
        link:''
      },
      {
        name: 'Intern, CDAC',
        info: 'Aug 2020 - Dec 2020',
        description: '‣ Worked on providing Number Plate Recognition as a service.\n'+
        '‣ Built a distributed pipeline for serving Deep Learning models to several video streams in parallel.\n'+
        '‣ Solved the challenges of Object Tracking, Stateful Processing and Distributed Transactions.\n'+
        '‣ Technologies: Python, Java, Kafka, gRPC, Redis, Docker, MySQL',
        link:''
      }, 
      {
        name: 'Summer Intern, Walmart Global Tech',
        info: 'May 2020 - Jul 2020',
        description: '‣ Created a mechanism to report which Advertising campaigns must be paused or resumed, depending on the item availability in inventory.\n'+
        '‣ Technologies: Java, SpringBoot, Hibernate, Thymeleaf, MySQL',
        link:''
      }, 
      {
        name: 'Summer Intern, Maruti Suzuki India Limited ',
        info: 'May 2019 - Jul 2019',
        description: '‣ Developed a solution for detecting if a worker is wearing safety gear while working at the workshop, using CCTV cameras.\n'+
        '‣ Used YOLO for object detection and Deep SORT for person tracking.\n'+
        '‣ Technologies: Python, TensorFlow, Tkinter\n'+
        'Code: https://github.com/AnshulSood11/PPE-Detection-YOLO-Deep_SORT',
        link: ''
      }
    ],
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'MyDreamsTravel',
        description:
          'A feature-rich travel blogging site built with ReactJS and Django deployed using AWS Services.',
        link: 'https://mydreamstravel.anshulsood.net',
      },
      {
        name: 'Memory Subsystem',
        description:
          'Implemented a basic memory subsystem in C as a part of Data Storage Technologies course. It consisted of a TLB, 2 level caching and a Main Memory with Paging.',
        link: 'https://github.com/shubh-shah/DSTN_Mem_Subsystem',
      },
      {
        name: 'Twitter Analytics for Demand Forecasting',
        description:
          'Tweets are fetched from the Twitter API and their sentiment is analyzed to predict the relative demand for products at a chosen locality. This info can help a retailer stock its inventory accordingly.',
        link: 'https://github.com/AnshulSood11/Twitter-Demand-Forecasting',
      },
      {
        name: 'Engagement Intensity Prediction',
        description:
          'Performs real-time engagement intensity prediction using gaze and pose estimation. The feed is segmented into 10-second video clips, from which facial features are extracted, and then a neural network determines the level of engagement at the given instant.',
        link: 'https://github.com/AnshulSood11/Engagement-Level-Prediction',
      },
      {
        name: 'Position Tracker',
        description:
          'Developed a localization system for an autonomous bot developed by the college Robotics Club. It polls data from an Optical Displacement Sensor, Gyroscope, Accelerometer, Magnetometer, and fuses them using Kalman filtering. Used Raspberry Pi as the onboard computer.',
        link: 'https://github.com/AnshulSood11/Position-Tracker'
      }
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Java, Spring, Python, Django, JavaScript, React.js, C',
      },
      {
        name: 'Databases',
        description: 'MySQL, MS SQL, Redis, PostgreSQL',
      },
      {
        name: 'Other',
        description:
          'Kafka, gRPC, GraphQL, Docker, Git, Bash, AWS, Microservices, Deep Learning, Data Mining',
      },
    ],
    recognition: [
      {
        name: 'Bravo Award for Engineering Excellence',
        info: 'Walmart Global Tech, Nov 2021',
        description: '',
        link:''
      },
      {
        name: 'Project selected for national level INSPIRE Award Exhibition',
        info: 'Department of Science and Technology India, Dec 2011',
        description: '',
        link:''
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
