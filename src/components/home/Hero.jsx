import { Link } from 'react-router-dom'
import { FiChevronDown } from 'react-icons/fi'
import { FaTelegram } from 'react-icons/fa'

const Hero = () => {
  const scrollToSection = () => {
    const missionSection = document.getElementById('mission-section')
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white">
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          data-aos="fade-up"
        >
          Sewgna & Selam <br className="md:hidden" />
          <span className="text-primary-400">Charity Association</span>
        </h1>
        
        <p 
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light"
          data-aos="fade-up" 
          data-aos-delay="100"
        >
          Compassion in Action. Youth Empowering Communities.
        </p>
        
        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          <a 
            href="https://t.me/sewgnainhalf2012ec"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary min-w-[180px] group"
          >
            <FaTelegram className="mr-2 text-lg group-hover:animate-pulse" />
            Join Us
          </a>
          
          <Link 
            to="/activities" 
            className="btn btn-outline border-white text-white hover:bg-white/10 min-w-[180px]"
          >
            See Our Work
          </Link>
        </div>
        
        {/* Scroll down indicator */}
        <button 
          onClick={scrollToSection}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <FiChevronDown className="text-white text-2xl" />
        </button>
      </div>
    </section>
  )
}

export default Hero