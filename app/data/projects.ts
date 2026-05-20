export type ProjectDetail = {
  id: number;
  slug: string;
  title: string;
  type: string;
  status: string;
  year: string;
  description: string;
  overview: string;
  image: string;
  gallery: string[];
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
    image: "/projects/policy-management/cover.png",
    gallery: [
      "/projects/policy-management/screenshot-1.png",
      "/projects/policy-management/screenshot-2.png",
      "/projects/policy-management/screenshot-3.png",
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
    image: "/projects/tenant-billing/cover.png",
    gallery: [
      "/projects/tenant-billing/screenshot-1.png",
      "/projects/tenant-billing/screenshot-2.png",
      "/projects/tenant-billing/screenshot-3.png",
    ],
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
    image: "/projects/barangay-request-kiosk/cover.png",
    gallery: [
      "/projects/barangay-request-kiosk/screenshot-1.png",
      "/projects/barangay-request-kiosk/screenshot-2.png",
    ],
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
    image: "/projects/air-pollution-mini-bot/cover.png",
    gallery: [
      "/projects/air-pollution-mini-bot/screenshot-1.png",
      "/projects/air-pollution-mini-bot/screenshot-2.png",
    ],
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
    image: "/projects/embedded-system-dashboard/cover.png",
    gallery: [
      "/projects/embedded-system-dashboard/screenshot-1.png",
      "/projects/embedded-system-dashboard/screenshot-2.png",
    ],
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
    image: "/projects/smart-locker-system/cover.png",
    gallery: [
      "/projects/smart-locker-system/screenshot-1.png",
      "/projects/smart-locker-system/screenshot-2.png",
    ],
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
    image: "/projects/point-of-sale/cover.png",
    gallery: [
      "/projects/point-of-sale/screenshot-1.png",
      "/projects/point-of-sale/screenshot-2.png",
    ],
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