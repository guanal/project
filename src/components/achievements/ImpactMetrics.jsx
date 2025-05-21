import { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'
import SectionHeading from '../common/SectionHeading'

const metrics = [
  {
    value: 30,
    label: 'Elders receiving regular support',
    suffix: '+'
  },
  {
    value: 500,
    label: 'Hours volunteered each month',
    suffix: '+'
  },
  {
    value: 15,
    label: 'Home renovations completed',
    suffix: ''
  },
  {
    value: 100,
    label: 'Community members consulted',
    suffix: '+'
  },
  {
    value: 5,
    label: 'Heart disease patients funded',
    suffix: ''
  },
  {
    value: 12,
    label: 'Blood donation campaigns organized',
    suffix: ''
  },
  {
    value: 3,
    label: 'Years of continuous service',
    suffix: '+'
  },
  {
    value: 25,
    label: 'Partner organizations',
    suffix: '+'
  }
]

const ImpactMetrics = () => {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="section bg-gray-50 dark:bg-gray-800" ref={sectionRef}>
      <div className="container-custom">
        <SectionHeading 
          title="Our Impact in Numbers" 
          subtitle="While statistics can't capture the full impact of our work, these numbers provide a glimpse into the scope of our efforts."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <div className="text-4xl font-bold mb-2 text-primary-600 dark:text-primary-400">
                {inView ? (
                  <CountUp 
                    end={metric.value} 
                    duration={2.5} 
                    suffix={metric.suffix} 
                  />
                ) : (
                  `0${metric.suffix}`
                )}
              </div>
              
              <div className="text-gray-700 dark:text-gray-300">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <blockquote 
            className="text-xl italic text-gray-700 dark:text-gray-300"
            data-aos="fade-up"
          >
            "Numbers tell part of our story, but the real impact is measured in the smiles, improved well-being, and strengthened community bonds that result from our work together."
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default ImpactMetrics