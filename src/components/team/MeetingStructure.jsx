import { FiCalendar, FiClipboard, FiPieChart, FiUsers } from 'react-icons/fi'
import SectionHeading from '../common/SectionHeading'

const MeetingStructure = () => {
  return (
    <section className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <SectionHeading 
          title="How We Operate" 
          subtitle="Our organizational structure and monthly meetings form the backbone of our effective operations."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div 
            className="rounded-xl overflow-hidden shadow-lg"
            data-aos="fade-right"
          >
            <img 
              src="https://images.pexels.com/photos/7551741/pexels-photo-7551741.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Monthly meeting of Sewgna & Selam Charity Association"
              className="w-full h-auto"
            />
          </div>
          
          {/* Content */}
          <div data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Monthly Strategy Meetings
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center">
                  <FiCalendar className="text-primary-600 dark:text-primary-400 text-xl" />
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                    Regular Schedule
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    We gather on the first Saturday of every month to ensure consistency and allow maximum participation from our members.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center">
                  <FiClipboard className="text-primary-600 dark:text-primary-400 text-xl" />
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                    Activity Review
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    We begin by reviewing all activities from the previous month, celebrating successes and learning from challenges.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center">
                  <FiPieChart className="text-primary-600 dark:text-primary-400 text-xl" />
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                    Financial Transparency
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Our treasurer presents a detailed financial report, showing all income, expenses, and available funds to ensure complete transparency.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center">
                  <FiUsers className="text-primary-600 dark:text-primary-400 text-xl" />
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                    Collaborative Planning
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    We collectively plan the coming month's activities, with all members having the opportunity to provide input and volunteer for roles.
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

export default MeetingStructure