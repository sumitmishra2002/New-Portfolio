import { ArrowRight, Download } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-blue-600">Hello, I'm</p>
              <h1 className="text-gray-900 text-4xl font-bold">
                Sumit Mishra
              </h1>
              <h2 className="text-gray-700 text-xl">
                Data Analyst & Finance Professional
              </h2>
            </div>

            <p className="text-gray-600">
              MBA in Finance with expertise in data analytics, transforming complex data into actionable insights that drive business decisions and strategic growth.
            </p>

            <div className="flex flex-wrap gap-4">
              
              {/* CONTACT BUTTON */}
              <button
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                Get in Touch
                <ArrowRight size={20} />
              </button>

              {/* DOWNLOAD RESUME BUTTON */}
              <a
                href="https://drive.google.com/uc?export=download&id=1H6rMIO1tnRo3QM66hzz28bDu1hxZenws"   // Place this file in public folder
                download
                className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-colors flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeBckgNVV_BsIFRJ8_DOCTRUCgraVwRqZYCA&s"
                alt="Data Analytics Dashboard"
                className="w-full h-auto"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <p className="text-blue-600 font-semibold">MBA in Finance</p>
              <p className="text-gray-900">Certified Professional</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
