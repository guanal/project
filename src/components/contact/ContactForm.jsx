import SectionHeading from '../common/SectionHeading'

const Contact = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <SectionHeading 
          title="Connect with Sewgna" 
          subtitle="Join our vibrant community and get involved in making a difference in Debrebrehan."
        />
        
        <div className="max-w-2xl mx-auto" data-aos="fade-up">
          <div className="bg-gradient-to-r from-amber-50 to-orange-100 dark:from-indigo-900 dark:to-purple-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
              Get in Touch
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="bg-orange-500 dark:bg-purple-500 p-3 rounded-full text-white group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Phone
                  </h4>
                  <p className="text-gray-700 dark:text-gray-200">
                    <a 
                      href="tel:+251966013379" 
                      className="hover:text-orange-500 dark:hover:text-purple-400 transition-colors duration-200"
                    >
                      +251 966013379
                    </a>
                    <span className="block text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Rediet Nigussie, Chairperson
                    </span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="bg-orange-500 dark:bg-purple-500 p-3 rounded-full text-white group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5v-2l-3-3 3-3v-2h4l3-3 3 3h4v2l3 3-3 3v2h-4l-3 3-3-3z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Telegram Group
                  </h4>
                  <p className="text-gray-700 dark:text-gray-200">
                    <a 
                      href="https://t.me/sewgnainhalf2012ec" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-orange-500 dark:hover:text-purple-400 transition-colors duration-200"
                    >
                      t.me/sewgnainhalf2012ec
                    </a>
                    <span className="block text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Join our community for updates and events
                    </span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="bg-orange-500 dark:bg-purple-500 p-3 rounded-full text-white group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Location
                  </h4>
                  <p className="text-gray-700 dark:text-gray-200">
                    Debrebrehan, Ethiopia
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="bg-orange-500 dark:bg-purple-500 p-3 rounded-full text-white group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Monthly Meetings
                  </h4>
                  <p className="text-gray-700 dark:text-gray-200">
                    We hold open meetings on the first Saturday of every month. New members and visitors are always welcome.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact