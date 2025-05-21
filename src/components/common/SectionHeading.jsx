import React from 'react'

const SectionHeading = ({ title, subtitle, centered = true, light = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 
        className={`font-bold mb-4 ${light ? 'text-white' : 'text-gray-900 dark:text-white'}`}
        data-aos="fade-up"
      >
        {title}
      </h2>
      
      {subtitle && (
        <p 
          className={`max-w-2xl mx-auto text-lg ${
            light ? 'text-gray-200' : 'text-gray-600 dark:text-gray-300'
          }`}
          data-aos="fade-up" 
          data-aos-delay="100"
        >
          {subtitle}
        </p>
      )}
      
      <div 
        className={`w-24 h-1 rounded ${centered ? 'mx-auto' : 'ml-0'} mt-6 bg-primary-600`}
        data-aos="fade-up" 
        data-aos-delay="200"
      ></div>
    </div>
  )
}

export default SectionHeading