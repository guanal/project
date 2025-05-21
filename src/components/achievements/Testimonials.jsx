import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import SectionHeading from '../common/SectionHeading'

const faqs = [
  {
    question: "What is the criteria to be a member of Sewgna?",
    answer: "All you need is to be human with a heart for helping others."
  },
  {
    question: "How can I contact Sewgna?",
    answer: "You can reach us through the contact details provided on our Contact page."
  },
  {
    question: "What amount should I contribute monthly?",
    answer: "Contribute as much as your capability allows—every bit helps!"
  },
  {
    question: "How can I help the association and the poor?",
    answer: "You can contribute through labor, financial support, or any skills and resources you can offer."
  },
  {
    question: "Where does the association operate?",
    answer: "We are currently active in Debrebrehan."
  },
  {
    question: "Is there a registration form for new members?",
    answer: "Yes, new members fill out a form when invited to join our group."
  },
  {
    question: "What has helped Sewgna stay strong until now?",
    answer: "The strong ambition of our members, the sense of brotherly and sisterly connection, and the motivation to help others keep us thriving."
  },
  {
    question: "How many members does Sewgna have?",
    answer: "We have over 100 members, with many actively contributing to our mission."
  }
]

const charityQuotes = [
  {
    quote: "We make a living by what we get, but we make a life by what we give.",
    author: "Winston Churchill",
    title: "Former Prime Minister of the United Kingdom"
  },
  {
    quote: "The best way to find yourself is to lose yourself in the service of others.",
    author: "Mahatma Gandhi",
    title: "Leader of Indian Independence Movement"
  },
  {
    quote: "No one has ever become poor by giving.",
    author: "Anne Frank",
    title: "Diarist and Holocaust Victim"
  },
  {
    quote: "The life of man is of no greater duration than the breath of his nostrils, but in giving to others, he extends his legacy beyond his years.",
    author: "Plato",
    title: "Ancient Greek Philosopher"
  },
  {
    quote: "Charity sees the need, not the cause.",
    author: "German Proverb",
    title: ""
  },
  {
    quote: "We can’t help everyone, but everyone can help someone.",
    author: "Ronald Reagan",
    title: "Former President of the United States"
  },
  {
    quote: "The simplest acts of kindness are by far more powerful than a thousand heads bowing in prayer.",
    author: "Mother Teresa",
    title: "Founder of the Missionaries of Charity"
  }
]

const FaqAndQuotes = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* FAQ Section */}
        <SectionHeading 
          title="Join the Sewgna Movement" 
          subtitle="Explore how you can become part of our vibrant community making a difference in Debrebrehan."
        />
        
        <div className="max-w-4xl mx-auto mb-16" data-aos="fade-up">
          <div className="grid gap-2">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border-b border-gray-300 py-4 cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg text-gray-900 dark:text-gray-400">
                    {faq.question}
                  </h3>
                  <span>
                    {openIndex === index ? (
                      <FiChevronUp className="text-gray-500" size={20} />
                    ) : (
                      <FiChevronDown className="text-gray-500" size={20} />
                    )}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="text-gray-600 dark:text-gray-500 mt-2">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Charity Quotes Section */}
        <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Voices That Inspire Us
          </h2>
          <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
            {charityQuotes.map((quote, index) => (
              <div 
                key={index}
                className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-t-4 border-orange-500 dark:border-purple-500"
              >
                <blockquote className="text-gray-700 dark:text-gray-200 italic mb-4">
                  "{quote.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">{quote.author}</div>
                    {quote.title && (
                      <div className="text-sm text-gray-600 dark:text-gray-400">{quote.title}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqAndQuotes