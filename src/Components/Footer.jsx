import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-black  text-white py-10 px-6">
        {/* Main Heading */}
        <div className="mb-10  py-10">
          <h1 className="text-2xl mb-10 sm:text-4xl md:text-5xl lg:text-6xl lg:leading-normal font-bold text-center leading-losog">
            INNOVATIVE SOLUTIONS TO <br />
            CONTRIBUTE FOR YOUR SERVICES
          </h1>
          <hr className='border-[#828282]' />
        </div>


        <div className='mt-8'>
          {/* Footer Links Section */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 border-b border-gray-700 pb-6">
            <div className="flex flex-col">
              <span className="text-xl font-bold flex items-center">
                <span className="text-red-600 text-3xl mr-2">■</span> INDUS
              </span>
            </div>
            {/* Navigation Links */}
            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:text-gray-400">Home</a>
              <a href="#" className="hover:text-gray-400">About us</a>
              <a href="#" className="hover:text-gray-400">Services</a>
              <a href="#" className="hover:text-gray-400">Products</a>
              <a href="#" className="hover:text-gray-400">Contact Us</a>
            </div>
            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:text-gray-400">Home</a>
              <a href="#" className="hover:text-gray-400">About us</a>
              <a href="#" className="hover:text-gray-400">Services</a>
              <a href="#" className="hover:text-gray-400">Products</a>
              <a href="#" className="hover:text-gray-400">Contact Us</a>
            </div>
            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:text-gray-400">Home</a>
              <a href="#" className="hover:text-gray-400">About us</a>
              <a href="#" className="hover:text-gray-400">Services</a>
              <a href="#" className="hover:text-gray-400">Products</a>
              <a href="#" className="hover:text-gray-400">Contact Us</a>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:text-gray-400">LinkedIn</a>
              <a href="#" className="hover:text-gray-400">Twitter</a>
            </div>

            {/* Legal Links */}

          </div>

          {/* Footer Bottom Section */}
          <div className="text-center text-gray-500 text-sm pt-4">
            <a href="#" className="hover:text-gray-400">Terms of Use</a> |
            <a href="#" className="hover:text-gray-400 ml-2">Privacy Policy</a>
            <p className="mt-2">Copyright © 2023 INDUSOILAND LUBRICANTS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
