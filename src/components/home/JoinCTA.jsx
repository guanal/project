import { FaTelegram } from 'react-icons/fa'

const JoinCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-about-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/90"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            data-aos="fade-up"
          >
            Join Our Compassionate Community
          </h2>
          
          <p 
            className="text-lg md:text-xl mb-10 text-gray-100"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Whether you can volunteer your time, donate resources, or spread the word about our cause,
            there's a place for you in our family. Together, we can create lasting positive change.
          </p>
          
          <a 
            href="https://t.me/sewgnainhalf2012ec"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-white text-primary-700 hover:bg-gray-100 transition-colors px-8 py-4 text-lg shadow-lg"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <FaTelegram className="text-xl mr-2" />
            Join Our Telegram Group
          </a>
        </div>
      </div>
    </section>
  )
}

export default JoinCTA