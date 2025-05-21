import SectionHeading from '../common/SectionHeading'

const FoundingStory = () => {
  return (
    <section className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image column */}
          <div className="relative" data-aos="fade-right">
            <img
              src="/images/logo.JPG"
              alt="Founding members of Sewgna Charity Association"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-100 dark:bg-primary-900 rounded-lg -z-10"></div>
          </div>
          
          {/* Content column */}
          <div data-aos="fade-left">
            <SectionHeading 
              title="Our Founding Story" 
              subtitle="" 
              centered={false}
            />
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <span className="font-semibold">Sewgna Charity Association</span> was founded in 2020 by Rediet Tadese and her friend while studying at Debrebrehan General Secondary School. What began as a small initiative to help local elders quickly grew into something much larger.
              </p>
              
              <p>
                Inspired by the needs they saw in their community, these young leaders started recruiting classmates who shared their vision of compassionate service. From a handful of dedicated students, our membership expanded to dozens of active volunteers.
              </p>
              
              <p>
                In a significant milestone, we merged with Selam Association to form what is now <span className="font-semibold">Sewgna & Selam Charity Association</span>. This strategic partnership has strengthened our ability to serve and expanded our reach throughout Debrebrehan.
              </p>
              
              <p>
                Today, we are proud to be one of the leading youth associations in our city, characterized by our monthly meetings, transparent financial reporting, and the strong family-like bonds we've formed with the elders and community members we serve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoundingStory