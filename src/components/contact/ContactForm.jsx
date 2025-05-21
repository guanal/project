import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FiSend, FiCheckCircle } from 'react-icons/fi'
import SectionHeading from '../common/SectionHeading'

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm()
  
  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // In a real application, you would send the data to your server or a form service
    console.log('Form data:', data)
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <section className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <SectionHeading 
          title="Contact Us" 
          subtitle="Have questions or want to get involved? We'd love to hear from you."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div data-aos="fade-right">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    Phone
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    <a 
                      href="tel:+251966013379" 
                      className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      +251 966013379
                    </a>
                    <span className="block text-sm text-gray-600 dark:text-gray-400 mt-1">
                      (Rediet Tadese, Chairperson)
                    </span>
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    Email
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    <a 
                      href="mailto:contact@sewgna.org" 
                      className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      contact@sewgna.org
                    </a>
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    Telegram Group
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    <a 
                      href="https://t.me/sewgnainhalf2012ec" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      t.me/sewgnainhalf2012ec
                    </a>
                    <span className="block text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Join our community for updates and events
                    </span>
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    Location
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Debrebrehan, Ethiopia
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Monthly Meetings
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  We hold open meetings on the first Saturday of every month. New members and visitors are always welcome.
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div data-aos="fade-left">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Send Us a Message
              </h3>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <FiCheckCircle className="text-green-500 text-5xl mb-4" />
                  <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    Message Sent!
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-center">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name 
                          ? 'border-red-500 dark:border-red-400' 
                          : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      placeholder="John Doe"
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email 
                          ? 'border-red-500 dark:border-red-400' 
                          : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      placeholder="john@example.com"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.message 
                          ? 'border-red-500 dark:border-red-400' 
                          : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none`}
                      placeholder="How can we help you?"
                      {...register('message', { required: 'Message is required' })}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn btn-primary flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm