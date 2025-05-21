import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const ImageGallery = ({ images, category = null }) => {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  
  // Filter images by category if provided
  const filteredImages = category 
    ? images.filter(image => image.category === category)
    : images
  
  return (
    <div>
      {/* Grid of images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg group cursor-pointer"
            onClick={() => {
              setPhotoIndex(index)
              setIsOpen(true)
            }}
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <img
              src={image.src}
              alt={image.alt || `Gallery image ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                <h4 className="font-medium text-lg">{image.title}</h4>
                {image.description && (
                  <p className="text-sm mt-1">{image.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={filteredImages.map(image => ({
            src: image.src,
            title: image.title,
            description: image.description
          }))}
        />
      )}
    </div>
  )
}

export default ImageGallery