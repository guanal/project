import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import SectionHeading from '../common/SectionHeading'

const activities = [
  {
    title: 'Elder Home Care',
    description: 'Washing clothes, home maintenance, and companionship for elders in our community.',
    image: 'https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '/activities',
  },
  {
    title: 'Blood Donation Drive',
    description: 'Regular blood donation campaigns to support local hospitals and health centers.',
    image: 'https://images.pexels.com/photos/6823539/pexels-photo-6823539.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '/activities',
  },
  {
    title: 'City Cleaning Program',
    description: 'Organizing volunteers to clean and beautify Debrebrehan city streets and public spaces.',
    image: 'https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '/activities',
  }
]

const RecentActivities = () => {
  return (
    <section className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <SectionHeading 
          title="Our Recent Activities" 
          subtitle="Here's a glimpse of how we're making a difference in our community through various programs and initiatives."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="card group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {activity.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {activity.description}
                </p>
                
                <Link 
                  to={activity.link}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors"
                >
                  Learn more <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/activities"
            className="btn btn-primary"
            data-aos="fade-up"
          >
            View All Activities
          </Link>
        </div>
      </div>
    </section>
  )
}

export default RecentActivities