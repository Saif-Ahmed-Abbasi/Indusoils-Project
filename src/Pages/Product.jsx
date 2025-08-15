import ProductPage from '@/Components/ProductPage'
import React from 'react'

// import required components
import HeroSection from '@/Components/HeroSection'

const Product = () => {
  return (
    <div className=''>
        <HeroSection
        heading="Our Products"
        backgroundImage="/images/about-banner-4.webp"
      />
      <ProductPage />
    </div>
  )
}

export default Product