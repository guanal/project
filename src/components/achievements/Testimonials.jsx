import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import SectionHeading from '../common/SectionHeading'

const testimonials = [
  {
    quote: "Sewgna's young volunteers have brought new life to my home. They come regularly to help with cleaning, do my laundry, and most importantly, they sit and talk with me. They're like the grandchildren I never had.",
    name: "Abebech Tadesse",
    title: "Elder Beneficiary",
    image: "https://images.pexels.com/photos/7551623/pexels-photo-7551623.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    quote: "I've lived alone since my wife passed away five years ago. These wonderful young people don't just help with my home, they check on my health and even take me to doctor appointments. Their care has made all the difference.",
    name: "Kebede Alemu",
    title: "Elder Beneficiary",
    image: "https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    quote: "When I needed heart surgery but couldn't afford it, Sewgna & Selam organized a fundraiser for me. Today I'm healthy because of their hard work and compassion. They are truly a blessing to our community.",
    name: "Tigist Mengistu",
    title: "Medical Support Recipient",
    image: "https://images.pexels.com/photos/6646981/pexels-photo-6646981.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    quote: "I've watched these young people grow from a small group to a powerful force for good in our city. Their commitment to regular cleaning campaigns has transformed our neighborhood. They lead by example.",
    name: "Mayor of Debrebrehan",
    title: "City Administration",
    image: "https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1600"
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }
  
  return (
    <section className="section bg-primary-700 text-white">
      <div className="container-custom">
        <SectionHeading 
          title="Voices from Our Community" 
          subtitle="The impact of our work through the words of those we serve."
          light={true}
        />
        
        <div className="relative max-w-4xl mx-auto" data-aos="fade-up">
          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="min-w-full px-4"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-10">
                    <blockquote className="text-xl italic mb-6 text-gray-100">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <div className="w-16 h-16 mr-4 rounded-full overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div>
                        <div className="font-bold text-lg">{testimonial.name}</div>
                        <div className="text-primary-200">{testimonial.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={24} />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials