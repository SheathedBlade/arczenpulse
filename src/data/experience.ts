export interface ExperienceItem {
  date: string;
  type: 'work' | 'education' | 'project';
  title: string;
  subtitle: string;
  location: string;
  description: string;
  extendedDesc?: string;
}

export const experiences: ExperienceItem[] = [
  {
    date: 'March 2024 - Present',
    type: 'work',
    title: 'Software Engineer',
    subtitle: 'National Security Agency',
    location: 'Fort Meade, MD',
    description:
      'Developed and maintained a specialized, mission-critical, enterprise compliance product to ensure 24/7 uptime for our customers. Transitioned said product to AWS Cloud services by migrating existing systems to currently available AWS services.'
  },
  {
    date: 'May 2023',
    type: 'education',
    title: 'B.S. Computer Science',
    subtitle: 'Stevens Institute of Technology',
    location: 'Hoboken, NJ',
    description:
      'Graduated with a major in Computer Science, and a minor in Visual Arts & Technology',
    extendedDesc:
      'I attended Stevens Institute of Technology from Fall 2018 to Spring 2023, where I pursued a Bachelor of Science degree in Computer Science, with a minor in Visual Arts & Technology. I participated in their Co-Op program, which allowed me to gain real-world experience in the tech industry while in school. The caveat is that I had to take a semester off for every semester I worked, which is why I graduated in 2023 instead of 2022.\n\nDuring my time at Stevens, I was able to explore various fields of computer science, including software engineering, operating systems, cybersecurity, and web development. I also had to opportunity to explore more creative fields with my minor, where I took courses in game design, graphic design, and 3D printing.\n\nThis was also when I collaborated in a group project for my Web Development course, where we built a full-stack web application for our local esports team. This was the predecessor to my current project, Vantage.\n\nThe coursework offered by Stevens were not only rigorous, but instrumental in shaping my skills as a software engineer and a creator.'
  },
  {
    date: 'January 2022 - July 2022',
    type: 'work',
    title: 'Cybersecurity Analyst',
    subtitle: 'Fortress Investment Group LLC',
    location: 'New York City, NY',
    description:
      'Developed a web application that integrates with Tenable API to track internal IT assets and vulnerabilities using ASP.NET, Python, and SQL.',
    extendedDesc:
      'This was my second role as a Cybersecurity Analyst, and though I was not part of the SecOps team, I was able to take on more responsibilities and work on more complex projects.\n\nI developed a web application that integrates with the Tenable API (a cybersecurity product) to track internal IT assets and vulnerabilities. This was developed using ASP.NET for the frontend, Python for the backend, and using SQL to connect to the company IT database. The use case was to have a centralized dashboard for the IT and SecOps teams to keep tabs on company assets and to remediate any vulnerabilities that may arise.\n\nI also created and implemented a solution to track the point-in-time user permissions of SharePoint objects, using custom PowerShell scripts. This was a solution to a problem that the company had been facing for a while, and it was well-received by the IT team.\n\nAll of this converged to a task to improve the integration of ServiceNow with the company ecosystem by implementing various automations to streamline alerts handling, connecting existing products with my new applications. This was the culmination of my work at not only Fortress, but also my first cybersecurity role at Jefferies.'
  },
  {
    date: 'June 2021 - August 2021',
    type: 'work',
    title: 'Frontend Software Engineer',
    subtitle: 'TrueFort',
    location: 'Weehawken, NJ',
    description:
      "Developed a customer portal and redesigned the UI/UX for the company's zero trust product. Refactored the codebase from ExtJS to React, improving maintainability and user experience.",
    extendedDesc:
      'I worked here as a summer intern during the peak of COVID-19. During this time, I fostered relationships with the administrative team, including the founder, technical managers, and everyone in between. I collaborated with my co-workers remotely in-office, where I was exposed to the outdated ExtJS frontend framework for the first time.\n\nI tackled the monumental task of refactoring and redesigning the product portal of the Fortress Zero Trust application. I improved the UI and UX of the application, as well as modernizing the codebase to React from ExtJS. This resulted in a noticable influx of customers signing up for our Fortress subscription plans. Though it was a short internship, I was able to make a significant impact on the company and its customers, and I learned a lot about the fast-paced environment of a startup, as well as putting my design skills to the ultimate test.'
  },
  {
    date: 'January 2020 - December 2020',
    type: 'work',
    title: 'Cybersecurity Analyst',
    subtitle: 'Jefferies, LLC',
    location: 'Jersey City, NJ',
    description:
      'Developed a security feature using Python to scan Google Chrome extensions on every workstation and restrict the use of malicious or suspicious extensions. Integrated this feature into the ServiceNow ticketing workflow for SOC review and approval.',
    extendedDesc:
      'This was my first job during college (using their Co-Op program), and I worked as a cybersecurity analyst on the Security Operations team. Though that was the formal title, my work role leaned more on the developer side, in charge of creating automations for the products the SecOps team was utilizing.\n\nMy work heavily revolved around the ServiceNow platform. The team triaged help desk tickets via ServiceNow, and I was responsible for integrating new ServiceNow workflows for actioning on AWS security alerts and events. I also developed a security feature to scan Google Chrome extensions on every company workstation and restrict the installation and use of malicious or suspicious extensions. This was developed using Python, and I also integrated this feature into the ServiceNow ticketing workflow for SOC review and approval.\n\nOverall, this was a great first work experience, and it taught me a lot about SecOps and numerous ways to utilize Python scripting to complete difficult tasks.'
  }
];
