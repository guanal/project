import SectionHeading from '../common/SectionHeading'

// Mock volunteer data
const volunteers = [
  {
    name: 'Meron Abebe',
    role: 'Elder Support Coordinator',
    image: 'https://images.pexels.com/photos/6647032/pexels-photo-6647032.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    name: 'Yonas Haile',
    role: 'Blood Donation Coordinator',
    image: 'https://images.pexels.com/photos/6646991/pexels-photo-6646991.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    name: 'Hiwot Girma',
    role: 'Fundraising Coordinator',
    image: 'https://images.pexels.com/photos/6646983/pexels-photo-6646983.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    name: 'Fikru Tadesse',
    role: 'City Cleaning Lead',
    image: 'https://images.pexels.com/photos/6646982/pexels-photo-6646982.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    name: 'Kidist Solomon',
    role: 'Medical Support Coordinator',
    image: 'https://images.pexels.com/photos/6646981/pexels-photo-6646981.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    name: 'Bereket Mengistu',
    role: 'Event Organizer',
    image: 'https://images.pexels.com/photos/6646975/pexels-photo-6646975.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    name: 'Selam Berhanu',
    role: 'Volunteer Coordinator',
    image: 'https://images.pexels.com/photos/6646974/pexels-photo-6646974.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    name: 'Tewodros Getahun',
    role: 'Communications Lead',
    image: 'https://images.pexels.com/photos/6646973/pexels-photo-6646973.jpeg?auto=compress&cs=tinysrgb&w=1600'
  }
]

const VolunteerGrid = () => {
  return (
    <section className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <SectionHeading 
          title="Our Dedicated Volunteers" 
          subtitle="Meet some of the committed individuals who power our initiatives and make our impact possible."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {volunteers.map((volunteer, index) => (
            <div 
              key={index}
              className="group"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="relative rounded-lg overflow-hidden mb-4">
                <img 
                  src={volunteer.image} 
                  alt={volunteer.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white font-medium text-sm">
                      {volunteer.role}
                    </p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {volunteer.name}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {volunteer.role}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 
            className="text-2xl font-bold mb-4 text-gray-900 dark:text-white"
            data-aos="fade-up"
          >
            Join Our Volunteer Team
          </h3>
          
          <p 
            className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We're always looking for passionate individuals to join our efforts. No matter your skills or availability, there's a place for you in our family.
          </p>
          
          <a 
            href="https://t.me/sewgnainhalf2012ec" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Become a Volunteer
          </a>
        </div>
      </div>
    </section>
  )
}

export default VolunteerGrid