'use client'
import React from 'react'
import { useForm } from 'react-hook-form'

// import required components
import Button from './Button'
import HeroSection from './HeroSection'

const ContactPage = () => {
  const buttext = ["Read More"];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  return (
    <>
      <HeroSection
        heading="Contact Us"
        backgroundImage="/images/contact-banner.webp"
      />

      <section className="py-20 px-4 md:px-6 bg-gray-100">
      <div className='flex flex-col items-center text-center mb-4'>
  <h1 className='text-black text-5xl mb-2 font-bold'>Get In Touch</h1>
  <p className="text-gray-600 mb-8 max-w-[750px]">
    We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, 
    please fill out the form below or reach out to us using the contact details provided. 
    Your thoughts and inquiries are always welcome.
  </p>
</div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          
          {/* Left: Contact Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white shadow-lg rounded-lg p-8 space-y-6"
          >
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
              <input
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email address',
                  },
                })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Message</label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                rows={5}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message..."
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Right: Embedded Map */}
          <div className="w-full h-[400px] md:h-full shadow-md rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13237.458372517882!2d73.0550552!3d33.6844206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9555e79b9cb9%3A0xc92a1d0d265dfef!2sBlue%20Area%2C%20Islamabad!5e0!3m2!1sen!2s!4v1623857664656!5m2!1sen!2s"
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
              className="border-0 w-full h-full"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage