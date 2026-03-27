import { FlowerIcon } from '@phosphor-icons/react';
import { motion } from 'motion/react';

interface TimelineEntry {
  date: string;
  title: string;
  subtitle: string;
  location?: string;
  description?: string;
  type?: 'work' | 'education' | 'side';
}

const Timeline = () => {
  const entries: TimelineEntry[] = [
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
      type: 'work',
      title: 'B.S. Computer Science',
      subtitle: 'Stevens Institute of Technology',
      location: 'Hoboken, NJ',
      description:
        'Graduated with a major in Computer Science, and a minor in Visual Arts & Technology'
    },
    {
      date: 'January 2022 - July 2022',
      type: 'work',
      title: 'Cybersecurity Analyst',
      subtitle: 'Fortress Investment Group',
      location: 'New York City, NY',
      description:
        'Developed a web application that integrates with Tenable API to track internal IT assets and vulnerabilities using ASP.NET, Python, and SQL.'
    },
    {
      date: 'June 2021 - August 2021',
      type: 'work',
      title: 'Frontend Software Engineer',
      subtitle: 'TrueFort',
      location: 'Weehawken, NJ',
      description:
        "Developed a customer portal and redesigned the UI/UX for the company's zero trust product."
    },
    {
      date: 'January 2020 - December 2020',
      type: 'work',
      title: 'Cybersecurity Analyst',
      subtitle: 'Jefferies, LLC',
      location: 'Jersey City, NJ',
      description:
        'Developed a security feature using Python to scan Google Chrome extensions on every workstation, and restricts the use of malicious or suspicious extensions. Integrated this feature into the ServiceNow ticketing workflow for SOC review and approval.'
    }
  ];

  return (
    <div className="mx-auto max-w-3xl px-12 py-10">
      <h2
        className="font-jost mb-8 text-center text-2xl underline"
        style={{ textDecorationThickness: '3px' }}
      >
        Experience & Education:
      </h2>
      <div className="border-sakura-stone/40 relative ml-8 border-l-2 px-8">
        {entries.map((entry, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="relative mb-10 last:mb-0"
          >
            <div className="bg-sakura-bg border-sakura-stone/40 absolute top-0 -left-10.75 flex h-5 w-5 items-center justify-center rounded-full border-2">
              <FlowerIcon
                weight="fill"
                size={14}
                className="text-sakura-accent"
              />
            </div>
            <p className="font-dmmono text-sakura-accent mb-1 text-sm">
              {entry.date}
            </p>
            <h3 className="text-sakura-text text-xl font-bold">
              {entry.title}
            </h3>
            <p className="text-sakura-cobble font-dmmono text-sm">
              {entry.subtitle} {entry.location && <>| {entry.location}</>}
            </p>
            {entry.description && (
              <p className="font-zenmaru text-sakura-text/80 mt-2 max-w-prose">
                {entry.description}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
