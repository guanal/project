import { FiUsers, FiHeart, FiDollarSign, FiCalendar, FiSmile } from 'react-icons/fi'
import SectionHeading from '../common/SectionHeading'

const values = [
  {
    icon: <FiHeart className="w-12 h-12 text-primary-500" />,
    title: 'Compassion',
    description: 'We approach every individual with genuine care and empathy, treating those we serve with dignity and respect, especially the elderly.',
  },
  {
    icon: <FiUsers className="w-12 h-12 text-primary-500" />,
    title: 'Unity',
    description: 'We believe in the power of teamwork and collaboration, bringing together diverse skills and perspectives to achieve our common goals.',
  },
  {
    icon: <FiDollarSign className="w-12 h-12 text-primary-500" />,
    title: 'Transparency',
    description: 'We maintain complete financial transparency with our members and stakeholders, sharing reports openly at our monthly meetings.',
  },
  {
    icon: <FiCalendar className="w-12 h-12 text-primary-500" />,
    title: 'Commitment',
    description: 'Our dedicated members meet monthly to review activities, plan ahead, and ensure we\'re making the most meaningful impact possible.',
  },
  {
    icon: <FiSmile className="w-12 h-12 text-primary-500" />,
    title: 'Family Bond',
    description: 'We foster strong family-like relationships with those we serve, creating lasting connections that go beyond charity to true community.',
  },
]

const CoreValues = () => {
  return (
    <section className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <SectionHeading 
          title="Our Core Values" 
          subtitle="These principles guide every aspect of our work and embody the spirit of our organization."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-4">
                {value.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {value.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreValues