import Image from "next/image";
import Link from "next/link";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "Full-Stack Developer Intern - TAO Corporation",
    description: "Developed a full-stack Policy Management System using React TypeScript and ASP.NET Core. Built modules for policy creation, approvals, audit logs, and integrated backend services for email notifications and PDF generation.",
    icon: "/cards/card-1.png",
  },
 {
  id: 2,
  title: "Sales Operations and Data Records Assistant (Part-Time) - Livesmart Asia",
  description:
    "Supports customer-facing sales operations, floor coordination, and organized data recording. This role strengthened my attention to detail, documentation habits, workflow awareness, and understanding of real-world business processes.",
  icon: "/cards/card-4.png",
},
  {
    id: 3,
title: "Registrar’s Assistant Intern - Gardner College Cainta",
    description: "Organized and maintained student academic records, supported enrollment processes, and managed data entry tasks using office productivity tools while handling confidential records professionally.",
    icon: "/cards/card-2.png",
  },
  {
    id: 4,
    title: "Service Crew - NC’s Kitchen",
    description: "Delivered customer service in a fast-paced environment, handled cash transactions, and developed strong communication and multitasking skills while coordinating with kitchen staff.",
    icon: "/cards/card-3.png",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center">
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-white backdrop-blur-sm rounded-xl p-6 border-t-4 border-violet-400 hover:shadow-xl hover:shadow-violet-100 transition-all flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex-shrink-0">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  {card.title}
                </h3>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {card.description}
                </p>
                <Link
                  href="#contact"
                  className="text-violet-600 hover:text-violet-500 font-semibold text-sm transition-colors inline-block"
                >
                  DETAILS →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

