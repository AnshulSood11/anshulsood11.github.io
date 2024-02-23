module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://anshulsood11.github.io/`,
    // Your Name
    name: 'Anshul Sood',
    // Main Site Title
    title: `Anshul Sood | Software Engineer`,
    // Description that goes under your name in main bio
    description: `Backend Systems and Web Services Expert`,
    // Optional: Twitter account handle
    // author: `@anshulsood11`,
    // Optional: Github account URL
    github: `https://github.com/anshulsood11`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/anshulsood11/`,
    // Content of the About Me section
    about: `I'm a Software engineer at Nutanix, building cool distributed services for Nutanix AHV (Hypervisor) Management. Previously, I worked at Walmart for 2.5 years in eCommerce and logistics domain. I graduated from BITS Goa in 2021 with a BE in Computer Science.
    
    My core skills are:
    ‣ Building highly scalable microservices using Java, SpringBoot, Kafka, GraphQL and gRPC.
    ‣ Writing Spark jobs for large scale data processing.
    ‣ Full-stack Development with ReactJS, SpringBoot/Django with backend on Cloud(AWS) or Serverless(Firebase).
    ‣ Building Deep Learning applications and deploying Machine Learning models at scale.
    ‣ Building reliable and resilient services with Monitoring, Alerting and Disaster Recovery processes in place.

    Though primarily interested in Backend systems, I love exploring tech and have done projects across Full-stack development, Deep Learning and Robotics.
    Get in touch at anshulsoodnet@gmail.com if you want to collaborate on a project or have an exciting opportunity for me.`,
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Member of Technical Staff - 2, Nutanix',
        info: 'Feb 2024 - Present',
        description: 'Building Distributed Services in Acropolis Hypervisor (AHV) Management team.\n'+
        'Tech Stack: Go, Python, Bash',
        link:''
      },
      {
        name: 'Software Engineer 3, Walmart Global Tech',
        info: 'Aug 2023 - Jan 2024',
        description: '‣ Built SWW 2.0 Billing system. SWW - Ship with Walmart, is a multi-tenant SaaS product for providing shipping services with 3rd party carriers.\n'+
        '‣ Involved in end to end product development from requirements gathering, design (LLD) and coding.\n'+
        '‣ Made the complete pipeline Highly Available through multi-region data replication, multi-region Crons and Kafka failover.\n'+
        '‣ Built a solid Reconciliation System to tackle the challenges associated with a distributed system as well as ensure the accuracy of transactions processed through the Billing System.\n'+
        'Tech Stack: Java, SpringBoot, Kafka, Azure',
        link:''
      },
      {
        name: 'Software Engineer 2, Walmart Global Tech',
        info: 'Jul 2021 - Jul 2023',
        description: '‣ Developed a GraphQL BFF for an application to onboard sellers from US to Canada. Integrated with UI through API Gateway.\n'+
        '‣ Wrote a Spark Job for generating reports to help sellers price their products profitably in the Mexico market.\n'+
        '‣ Worked on the Catalog Porting feature to help sellers port their catalogs between international marketplaces. A catalog could involve millions of items in some cases and the feature was scalable in that way.\n'+
        'Tech Stack: Java, SpringBoot, Spark, GraphQL, Azure',
        link:''
      },
      {
        name: 'Intern, CDAC',
        info: 'Aug 2020 - Dec 2020',
        description: '‣ Created a distributed pipeline for serving Deep Learning models to provide Number Plate Recognition at scale.\n'+
        '‣ Followed microservices pattern to make each model independently scalable and handle multiple video streams in parallel.\n'+
        '‣ Solved the challenges of Ordered Processing, Stateful Processing and Transactions in a distributed application.\n'+
        '‣ Technologies: Python, Java, Kafka, gRPC, Redis, Docker, MySQL',
        link:''
      }, 
      {
        name: 'Summer Intern, Walmart Global Tech',
        info: 'May 2020 - Jul 2020',
        description: '‣ Created a mechanism to report which Advertising campaigns must be paused or resumed, depending on the item availability in inventory.\n'+
        '‣ Optimized performance using parallelization and batching while ensuring the API rate limit is not breached.\n'+
        '‣ Technologies: Java, SpringBoot, Hibernate, Thymeleaf, MySQL',
        link:''
      }
    ],
    education: [
      {
        name: 'B.E. Computer Science, Birla Institute of Technology and Science',
        info: '2017 - 2021',
        description: 'Activities and Societies: Electronics and Robotics Club, Spree 2018 (Sports Fest) Organizing Committee',
        link:''
      }
    ],
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Loghouse',
        description:
          '[In Progress] A simple service to store logs built with scalablity in mind by applying distributed systems concepts like Service Discovery, Coordination with Consensus and Load Balancing.',
        link: 'https://github.com/AnshulSood11/Loghouse',
      },
      {
        name: 'MyDreamsTravel',
        description:
          'A feature-rich travel blogging site with Authentication, Rich text editor, Image upload support etc. features. Built with ReactJS and deployed on AWS. (Backend currently unavailable due to expiry of free-tier)',
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
        name: 'PPE Detection using Computer Vision',
        description:
          'A solution for detecting if a worker is wearing safety gear while working at the workshop, using CCTV cameras. Uses YOLO for object detection and Deep SORT for person tracking. Has a dashboard built with Tkinter to display real-time feed and show alerts.',
        link: 'https://github.com/AnshulSood11/PPE-Detection-YOLO-Deep_SORT',
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
          'Java, SpringBoot, Python, Django, JavaScript, React.js, C, Go',
      },
      {
        name: 'Databases',
        description: 'Azure SQL, MySQL, PostgreSQL, Google Firestore, Redis',
      },
      {
        name: 'Other',
        description:
          'Kafka, GraphQL, SQL, gRPC, Spark, Docker, Git, Bash, AWS, Firebase, Deep Learning, Data Mining',
      },
    ],
    recognition: [
      {
        name: 'Bravo Award for Impact',
        info: 'Walmart Global Tech, July 2022',
        description: '',
        link:''
      },
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
