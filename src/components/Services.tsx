import { Building, FileText, ShoppingCart, Users, HardHat, ClipboardCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    icon: Building,
    title: "Civil Works",
    description: "Comprehensive civil engineering services including construction, renovation, and infrastructure development projects with highest quality standards.",
  },
  {
    icon: ShoppingCart,
    title: "GeM Portal Services",
    description: "Expert handling of Government E-Marketplace (GeM) portal operations, vendor registration, product listing, and order fulfillment for government procurement.",
  },
  {
    icon: FileText,
    title: "Government Tenders",
    description: "Complete tender management services including documentation, bidding, compliance, and project execution for government contracts.",
  },
  {
    icon: Briefcase,
    title: "Private Tenders",
    description: "Professional tender services for private sector projects, ensuring competitive bids and successful project delivery.",
  },
  {
    icon: HardHat,
    title: "Project Management",
    description: "End-to-end project management from planning and design to execution and delivery, ensuring timely completion within budget.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance & Quality",
    description: "Strict adherence to government regulations, quality standards, and safety protocols for all our projects.",
  },
];

function Briefcase(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-blue-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for all your civil engineering and government procurement needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
