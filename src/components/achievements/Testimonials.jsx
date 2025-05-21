import SectionHeading from '../common/SectionHeading'

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

const InspiringQuotes = () => {
  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-dots.png')] opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <SectionHeading 
          title="Inspired to Give" 
          subtitle="Be moved by the wisdom of global voices celebrating the power of charity."
        />
        
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
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
          
          <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-6 max-w-xl mx-auto">
              Join our community and start contributing to Sewgna’s mission in Debrebrehan.
            </p>
            <a
              href="https://t.me/sewgnainhalf2012ec"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-orange-500 dark:bg-purple-500 text-white rounded-lg hover:bg-orange-600 dark:hover:bg-purple-600 transition-colors"
              aria-label="Join Sewgna's Telegram group"
            >
              Join Our Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InspiringQuotes