import { useState, useEffect, useRef } from 'react'
import CountUp from 'react-countup'
import { FiUsers, FiHeart, FiDroplet, FiHome } from 'react-icons/fi'

const stats = [
  {
    icon: <FiUsers size={36} className="text-primary-400" />,
    value: 100,
    label: 'Active Members',
    suffix: '+'
  },
  {
    icon: <FiHeart size={36} className="text-primary-400" />,
    value: 30,
    label: 'Elders Supported',
    suffix: '+'
  },
  {
    icon: <FiDroplet size={36} className="text-primary-400" />,
    value: 50,
    label: 'Blood Donors',
    suffix: '+'
  },
  {
    icon: <FiHome size={36} className="text-primary-400" />,
    value: 500,
    label: 'Volunteer Hours',
    suffix: '+'
  }
]

const ImpactStats = () => {
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
    <section className="py-16 bg-primary-700 text-white">
      <div className="container-custom" ref={sectionRef}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-primary-800/50 hover:bg-primary-800 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              
              <div className="text-4xl font-bold mb-2">
                {inView ? (
                  <CountUp 
                    end={stat.value} 
                    duration={2.5} 
                    suffix={stat.suffix} 
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              
              <div className="text-primary-200">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImpactStats