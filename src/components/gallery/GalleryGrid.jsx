import { useState } from 'react'
import { FiFilter } from 'react-icons/fi'
import SectionHeading from '../common/SectionHeading'
import ImageGallery from '../common/ImageGallery'

// Gallery images (combining all activity images in one place)
const allImages = [
  // Elder Support
  {
    src: 'https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Volunteer helping an elder with groceries',
    title: 'Elder Home Visit',
    description: 'Our volunteers regularly visit elders to provide companionship and assistance',
    category: 'elder-support'
  },
  {
    src: 'https://images.pexels.com/photos/7551623/pexels-photo-7551623.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Volunteers cleaning an elder\'s home',
    title: 'Home Maintenance',
    description: 'Providing cleaning and maintenance services for elders\' homes',
    category: 'elder-support'
  },
  {
    src: 'https://images.pexels.com/photos/7552081/pexels-photo-7552081.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Elder receiving support',
    title: 'Care and Support',
    description: 'Building meaningful relationships with the elders we serve',
    category: 'elder-support'
  },
  
  // Blood Donation
  {
    src: 'https://images.pexels.com/photos/6823539/pexels-photo-6823539.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Blood donation campaign',
    title: 'Blood Donation Drive',
    description: 'Youth volunteers participating in our blood donation campaign',
    category: 'blood-donation'
  },
  {
    src: 'https://images.pexels.com/photos/6823474/pexels-photo-6823474.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Blood donation awareness session',
    title: 'Awareness Session',
    description: 'Educating the community about the importance of blood donation',
    category: 'blood-donation'
  },
  {
    src: 'https://images.pexels.com/photos/6823667/pexels-photo-6823667.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Blood donation certificate',
    title: 'Donor Recognition',
    description: 'Recognizing our dedicated blood donors',
    category: 'blood-donation'
  },
  
  // Fundraising
  {
    src: 'https://images.pexels.com/photos/6646891/pexels-photo-6646891.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Fundraising event',
    title: 'Community Fundraiser',
    description: 'Raising funds for heart disease patients',
    category: 'fundraising'
  },
  {
    src: 'https://images.pexels.com/photos/7550330/pexels-photo-7550330.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Shoe cleaning fundraiser',
    title: 'Shoe Cleaning Service',
    description: 'Youth members raising funds through shoe cleaning services',
    category: 'fundraising'
  },
  {
    src: 'https://images.pexels.com/photos/6646974/pexels-photo-6646974.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Donation handover',
    title: 'Support Delivery',
    description: 'Providing financial support to those in need of medical treatment',
    category: 'fundraising'
  },
  
  // City Cleaning
  {
    src: 'https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'City cleaning volunteers',
    title: 'City Cleanup Day',
    description: 'Volunteers working together to clean public spaces',
    category: 'city-cleaning'
  },
  {
    src: 'https://images.pexels.com/photos/6646709/pexels-photo-6646709.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Street cleaning initiative',
    title: 'Street Cleanup',
    description: 'Youth collecting trash from city streets',
    category: 'city-cleaning'
  },
  {
    src: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Team of cleanup volunteers',
    title: 'Volunteer Team',
    description: 'Our dedicated team after a successful cleanup event',
    category: 'city-cleaning'
  },
  
  // Holiday Support
  {
    src: 'https://images.pexels.com/photos/6646949/pexels-photo-6646949.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Holiday gift distribution',
    title: 'Holiday Gifts',
    description: 'Distributing gifts and supplies during holiday seasons',
    category: 'holiday-support'
  },
  {
    src: 'https://images.pexels.com/photos/6646990/pexels-photo-6646990.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Holiday meal preparation',
    title: 'Holiday Meals',
    description: 'Preparing special meals for elders during holidays',
    category: 'holiday-support'
  },
  {
    src: 'https://images.pexels.com/photos/6647007/pexels-photo-6647007.jpeg?auto=compress&cs=tinysrgb&w=1600',
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