import ProductPage2 from '@/Components/ProductPage2'
import React from 'react'

// import required components
import HeroSection from '@/Components/HeroSection'

const Product2 = () => {
  return (
    <div className=''>
        <HeroSection
        heading="Our Products"
        backgroundImage="/images/about-banner-4.webp"
      />
      <ProductPage2 />
    </div>
  )
}

export default Product2