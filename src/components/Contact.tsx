import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Facebook, Instagram } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Let's connect and discuss how we can work together
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-900">Email</p>
                      <a href="mailto:sumitmohanmishra@gmail.com" className="text-gray-600 hover:text-blue-600">
                        sumitmohanmishra@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone className="text-green-600" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-900">Phone</p>
                      <a href="tel:+918470935773" className="text-gray-600 hover:text-green-600">
                        +91 8470935773
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MapPin className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-900">Location</p>
                      <p className="text-gray-600">India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="text-gray-900 mb-6">Connect With Me</h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.linkedin.com/in/iamsumitmishra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/sumitmishra2002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://x.com/SumitMishra2002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-400 text-white rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-800 text-white rounded-lg flex items-center justify-center hover:bg-blue-900 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/sumitmishra20_01/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 text-white rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-gray-900 mb-6">Send Me a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
