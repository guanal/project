import { Link } from 'react-router-dom'
import { FiHeart, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaTelegram } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-white">Sewgna & Selam</h3>
            <p className="max-w-xs text-gray-300">
              A youth-led charity organization founded in 2020, dedicated to helping our community through compassion and service.
            </p>
            <div className="pt-2">
              <Link 
                to="/about" 
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                Learn more about us &rarr;
              </Link>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Activities', 'Funding', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiPhone className="mt-1 mr-3 text-primary-400" />
                <span className="text-gray-300">+251 966013379 (Rediet Tadese)</span>
              </li>
              <li className="flex items-start">
                <FiMail className="mt-1 mr-3 text-primary-400" />
                <a 
                  href="mailto:contact@sewgna.org" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  contact@sewgna.org
                </a>
              </li>
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-primary-400" />
                <span className="text-gray-300">Debrebrehan, Ethiopia</span>
              </li>
              <li className="flex items-start">
                <FaTelegram className="mt-1 mr-3 text-primary-400" />
                <a 
                  href="https://t.me/sewgnainhalf2012ec" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Telegram Group
                </a>
              </li>
            </ul>
          </div>
          
          {/* Inspirational Quote */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Motto</h4>
            <blockquote className="border-l-4 border-primary-500 pl-4 py-2 italic text-gray-300">
              "Giving is not just about making a donation. It's about making a difference."
            </blockquote>
            
            <div className="mt-6">
              <a 
                href="https://t.me/sewgnainhalf2012ec" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Join Us Today
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Sewgna & Selam Charity Association. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0 flex items-center">
            Made with <FiHeart className="mx-1 text-accent-500" /> for our community
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer