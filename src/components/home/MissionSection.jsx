import { FiHeart, FiEye, FiStar } from 'react-icons/fi'
import SectionHeading from '../common/SectionHeading'

const features = [
  {
    icon: <FiHeart size={36} className="text-primary-500" />,
    title: 'Our Mission',
    description: 'Empowering youth to serve society through compassion, unity, and volunteerism. We are committed to enhancing the quality of life for vulnerable members of our community, especially elders, through sustainable support programs.',
  },
  {
    icon: <FiEye size={36} className="text-primary-500" />,
    title: 'Our Vision',
    description: 'To create a society where youth are actively engaged in community service, where elders are respected and cared for, and where compassion drives sustainable community development.',
  },
  {
    icon: <FiStar size={36} className="text-primary-500" />,
    title: 'Our Values',
    description: 'Compassion, integrity, transparency, teamwork, and respect. We embrace financial transparency with all members, maintain strong family-like bonds with those we serve, and believe in the transformative power of youth leadership.',
  },
]

const MissionSection = () => {
  return (
    <section id="mission-section" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <SectionHeading 
          title="Empowering Through Service" 
          subtitle="At Sewgna & Selam Charity Association, we're guided by a clear mission and vision that directs all our efforts."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-4 rounded-full bg-primary-50 dark:bg-primary-900/30 inline-block mb-6">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MissionSection