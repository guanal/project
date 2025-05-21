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
        src: '/images/ab.png',
        alt: 'Volunteer helping an elder with groceries',
        title: 'Elder Home Visit',
        description: 'Our volunteers regularly visit elders to provide companionship and assistance',
        category: 'elder-support'
      },
      {
        src: '/images/maa.jpg',
        alt: 'Volunteers cleaning an elder\'s home',
        title: 'Home Maintenance',
        description: 'Providing cleaning and maintenance services for elders\' homes',
        category: 'elder-support'
      },
      {
        src: '/images/re.jpg',
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
        src: '/images/dd.jpg',
        alt: 'Blood donation campaign',
        title: 'Blood Donation Drive',
        description: 'Youth volunteers participating in our blood donation campaign',
        category: 'blood-donation'
      },
      {
        src: '/images/bbbb.jpg',
        alt: 'Blood donation',
        title: 'Blood Donation',
        description: 'Participation in donating blood',
        category: 'blood-donation'
      },
      {
        src: '/images/bbb.jpg',
        alt: 'Photo after donation',
        title: 'Photo After Donation',
        description: 'Photos after successful blood donation campaign',
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
        src: '/images/lo.jpg',
        alt: 'Lottery Fundraising event',
        title: 'Holiday Lottery Fundraiser',
        description: 'Raising funds for holidays by lottery',
        category: 'fundraising'
      },
      {
        src: '/images/so.jpg',
        alt: 'Soft cloth fundraiser',
        title: 'Soft Cloth Fundraiser',
        description: 'Raising holiday funds by selling soft cloths used for toilet and hand cleaning',
        category: 'fundraising'
      },
      {
        src: '/images/me.jpg',
        alt: 'Shoe cleaning fundraiser',
        title: 'Shoe Cleaning Service',
        description: 'Youth members raising funds through shoe cleaning services',
        category: 'fundraising'
      },
      {
        src: '/images/pa.jpg',
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
        src: '/images/vv.jpg',
        alt: 'City cleaning volunteers',
        title: 'City Cleanup Day',
        description: 'Volunteers working together to clean public spaces',
        category: 'city-cleaning'
      },
      {
        src: '/images/st.jpg',
        alt: 'Street Cleanup',
        title: 'Street Cleanup',
        description: 'Youth collecting trash from city streets',
        category: 'city-cleaning'
      },
      {
        src: '/images/b.jpg',
        alt: 'Volunteer team',
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
        src: '/images/ho.jpg',
        alt: 'Holiday gift distribution',
        title: 'Holiday Gifts',
        description: 'Distributing gifts and supplies during holiday seasons',
        category: 'holiday-support'
      },
      {
        src: '/images/mea.jpg',
        alt: 'Holiday meal preparation',
        title: 'Holiday Meals',
        description: 'Preparing special meals for elders during holidays',
        category: 'holiday-support'
      },
      {
        src: '/images/ce.jpg',
        alt: 'Volunteers during holiday event',
        title: 'Holiday Celebration',
        description: 'Bringing joy and companionship during holiday celebrations',
        category: 'holiday-support'
      }
    ]
  }
];


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