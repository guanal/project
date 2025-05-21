import SectionHeading from '../common/SectionHeading'
import ImageGallery from '../common/ImageGallery'

// Mock certificate images
const certificates = [
  {
    src: 'https://images.pexels.com/photos/6646709/pexels-photo-6646709.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Certificate of Appreciation from Debrebrehan Health Center',
    title: 'Recognition for Blood Donation',
    description: 'Awarded for organizing successful blood donation campaigns'
  },
  {
    src: 'https://images.pexels.com/photos/6646974/pexels-photo-6646974.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Certificate from City Administration',
    title: 'Outstanding Community Service',
    description: 'Recognition for our commitment to city cleaning initiatives'
  },
  {
    src: 'https://images.pexels.com/photos/6646991/pexels-photo-6646991.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Certificate from Elder Care Center',
    title: 'Elder Support Excellence',
    description: 'Recognizing our dedicated service to elders in the community'
  },
  {
    src: 'https://images.pexels.com/photos/6647007/pexels-photo-6647007.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Certificate of Honor',
    title: 'Youth Leadership Award',
    description: 'Recognizing the exemplary leadership of our youth members'
  },
  {
    src: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Certificate of Merit',
    title: 'Healthcare Support Recognition',
    description: 'For raising funds to support individuals with heart disease'
  },
  {
    src: 'https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Certificate of Appreciation',
    title: 'Holiday Support Recognition',
    description: 'For organizing successful holiday support campaigns'
  }
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