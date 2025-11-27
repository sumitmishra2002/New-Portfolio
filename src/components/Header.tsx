import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => scrollToSection('home')}>
            <h1 className="text-gray-900">Sumit Mishra</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-gray-900 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-gray-900 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-900"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
