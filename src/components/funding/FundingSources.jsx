import { FiDollarSign, FiGift, FiBook, FiUsers, FiCalendar } from 'react-icons/fi'
import SectionHeading from '../common/SectionHeading'

const fundingSources = [
  {
    icon: <FiUsers className="w-12 h-12 text-primary-500" />,
    title: 'Member Contributions',
    description: 'Our members make regular monthly contributions that form the foundation of our operational budget, demonstrating their commitment to our cause.',
    percentage: 40,
  },
  {
    icon: <FiDollarSign className="w-12 h-12 text-primary-500" />,
    title: 'Fundraising Activities',
    description: 'We conduct various fundraising activities, such as shoe cleaning services, to generate income for our charitable work.',
    percentage: 25,
  },
  {
    icon: <FiGift className="w-12 h-12 text-primary-500" />,
    title: 'Donations',
    description: 'We receive generous donations from individuals, organizations, and businesses who believe in our mission and want to support our work.',
    percentage: 20,
  },
  {
    icon: <FiBook className="w-12 h-12 text-primary-500" />,
    title: 'Book Rental Income',
    description: 'Our innovative book rental program not only promotes education but also generates sustainable income to fund our initiatives.',
    percentage: 15,
  },
]

const FundingSources = () => {
  return (
    <section className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <SectionHeading 
          title="Our Funding Sources" 
          subtitle="We maintain complete transparency in our financial operations. Here's how we fund our various initiatives."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fundingSources.map((source, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 flex flex-col md:flex-row gap-6 items-start"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-white dark:bg-gray-700 p-4 rounded-full shrink-0">
                {source.icon}
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white flex items-center">
                  {source.title}
                  <span className="ml-2 text-sm font-normal bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-300 px-2 py-1 rounded">
                    {source.percentage}%
                  </span>
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300">
                  {source.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Fund Distribution Chart */}
        <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-lg p-8" data-aos="fade-up">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            How Funds Are Distributed
          </h3>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              { name: 'Elder Support Programs', percentage: 40, color: 'bg-primary-500' },
              { name: 'Medical Assistance', percentage: 25, color: 'bg-secondary-500' },
              { name: 'Community Cleaning', percentage: 15, color: 'bg-accent-500' },
              { name: 'Holiday Support Campaigns', percentage: 15, color: 'bg-green-500' },
              { name: 'Administrative Costs', percentage: 5, color: 'bg-gray-500' },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-800 dark:text-gray-200">{item.name}</span>
                  <span className="text-gray-800 dark:text-gray-200 font-medium">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className={`${item.color} h-2.5 rounded-full`} 
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center mt-8 text-gray-600 dark:text-gray-400">
            We maintain complete transparency with all funds. Detailed financial reports are shared with members during our monthly meetings.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FundingSources