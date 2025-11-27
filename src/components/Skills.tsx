import { MessageCircle, Lightbulb, Users, Database, FileSpreadsheet, BarChart3, TrendingUp } from 'lucide-react';

export function Skills() {
  const softSkills = [
    {
      icon: MessageCircle,
      name: 'Communication Skills',
      description: 'Effectively articulate complex data insights to diverse stakeholders',
      color: 'blue'
    },
    {
      icon: Lightbulb,
      name: 'Problem Solving',
      description: 'Analytical approach to identify issues and develop innovative solutions',
      color: 'purple'
    },
    {
      icon: Users,
      name: 'Leadership',
      description: 'Lead teams and drive projects to successful completion',
      color: 'green'
    }
  ];

  const technicalSkills = [
    {
      icon: Database,
      name: 'SQL',
      level: 90,
      color: 'bg-blue-600'
    },
    {
      icon: FileSpreadsheet,
      name: 'Excel',
      level: 95,
      color: 'bg-green-600'
    },
    {
      icon: BarChart3,
      name: 'Power BI',
      level: 85,
      color: 'bg-yellow-600'
    },
    {
      icon: TrendingUp,
      name: 'Data Analysis',
      level: 90,
      color: 'bg-purple-600'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      purple: 'bg-purple-100 text-purple-600',
      green: 'bg-green-100 text-green-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive skill set combining soft skills with technical proficiency
          </p>
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h3 className="text-gray-900 mb-8 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {softSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className={`w-16 h-16 ${getColorClasses(skill.color)} rounded-lg flex items-center justify-center mb-6`}>
                    <Icon size={32} />
                  </div>
                  <h4 className="text-gray-900 mb-3">{skill.name}</h4>
                  <p className="text-gray-600">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <h3 className="text-gray-900 mb-8 text-center">Technical Proficiency</h3>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              {technicalSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Icon className="text-gray-700" size={24} />
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="text-gray-900">{skill.name}</h4>
                          <span className="text-gray-600">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className={`${skill.color} h-3 rounded-full transition-all duration-1000`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
