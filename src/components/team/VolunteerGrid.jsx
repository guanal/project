import SectionHeading from '../common/SectionHeading'

const VolunteerGrid = () => {
  return (
    <section className="section bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <SectionHeading 
          title="Our Volunteer Movement" 
          subtitle="Join a vibrant community of changemakers united by passion and purpose to transform lives."
        />
        
        <div className="relative bg-primary-600 dark:bg-primary-500 rounded-xl overflow-hidden shadow-lg p-8 md:p-12 text-center text-white">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Together, We Make a Difference
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
              Our volunteers are the heartbeat of our mission, driving change through compassion, dedication, and action. From supporting elders to organizing blood drives, every effort counts.
            </p>
            <p className="text-base md:text-lg max-w-2xl mx-auto mb-8">
              Be part of something bigger. Your skills, time, and passion can create lasting impact in our community.
            </p>
          </div>
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