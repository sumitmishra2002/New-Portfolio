import { GraduationCap, Briefcase, TrendingUp } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate about leveraging data and financial expertise to create meaningful impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1738566061688-47e66a008254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGZpbmFuY2V8ZW58MXx8fHwxNzY0MTUyMjM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional Finance"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-gray-900 mb-4">Professional Background</h3>
              <p className="text-gray-600 mb-6">
                As a Data Analyst with an MBA in Finance, I bring a unique blend of analytical rigor and business acumen to every project. My expertise lies in transforming raw data into strategic insights that drive informed decision-making and business growth.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Education</h4>
                  <p className="text-gray-600">MBA in Finance</p>
                  <p className="text-gray-500 text-sm">Strong foundation in financial analysis, strategic planning, and business management</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Briefcase className="text-purple-600" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Experience</h4>
                  <p className="text-gray-600">Data Analyst</p>
                  <p className="text-gray-500 text-sm">Specialized in data visualization, statistical analysis, and business intelligence</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Expertise</h4>
                  <p className="text-gray-600">Financial Data Analytics</p>
                  <p className="text-gray-500 text-sm">Combining finance knowledge with data science to deliver actionable insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
