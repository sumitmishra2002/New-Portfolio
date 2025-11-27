import { BarChart3, Database, FileSpreadsheet, ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      icon: BarChart3,
      title: 'Sales Performance Dashboard',
      category: 'Power BI Dashboard',
      description: 'Built an interactive Power BI dashboard to track regional sales, monthly revenue trends, and product-wise performance. Added drill-through pages and DAX measures for YoY growth and contribution analysis.',
      technologies: ['Power BI', 'DAX', 'Data Modeling'],
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      demoLink: 'https://github.com/sumitmishra2002/sales-performance-dashboard',
      githubLink: 'https://github.com/sumitmishra2002/'
    },
    {
      icon: Database,
      title: 'Customer Churn Analysis',
      category: 'Python & SQL',
      description: 'Used SQL to extract customer and transaction data, then Python (Pandas) for cleaning, feature creation, and exploratory analysis to identify churn drivers and at-risk segments.',
      technologies: ['Python', 'SQL', 'Pandas', 'Data Analysis'],
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600',
      demoLink: 'PASTE_LINK_HERE',
      githubLink: 'https://github.com/sumitmishra2002/'
    },
    {
      icon: FileSpreadsheet,
      title: 'Financial Reporting Automation',
      category: 'Excel Automation',
      description: 'Designed an Excel-based reporting file with automated formulas, Pivot Tables, and dynamic charts to generate monthly P&L and variance reports with minimal manual work.',
      technologies: ['Excel', 'VBA', 'Pivot Tables', 'Formulas'],
      color: 'green',
      gradient: 'from-green-500 to-green-600',
      demoLink: 'https://onedrive.live.com/:x:/g/personal/59C8A090D6039688/IQAsObb_JDqjSZ2uCIKhZ7MsAQ2KnUbuOFAdnmNUKuHmG6Q?resid=59C8A090D6039688!sffb6392c3a2449a39dae0882a167b32c&ithint=file%2Cxlsx&e=9wS7Im&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvYy81OWM4YTA5MGQ2MDM5Njg4L0lRQXNPYmJfSkRxalNaMnVDSUtoWjdNc0FRMktuVWJ1T0ZBZG5tTlVLdUhtRzZRP2U9OXdTN0lt',
      githubLink: 'https://github.com/sumitmishra2002/'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      green: 'bg-green-100 text-green-600 border-green-200'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">

                <div className={`bg-gradient-to-br ${project.gradient} p-8`}>
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <p className="text-white/90 text-sm mb-2">{project.category}</p>
                  <h3 className="text-white">{project.title}</h3>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className={`px-3 py-1 rounded-full text-sm border ${getColorClasses(project.color)}`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* ✅ Working Links */}
                  <div className="flex gap-3 pt-4 border-t border-gray-100">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <ExternalLink size={16} />
                      View Demo
                    </a>

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <Github size={16} />
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
