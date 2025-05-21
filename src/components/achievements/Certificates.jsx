import SectionHeading from '../common/SectionHeading'
import ImageGallery from '../common/ImageGallery'

// Mock certificate images
const certificates = [
  {
    src: 'images/cer.jpg',
    alt: 'Certificate of Appreciation from Debrebrehan Health Center',
    title: 'Recognition for Blood Donation',
    description: 'Awarded for organizing successful blood donation campaigns'
  },
  
]

const Certificates = () => {
  return (
    <section className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <SectionHeading 
          title="Certificates & Recognition" 
          subtitle="We're honored to have received recognition for our work from various community organizations and institutions."
        />
        
        <div className="mb-12">
          <ImageGallery images={certificates} />
        </div>
        
        <div className="text-center">
          <p className="text-gray-700 dark:text-gray-300 italic">
            "These certificates represent not just recognition, but the trust our community has placed in us. We're committed to continuing to earn that trust through dedicated service."
          </p>
        </div>
      </div>
    </section>
  )
}

export default Certificates