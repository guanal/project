import { FiMail, FiPhone } from 'react-icons/fi'
import SectionHeading from '../common/SectionHeading'

const leaders = [
  {
    name: 'Rediet Nigussie',
    role: 'Founder & Chairperson',
    bio: 'Founded Sewgna Charity Association in 2020 while studying at Debrebrehan General Secondary School. Passionate about creating sustainable impact through youth leadership.',
    image: '/images/red.jpg',
    contact: {
      phone: '+251966013379',
    }
  },
  {
    name: 'Mekonnen Geresu',
    role: 'Vice Chairperson',
    bio: 'Joined Sewgna in its early days and has been instrumental in expanding our elder support programs. Brings strong organizational skills to the team.',
    image: '/images/mk.jpg',
    contact: {
      phone:'+251 94 788 9124',
    }
  },
  {
    name: 'Mekdess tilahun',
    role: 'Secretary',
    bio: 'Maintains our records and documentation. Coordinates communication between members and ensures smooth operation of all administration.',
    image: '/images/mek.jpg',
    contact: {
      phone: '+251945605073'
    }
  },
  {
    name: 'Dagim Simon',
    role: 'Treasurer',
    bio: 'Oversees our finances with complete transparency. Responsible for monthly financial reporting and ensuring proper allocation of resources.',
    image: '/images/bar.jpg',
    contact: {
      phone: '+251 97 525 9195'
    }
  }
]

const LeadershipTeam = () => {
  return (
    <section className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <SectionHeading 
          title="Our Leadership Team" 
          subtitle="Connect with the inspiring trailblazers shaping our mission with heart and innovation."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                  {leader.name}
                </h3>
                
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                  {leader.role}
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  {leader.bio}
                </p>
                
                <div className="space-y-1 text-sm">
                  {leader.contact.phone && (
                    <a 
                      href={`tel:${leader.contact.phone}`} 
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <FiPhone className="mr-2" />
                      {leader.contact.phone}
                    </a>
                  )}
                  
                  {leader.contact.email && (
                    <a 
                      href={`mailto:${leader.contact.email}`} 
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <FiMail className="mr-2" />
                      {leader.contact.email}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LeadershipTeam