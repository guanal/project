import { useState } from 'react'
import { FiFilter } from 'react-icons/fi'
import SectionHeading from '../common/SectionHeading'
import ImageGallery from '../common/ImageGallery'

// Gallery images (combining all activity images in one place)
const allImages = [
  // Elder Support
  {
    src: '/images/ab.PNG',
    alt: 'Volunteer helping an elder with groceries',
    title: 'Elder Home Visit',
    description: 'Our volunteers regularly visit elders to provide companionship and assistance',
    category: 'elder-support'
  },
  {
    src: '/images/maa.JPG',
    alt: 'Volunteers cleaning an elder\'s home',
    title: 'Home Maintenance',
    description: 'Providing cleaning and maintenance services for elders\' homes',
    category: 'elder-support'
  },
  {
    src: '/images/re.JPG',
    alt: 'Elder receiving support',
    title: 'Care and Support',
    description: 'Building meaningful relationships with the elders we serve',
    category: 'elder-support'
  },
  
  // Blood Donation
  {
    src: '/images/dd.JPG',
    alt: 'Blood donation campaign',
    title: 'Blood Donation Drive',
    description: 'Youth volunteers participating in our blood donation campaign',
    category: 'blood-donation'
  },
  
  
  
  // Fundraising
  {
    src: '/images/cof.JPG',
    alt: 'coffee ceremony fundraiser',
    title: 'Coffee ceremony' ,
    description: 'preparing a coffee ceremony with elders',
    category: 'elder-support'
  },
  {
    src: '/images/me.JPG',
    alt: 'Shoe cleaning fundraiser',
    title: 'Shoe Cleaning Service',
    description: 'Youth members raising funds through shoe cleaning services',
    category: 'fundraising'
  },
  {
    src: '/images/ha.JPG',
    alt: 'Habesha ',
    title: 'Support Habesha',
    description: 'Providing labour support at habesha for elder',
    category: 'elder-support'
  },
  
  // City Cleaning
  {
    src: '/images/vv.JPG',
    alt: 'City cleaning volunteers',
    title: 'City Cleanup Day',
    description: 'Volunteers working together to clean public spaces',
    category: 'city-cleaning'
  },
  {
    src: '/images/st.JPG',
    alt: 'Street cleaning initiative',
    title: 'Street Cleanup',
    description: 'Youth collecting trash from city streets',
    category: 'city-cleaning'
  },
  {
    src: '/images/b.JPG',
    alt: 'Team of cleanup volunteers',
    title: 'Volunteer Team',
    description: 'Our dedicated team after a successful cleanup event',
    category: 'city-cleaning'
  },
  
  // Holiday Support
  {
    src: '/images/ho.JPG',
    alt: 'Holiday gift distribution',
    title: 'Holiday Gifts',
    description: 'Distributing gifts and supplies during holiday seasons',
    category: 'holiday-support'
  },
  {
    src: '/images/mea.JPG',
    alt: 'Holiday meal preparation',
    title: 'Holiday Meals',
    description: 'Preparing special meals for elders during holidays',
    category: 'holiday-support'
  },
  {
    src: '/images/ce.JPG',
    alt: 'Volunteers during holiday event',
    title: 'Holiday Celebration',
    description: 'Bringing joy and companionship during holiday celebrations',
    category: 'holiday-support'
  }
]

// Categories for filtering
const categories = [
  { value: 'all', label: 'All Photos' },
  { value: 'elder-support', label: 'Elder Support' },
  { value: 'blood-donation', label: 'Blood Donation' },
  { value: 'fundraising', label: 'Fundraising' },
  { value: 'city-cleaning', label: 'City Cleaning' },
  { value: 'holiday-support', label: 'Holiday Support' }
]

const GalleryGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  // Filter images based on selected category
  const filteredImages = selectedCategory === 'all' 
    ? allImages 
    : allImages.filter(image => image.category === selectedCategory)
  
  return (
    <section className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <SectionHeading 
          title="Our Photo Gallery" 
          subtitle="Browse through the moments we've captured during our various activities and events."
        />
        
        {/* Category Filter */}
        <div 
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
          data-aos="fade-up"
        >
          <span className="flex items-center text-gray-700 dark:text-gray-300 mr-2">
            <FiFilter className="mr-2" /> Filter by:
          </span>
          
          {categories.map(category => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.value
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div data-aos="fade-up" data-aos-delay="100">
          <ImageGallery images={filteredImages} />
        </div>
        
        {/* Upload Your Own Photos Section */}
        <div className="mt-20 text-center">
          <div 
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 max-w-2xl mx-auto"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Share Your Photos
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Are you a member or volunteer with photos from our events? We'd love to feature them in our gallery!
            </p>
            
            <a 
              href="https://t.me/sewgnainhalf2012ec" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Contact Us to Share
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GalleryGrid