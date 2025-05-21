import { useState } from 'react'
import { FiFilter } from 'react-icons/fi'
import SectionHeading from '../common/SectionHeading'
import ImageGallery from '../common/ImageGallery'

// Activities data with images
const activities = [
  {
    id: 1,
    title: 'Elder Support Program',
    description: 'We provide care for elders through regular home visits, washing clothes, home maintenance, and companionship.',
    category: 'elder-support',
    images: [
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
      }
    ]
  },
  {
    id: 2,
    title: 'Blood Donation Campaigns',
    description: 'We organize regular blood donation drives to support local hospitals and health centers, engaging youth in this life-saving activity.',
    category: 'blood-donation',
    images: [
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
      }
    ]
  },
  {
    id: 3,
    title: 'Fundraising for Medical Treatment',
    description: 'We raise funds to support those with heart disease and other serious medical conditions who cannot afford treatment.',
    category: 'fundraising',
    images: [
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
      }
    ]
  },
  {
    id: 4,
    title: 'City Cleaning Program',
    description: 'We organize volunteer groups to clean and beautify Debrebrehan city, creating a cleaner and more pleasant environment for all.',
    category: 'city-cleaning',
    images: [
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
      }
    ]
  },
  {
    id: 5,
    title: 'Holiday Support Campaigns',
    description: 'During major holidays, we provide special support to the poor and elderly, spreading joy and ensuring no one is left behind.',
    category: 'holiday-support',
    images: [
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
  }
]

// Combine all images into a single array for the gallery
const allImages = activities.flatMap(activity => activity.images)

const ActivitiesGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  // List of unique categories for the filter
  const categories = [
    { value: 'all', label: 'All Activities' },
    { value: 'elder-support', label: 'Elder Support' },
    { value: 'blood-donation', label: 'Blood Donation' },
    { value: 'fundraising', label: 'Fundraising' },
    { value: 'city-cleaning', label: 'City Cleaning' },
    { value: 'holiday-support', label: 'Holiday Support' }
  ]
  
  // Filter activities based on selected category
  const filteredActivities = selectedCategory === 'all' 
    ? activities 
    : activities.filter(activity => activity.category === selectedCategory)
  
  return (
    <section className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <SectionHeading 
          title="Our Activities" 
          subtitle="We engage in various community service projects to address the needs of our community."
        />
        
        {/* Category Filter */}
        <div 
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
          data-aos="fade-up"
        >
          <span className="flex items-center text-gray-700 dark:text-gray-300 mr-2">
            <FiFilter className="mr-2" /> Filter:
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
        
        {/* Activities */}
        <div className="space-y-16">
          {filteredActivities.map((activity, index) => (
            <div 
              key={activity.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {activity.title}
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-8">
                  {activity.description}
                </p>
                
                {/* Image Gallery */}
                <ImageGallery images={activity.images} />
              </div>
            </div>
          ))}
        </div>
        
        {/* View all images in gallery */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
            Want to see more of our work?
          </p>
          <a 
            href="/gallery" 
            className="btn btn-primary"
            data-aos="fade-up"
          >
            Visit Our Full Gallery
          </a>
        </div>
      </div>
    </section>
  )
}

export default ActivitiesGrid