import { FiCalendar } from 'react-icons/fi'
import SectionHeading from '../common/SectionHeading'

const FundraisingEvents = () => {
  return (
    <section className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <SectionHeading 
          title="Special Cultural Fundraising Programs" 
          subtitle="We organize traditional seasonal fundraising activities that connect our cultural heritage with our charitable mission."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* HOYAHOYE for men */}
          <div 
            className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden"
            data-aos="fade-right"
          >
            <div className="relative h-64">
              <img 
                src="/images/hoyy.JPG" 
                alt="HOYAHOYE Celebration"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-primary-600 text-white py-1 px-3 rounded-full flex items-center text-sm font-medium">
                <FiCalendar className="mr-1" /> New Year
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                "HOYAHOYE" for Men
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                During the Ethiopian New Year celebration, our male members organize the traditional "HOYAHOYE" event. This cultural celebration includes traditional songs, dances, and door-to-door visits where they collect donations from community members.
              </p>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">When:</span>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">September (Ethiopian New Year)</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Participants:</span>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">Male Association Members</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Impact:</span>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">Funds 25% of our annual elder support</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* ENKUTATASH for women */}
          <div 
            className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden"
            data-aos="fade-left"
          >
            <div className="relative h-64">
              <img 
                src="/images/en.jpg" 
                alt="ENKUTATASH Celebration"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-secondary-600 text-white py-1 px-3 rounded-full flex items-center text-sm font-medium">
                <FiCalendar className="mr-1" /> New Year
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                "ENKUTATASH" for Women
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Complementing the men's efforts, our female members organize "ENKUTATASH" activities during the Ethiopian New Year. They create traditional crafts, prepare special foods, and organize performances that celebrate our cultural heritage while raising funds.
              </p>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">When:</span>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">September (Ethiopian New Year)</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Participants:</span>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">Female Association Members</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Impact:</span>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">Funds 20% of our annual medical assistance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional fundraising activities */}
        <div className="mt-16" data-aos="fade-up">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            Other Fundraising Activities
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Shoe Cleaning Service
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Our members offer shoe cleaning services in the community, with all proceeds going directly to our charitable activities.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Book Rental Program
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                We maintain a collection of books that we rent to students and community members, generating income while promoting education.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Community Bazaars
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                We organize seasonal bazaars where members sell handmade crafts, food, and other items to raise funds for specific projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FundraisingEvents