export interface JobTemplate {
  id: number
  title: string
  description: string
  requirements: string[]
  employmentType: string
  salary: string
}

export const jobTemplates: JobTemplate[] = [
  // Software Development
  {
    id: 1,
    title: 'Python Developer',
    description:
      'Develop and maintain web applications and backend services using Python.',
    requirements: [
      'Experience with Python',
      'Knowledge of Django or Flask',
      'Experience with PostgreSQL',
    ],
    employmentType: 'Full-time',
    salary: '7,000 - 10,000',
  },
  {
    id: 2,
    title: 'Java Developer',
    description:
      'Develop and maintain enterprise applications and backend services using Java.',
    requirements: [
      'Experience with Java',
      'Knowledge of Spring Boot',
      'Experience with REST APIs',
    ],
    employmentType: 'Full-time',
    salary: '8,000 - 12,000',
  },
  {
    id: 3,
    title: 'C# Developer',
    description:
      'Work on the development and maintenance of business applications using C# and .NET.',
    requirements: [
      'Experience with C#',
      'Knowledge of .NET',
      'Experience with relational databases',
    ],
    employmentType: 'Full-time',
    salary: '7,500 - 11,000',
  },
  {
    id: 4,
    title: '.NET Developer',
    description:
      'Develop scalable backend applications and services using the Microsoft .NET platform.',
    requirements: [
      'Experience with .NET',
      'Knowledge of C#',
      'Experience with SQL Server',
    ],
    employmentType: 'Full-time',
    salary: '8,000 - 12,000',
  },
  {
    id: 5,
    title: 'Node.js Developer',
    description:
      'Build backend services and APIs using Node.js and modern JavaScript technologies.',
    requirements: [
      'Experience with Node.js',
      'Knowledge of JavaScript or TypeScript',
      'Experience with REST APIs',
    ],
    employmentType: 'Full-time',
    salary: '7,000 - 10,000',
  },
  {
    id: 6,
    title: 'PHP Developer',
    description:
      'Develop and maintain web applications using PHP and modern backend technologies.',
    requirements: [
      'Experience with PHP',
      'Knowledge of Laravel',
      'Experience with MySQL',
    ],
    employmentType: 'Full-time',
    salary: '6,000 - 9,000',
  },
  {
    id: 7,
    title: 'React Developer',
    description:
      'Build responsive and reusable user interfaces for modern web applications.',
    requirements: [
      'Experience with React',
      'Knowledge of JavaScript or TypeScript',
      'Experience with REST APIs',
    ],
    employmentType: 'Full-time',
    salary: '7,000 - 10,000',
  },
  {
    id: 8,
    title: 'Frontend Developer',
    description:
      'Develop user interfaces and reusable frontend components for web applications.',
    requirements: [
      'Experience with HTML, CSS and JavaScript',
      'Knowledge of React or Vue',
      'Understanding of responsive design',
    ],
    employmentType: 'Full-time',
    salary: '6,500 - 9,500',
  },
  {
    id: 9,
    title: 'Backend Developer',
    description:
      'Develop APIs, backend services and integrations for business applications.',
    requirements: [
      'Experience with backend development',
      'Knowledge of REST APIs',
      'Experience with relational databases',
    ],
    employmentType: 'Full-time',
    salary: '7,000 - 11,000',
  },
  {
    id: 10,
    title: 'Full Stack Developer',
    description:
      'Develop complete web applications across frontend and backend layers.',
    requirements: [
      'Experience with frontend development',
      'Experience with backend development',
      'Knowledge of relational databases',
    ],
    employmentType: 'Full-time',
    salary: '8,000 - 12,000',
  },

  // Data and BI
  {
    id: 11,
    title: 'Data Analyst',
    description:
      'Analyze business data and create reports to support strategic decision-making.',
    requirements: [
      'Knowledge of SQL',
      'Experience with data analysis',
      'Knowledge of Excel or BI tools',
    ],
    employmentType: 'Full-time',
    salary: '5,500 - 8,000',
  },
  {
    id: 12,
    title: 'Data Engineer',
    description:
      'Build and maintain data pipelines and infrastructure for analytical workloads.',
    requirements: [
      'Experience with Python',
      'Knowledge of SQL',
      'Experience with data pipelines',
    ],
    employmentType: 'Full-time',
    salary: '9,000 - 14,000',
  },
  {
    id: 13,
    title: 'Data Scientist',
    description:
      'Develop analytical models and extract insights from large datasets.',
    requirements: [
      'Experience with Python',
      'Knowledge of statistics',
      'Experience with machine learning',
    ],
    employmentType: 'Full-time',
    salary: '9,000 - 15,000',
  },
  {
    id: 14,
    title: 'Business Intelligence Analyst',
    description:
      'Create dashboards and analytical solutions to support business decisions.',
    requirements: [
      'Experience with Power BI',
      'Knowledge of SQL',
      'Experience with data visualization',
    ],
    employmentType: 'Full-time',
    salary: '5,500 - 8,500',
  },
  {
    id: 15,
    title: 'ETL Developer',
    description:
      'Develop and maintain data extraction, transformation and loading processes.',
    requirements: [
      'Experience with ETL processes',
      'Knowledge of SQL',
      'Experience with Python or similar languages',
    ],
    employmentType: 'Full-time',
    salary: '7,000 - 10,000',
  },
  {
    id: 16,
    title: 'Analytics Engineer',
    description:
      'Build reliable analytical datasets and data models for business teams.',
    requirements: [
      'Strong SQL skills',
      'Experience with data modeling',
      'Knowledge of Python',
    ],
    employmentType: 'Full-time',
    salary: '8,000 - 12,000',
  },
  {
    id: 17,
    title: 'SQL Developer',
    description:
      'Develop database queries, procedures and solutions for business applications.',
    requirements: [
      'Advanced SQL knowledge',
      'Experience with relational databases',
      'Knowledge of database optimization',
    ],
    employmentType: 'Full-time',
    salary: '6,500 - 9,500',
  },
  {
    id: 18,
    title: 'Power BI Specialist',
    description:
      'Design and maintain interactive dashboards and reports using Power BI.',
    requirements: [
      'Experience with Power BI',
      'Knowledge of DAX',
      'Knowledge of SQL',
    ],
    employmentType: 'Full-time',
    salary: '6,000 - 9,000',
  },

  // DevOps and Cloud
  {
    id: 19,
    title: 'DevOps Engineer',
    description:
      'Automate deployment processes and maintain infrastructure for software applications.',
    requirements: [
      'Experience with Docker',
      'Knowledge of CI/CD',
      'Experience with Linux',
    ],
    employmentType: 'Full-time',
    salary: '9,000 - 14,000',
  },
  {
    id: 20,
    title: 'Cloud Engineer',
    description:
      'Design and maintain cloud infrastructure and services for business applications.',
    requirements: [
      'Experience with cloud platforms',
      'Knowledge of networking',
      'Experience with Linux',
    ],
    employmentType: 'Full-time',
    salary: '9,000 - 14,000',
  },
  {
    id: 21,
    title: 'AWS Cloud Developer',
    description:
      'Develop and maintain cloud-based applications and services using AWS.',
    requirements: [
      'Experience with AWS',
      'Knowledge of Python or Java',
      'Experience with cloud services',
    ],
    employmentType: 'Full-time',
    salary: '8,000 - 13,000',
  },
  {
    id: 22,
    title: 'Cloud Infrastructure Analyst',
    description:
      'Support and maintain cloud infrastructure, monitoring and deployment environments.',
    requirements: [
      'Knowledge of cloud infrastructure',
      'Experience with Linux',
      'Knowledge of networking',
    ],
    employmentType: 'Full-time',
    salary: '6,500 - 10,000',
  },
  {
    id: 23,
    title: 'Site Reliability Engineer',
    description:
      'Improve system reliability, monitoring and automation across production environments.',
    requirements: [
      'Experience with Linux',
      'Knowledge of monitoring tools',
      'Experience with automation',
    ],
    employmentType: 'Full-time',
    salary: '10,000 - 15,000',
  },
  {
    id: 24,
    title: 'Platform Engineer',
    description:
      'Build internal platforms and automation tools that improve software delivery.',
    requirements: [
      'Experience with Docker',
      'Knowledge of Kubernetes',
      'Experience with CI/CD',
    ],
    employmentType: 'Full-time',
    salary: '10,000 - 15,000',
  },

  // QA and Testing
  {
    id: 25,
    title: 'QA Analyst',
    description:
      'Plan and execute software tests to ensure product quality and reliability.',
    requirements: [
      'Experience with software testing',
      'Knowledge of test cases',
      'Understanding of QA processes',
    ],
    employmentType: 'Full-time',
    salary: '5,000 - 7,500',
  },
  {
    id: 26,
    title: 'QA Automation Engineer',
    description:
      'Develop automated tests and improve the reliability of software delivery pipelines.',
    requirements: [
      'Experience with automated testing',
      'Knowledge of Selenium or Cypress',
      'Programming experience',
    ],
    employmentType: 'Full-time',
    salary: '7,000 - 11,000',
  },
  {
    id: 27,
    title: 'Software Test Engineer',
    description:
      'Design and execute functional and integration tests for software applications.',
    requirements: [
      'Experience with software testing',
      'Knowledge of API testing',
      'Knowledge of test automation',
    ],
    employmentType: 'Full-time',
    salary: '6,000 - 9,000',
  },
  {
    id: 28,
    title: 'Test Automation Developer',
    description:
      'Create and maintain automated test suites for web and backend applications.',
    requirements: [
      'Experience with test automation',
      'Knowledge of JavaScript or Python',
      'Experience with API testing',
    ],
    employmentType: 'Full-time',
    salary: '6,500 - 10,000',
  },

  // Infrastructure
  {
    id: 29,
    title: 'Systems Administrator',
    description:
      'Maintain servers, operating systems and internal infrastructure environments.',
    requirements: [
      'Experience with Linux',
      'Knowledge of networking',
      'Experience with server administration',
    ],
    employmentType: 'Full-time',
    salary: '5,500 - 8,500',
  },
  {
    id: 30,
    title: 'Linux Administrator',
    description:
      'Manage Linux servers and support infrastructure operations.',
    requirements: [
      'Strong Linux knowledge',
      'Knowledge of networking',
      'Experience with shell scripting',
    ],
    employmentType: 'Full-time',
    salary: '6,000 - 9,000',
  },
  {
    id: 31,
    title: 'Network Analyst',
    description:
      'Monitor and maintain corporate network infrastructure and connectivity.',
    requirements: [
      'Knowledge of TCP/IP',
      'Experience with network infrastructure',
      'Knowledge of network monitoring',
    ],
    employmentType: 'Full-time',
    salary: '5,500 - 8,500',
  },
  {
    id: 32,
    title: 'Infrastructure Engineer',
    description:
      'Design, implement and maintain infrastructure environments supporting business systems.',
    requirements: [
      'Experience with Linux',
      'Knowledge of virtualization',
      'Knowledge of cloud infrastructure',
    ],
    employmentType: 'Full-time',
    salary: '8,000 - 12,000',
  },
  {
    id: 33,
    title: 'IT Support Specialist',
    description:
      'Provide technical support to users and maintain workplace technology environments.',
    requirements: [
      'Experience with technical support',
      'Knowledge of Windows and Linux',
      'Good communication skills',
    ],
    employmentType: 'Full-time',
    salary: '3,500 - 5,500',
  },

  // Security
  {
    id: 34,
    title: 'Cybersecurity Analyst',
    description:
      'Monitor security events and support the implementation of information security controls.',
    requirements: [
      'Knowledge of cybersecurity principles',
      'Experience with security monitoring',
      'Knowledge of networking',
    ],
    employmentType: 'Full-time',
    salary: '7,000 - 11,000',
  },
  {
    id: 35,
    title: 'Information Security Engineer',
    description:
      'Implement and maintain security solutions across infrastructure and applications.',
    requirements: [
      'Experience with information security',
      'Knowledge of network security',
      'Knowledge of security tools',
    ],
    employmentType: 'Full-time',
    salary: '8,000 - 13,000',
  },
  {
    id: 36,
    title: 'Application Security Analyst',
    description:
      'Identify and help remediate security vulnerabilities in software applications.',
    requirements: [
      'Knowledge of application security',
      'Understanding of OWASP principles',
      'Knowledge of web technologies',
    ],
    employmentType: 'Full-time',
    salary: '7,000 - 11,000',
  },
  {
    id: 37,
    title: 'Security Operations Analyst',
    description:
      'Monitor security events and support incident detection and response activities.',
    requirements: [
      'Knowledge of security monitoring',
      'Understanding of incident response',
      'Knowledge of networking',
    ],
    employmentType: 'Full-time',
    salary: '6,000 - 9,000',
  },

  // Product and Project Management
  {
    id: 38,
    title: 'Product Manager',
    description:
      'Define product priorities and work with technology teams to deliver valuable solutions.',
    requirements: [
      'Experience with product management',
      'Knowledge of agile methodologies',
      'Strong communication skills',
    ],
    employmentType: 'Full-time',
    salary: '10,000 - 15,000',
  },
  {
    id: 39,
    title: 'Product Owner',
    description:
      'Manage product backlogs and coordinate requirements between business and development teams.',
    requirements: [
      'Experience as a Product Owner',
      'Knowledge of Scrum',
      'Experience with product backlogs',
    ],
    employmentType: 'Full-time',
    salary: '8,000 - 12,000',
  },
  {
    id: 40,
    title: 'Project Manager',
    description:
      'Coordinate technology projects, timelines and communication between stakeholders.',
    requirements: [
      'Experience with project management',
      'Knowledge of agile methodologies',
      'Strong organizational skills',
    ],
    employmentType: 'Full-time',
    salary: '8,000 - 13,000',
  },
  {
    id: 41,
    title: 'Scrum Master',
    description:
      'Support agile development teams and facilitate continuous improvement.',
    requirements: [
      'Experience with Scrum',
      'Knowledge of agile methodologies',
      'Strong communication skills',
    ],
    employmentType: 'Full-time',
    salary: '7,000 - 11,000',
  },
  {
    id: 42,
    title: 'Technical Project Coordinator',
    description:
      'Coordinate technical projects and support communication between engineering teams and stakeholders.',
    requirements: [
      'Experience coordinating technology projects',
      'Technical background',
      'Good communication skills',
    ],
    employmentType: 'Full-time',
    salary: '7,000 - 10,000',
  },

  // UX and Design
  {
    id: 43,
    title: 'UX Designer',
    description:
      'Design user experiences and interfaces for digital products and web applications.',
    requirements: [
      'Experience with UX design',
      'Knowledge of Figma',
      'Understanding of user research',
    ],
    employmentType: 'Full-time',
    salary: '6,000 - 9,000',
  },
  {
    id: 44,
    title: 'UI Designer',
    description:
      'Create visual interfaces and design systems for digital products.',
    requirements: [
      'Experience with UI design',
      'Knowledge of Figma',
      'Understanding of design systems',
    ],
    employmentType: 'Full-time',
    salary: '5,500 - 8,500',
  },
  {
    id: 45,
    title: 'Product Designer',
    description:
      'Design digital product experiences from initial concepts through final interfaces.',
    requirements: [
      'Experience with product design',
      'Knowledge of Figma',
      'Experience with design systems',
    ],
    employmentType: 'Full-time',
    salary: '7,000 - 10,000',
  },
  {
    id: 46,
    title: 'UX Researcher',
    description:
      'Conduct user research and translate findings into insights for digital products.',
    requirements: [
      'Experience with user research',
      'Knowledge of qualitative research methods',
      'Strong analytical skills',
    ],
    employmentType: 'Full-time',
    salary: '6,000 - 9,000',
  },

  // Other Technology Roles
  {
    id: 47,
    title: 'Technical Writer',
    description:
      'Create and maintain technical documentation for software products and development teams.',
    requirements: [
      'Experience writing technical documentation',
      'Understanding of software development',
      'Strong written communication skills',
    ],
    employmentType: 'Full-time',
    salary: '5,000 - 8,000',
  },
  {
    id: 48,
    title: 'Solutions Architect',
    description:
      'Design technical solutions that meet business requirements and integrate multiple systems.',
    requirements: [
      'Experience with software architecture',
      'Knowledge of cloud platforms',
      'Experience with system integration',
    ],
    employmentType: 'Full-time',
    salary: '12,000 - 18,000',
  },
  {
    id: 49,
    title: 'Integration Developer',
    description:
      'Develop integrations between internal systems, external services and business applications.',
    requirements: [
      'Experience with API development',
      'Knowledge of REST and JSON',
      'Experience with system integration',
    ],
    employmentType: 'Full-time',
    salary: '7,000 - 11,000',
  },
  {
    id: 50,
    title: 'Technical Support Engineer',
    description:
      'Provide technical assistance to customers and investigate complex software issues.',
    requirements: [
      'Technical troubleshooting experience',
      'Knowledge of web technologies',
      'Good communication skills',
    ],
    employmentType: 'Full-time',
    salary: '5,500 - 8,500',
  },
]