export type ProjectDetail = {
  id: number;
  slug: string;
  title: string;
  type: string;
  status: string;
  year: string;
  description: string;
  overview: string;
  cover: string;
  screenshots: string[];
  tech: string[];
  features: string[];
  role: string;
};

export const projects: ProjectDetail[] = [
  {
    id: 1,
    slug: "policy-management",
    title: "Policy Management System",
    type: "Full-Stack Web Application",
    status: "Completed",
    year: "2025",
    description:
      "A web-based system for managing company policies, approval workflows, document tracking, audit history, archiving, role-based access, and dashboard monitoring.",
    overview:
      "This system was developed during my internship at TAO Corporation to help organize policy creation, review, approval, archiving, and monitoring. It includes workflow-based modules, dashboard tracking, backend services, PDF generation, and email notification support.",
    cover: "/projects/policy-management/landing page.jpg",
    screenshots: [
      "/projects/policy-management/approved.jpg",
      "/projects/policy-management/archived user.jpg",
      "/projects/policy-management/create draft.jpg",
      "/projects/policy-management/create user.jpg",
      "/projects/policy-management/create.jpg",
      "/projects/policy-management/drafts.jpg",
      "/projects/policy-management/edit user.jpg",
      "/projects/policy-management/edit.jpg",
      "/projects/policy-management/email template.jpg",
      "/projects/policy-management/email.jpg",
      "/projects/policy-management/for approval.jpg",
      "/projects/policy-management/for review.jpg",
      "/projects/policy-management/login.jpg",
      "/projects/policy-management/masterlist.jpg",
      "/projects/policy-management/policy.jpg",
      "/projects/policy-management/posted preview.jpg",
      "/projects/policy-management/posted.jpg",
      "/projects/policy-management/posting.jpg",
      "/projects/policy-management/request preview.jpg",
      "/projects/policy-management/system logs.jpg",
      "/projects/policy-management/users.jpg",
      "/projects/policy-management/void.jpg",
    ],
    tech: [
      "React TypeScript",
      "ASP.NET Core",
      "C#",
      "SQL",
      "REST API",
      "PDF Generation",
      "Email Integration",
    ],
    features: [
      "Policy creation and editing",
      "Approval workflow management",
      "Audit logs and activity tracking",
      "Role-based access control",
      "Dashboard monitoring",
      "PDF generation",
      "Email notifications",
    ],
    role: "Full-stack developer intern responsible for building frontend modules, connecting backend APIs, and supporting workflow features.",
  },
  {
    id: 2,
    slug: "tenant-billing",
    title: "Tenant Billing Management System",
    type: "Billing and Records Management System",
    status: "Completed",
    year: "2025",
    description:
      "A tenant billing system for managing tenant records, monthly rent, utility charges, payment tracking, billing history, and organized reports for rental property management.",
    overview:
      "This project helps organize rental billing operations by managing tenant information, billing records, monthly charges, payment status, and reports. It was designed to make rental payment tracking easier and more structured.",
    cover: "/pics/tenant-billing.png",
    screenshots: [],
    tech: ["React TypeScript", "ASP.NET Core", "C#", "SQL", "REST API"],
    features: [
      "Tenant record management",
      "Monthly billing tracking",
      "Utility charge records",
      "Payment status monitoring",
      "Billing history",
      "Organized reports",
    ],
    role: "Designed and developed the system structure, interface, database-connected records, and billing workflow.",
  },
  {
    id: 3,
    slug: "barangay-request-kiosk",
    title: "Barangay Ugong Request Kiosk",
    type: "Barangay Service Request System",
    status: "Completed",
    year: "2024",
    description:
      "A web-based request kiosk interface for managing barangay service requests and providing residents with a more organized way to access local services.",
    overview:
      "A kiosk-style service request system built to help residents submit and manage barangay service requests through a more structured interface.",
    cover: "/pics/brgyadmin.png",
    screenshots: [],
    tech: ["HTML", "CSS", "JavaScript", "Python"],
    features: [
      "Service request interface",
      "Resident-friendly kiosk layout",
      "Request organization",
      "Basic admin workflow support",
    ],
    role: "Developed the web interface and supported request handling flow.",
  },
  {
    id: 4,
    slug: "air-pollution-mini-bot",
    title: "Air Pollution AI Mini Bot",
    type: "Environmental Monitoring Interface",
    status: "Completed",
    year: "2024",
    description:
      "A web interface for displaying real-time AQI and IAQ readings collected by an autonomous air pollution monitoring minibot.",
    overview:
      "An environmental monitoring interface that displays air quality readings from a mini bot system, helping visualize AQI and IAQ data.",
    cover: "/pics/air pol mini bot.png",
    screenshots: [],
    tech: ["Python", "HTML", "SQL"],
    features: [
      "AQI and IAQ display",
      "Sensor data visualization",
      "Environmental monitoring interface",
      "Database-connected readings",
    ],
    role: "Built the interface and supported sensor data display.",
  },
  {
    id: 5,
    slug: "embedded-system-dashboard",
    title: "Embedded System Dashboard",
    type: "Sensor Monitoring Interface",
    status: "Completed",
    year: "2024",
    description:
      "A dashboard interface for monitoring sensor outputs and system status updates from a Raspberry Pi-based embedded system.",
    overview:
      "A monitoring dashboard created to display sensor values and system status from an embedded Raspberry Pi setup.",
    cover: "/pics/embedded-dashboard.png",
    screenshots: [],
    tech: ["Python", "HTML", "SQL", "Raspberry Pi"],
    features: [
      "Sensor monitoring",
      "System status display",
      "Raspberry Pi integration",
      "Dashboard interface",
    ],
    role: "Created the dashboard interface and supported embedded system integration.",
  },
  {
    id: 6,
    slug: "smart-locker-system",
    title: "Smart Locker System",
    type: "NFC-Based Access Control System",
    status: "Completed",
    year: "2024",
    description:
      "A locker management system with user registration, authentication, NFC-based access control, and locker status monitoring.",
    overview:
      "An access control system for managing locker use through NFC authentication and user registration.",
    cover: "/pics/locker.png",
    screenshots: [],
    tech: ["C++", "Python", "HTML", "SQL", "Arduino", "Raspberry Pi"],
    features: [
      "NFC-based access",
      "User registration",
      "Authentication flow",
      "Locker status monitoring",
      "Hardware and software integration",
    ],
    role: "Worked on system design, interface, and hardware-software integration.",
  },
  {
    id: 7,
    slug: "point-of-sale",
    title: "Point of Sale System",
    type: "Inventory and Sales System",
    status: "Completed",
    year: "2024",
    description:
      "A POS system for transaction processing, inventory tracking, and sales reporting with database-connected records.",
    overview:
      "A point-of-sale system designed to manage sales transactions, product records, inventory tracking, and reports.",
    cover: "/pics/POS.png",
    screenshots: [],
    tech: ["C#", "Python", "SQL"],
    features: [
      "Transaction processing",
      "Inventory tracking",
      "Sales report display",
      "Product records",
      "Database-connected records",
    ],
    role: "Developed the core system interface and supported database-connected features.",
  },
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projects.find((project) => project.slug === slug);
}