import SectionHeading from '../common/SectionHeading'

const MeetingStructure = () => {
  return (
    <section className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <SectionHeading 
          title="How We Operate" 
          subtitle="Our organizational structure and meeting format fosters accountability, transparency, and continuous improvement."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-primary-600 dark:text-primary-400">
                  Monthly Meetings
                </h3>
                <p>
                  We gather monthly for structured meetings where we review past activities, discuss ongoing projects, and plan for future initiatives. These meetings are essential for maintaining our momentum and ensuring accountability.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-primary-600 dark:text-primary-400">
                  Financial Transparency
                </h3>
                <p>
                  Every month, detailed financial reports are presented to all members, showing income sources, expenditures, and planned allocations. This transparency builds trust and ensures responsible stewardship of resources.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-primary-600 dark:text-primary-400">
                  Relationship Building
                </h3>
                <p>
                  We maintain strong, family-like bonds with the elders and community members we serve. Regular visits and consistent support create meaningful relationships that extend beyond transactional charity.
                </p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2 relative" data-aos="fade-left">
            <img
              src="https://images.pexels.com/photos/7551741/pexels-photo-7551741.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Members during a monthly meeting"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-100 dark:bg-primary-900 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeetingStructure