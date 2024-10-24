import React from 'react'

export default function ContactComponent() {
  return (
    <div>
        <div className='mt-2 flex flex-col gap-8 px-[6%]'>
            <section className='flex flex-col gap-6 md:flex-row'>
                <div className='py-10 w-full bg-gradient-to-b from-yellow-200 via-yellow-200 to-yellow-300 md:w-1/2 md:py-4'>
                    <div className='h-full justify-center items-center flex text-blue-900'>
                        <div className='flex flex-col gap-6 items-center text-center'>
                            <h2 className='px-2 text-5xl font-bold'>Opening Hours</h2>
                            <p className='text-sm font-semibold lg:text-lg'>LearningTimeAdventures@gmail.com</p>
                            <p className='text-xl font-semibold'>(626)-391-0408</p>
                            <p className='text-xl font-semibold'>Monday-Friday: 7:00am-5:00pm</p>
                            <p className='text-xl font-semibold'>Sat-Sun: Closed</p>
                            <p className='text-xl font-semibold'>Conveniently located in West Covina</p>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2'>
                    <img className='w-full h-full object-cover' src="images/stocksmall2.jpg" alt="child knocking over row of blocks" width={640} height={427} />
                </div>
            </section>
            <section className='flex flex-col gap-6 md:flex-row-reverse'>
              <div className='py-10 w-full bg-gradient-to-b from-blue-50 via-blue-50 to-blue-200 md:w-1/2 md:py-4'>
                <div className='justify-center text-blue-900'>
                  <div className='text-center'>
                      <h2 className='text-5xl font-bold'>Enrollment</h2>
                      <h3 className='mt-6 italic text-2xl font-semibold'>Now Enrolling. Space is limited.</h3>
                      <p className='mx-auto pt-6 w-4/5 text-xl'>Full-day 7:00am-5:00pm</p>
                      <p className='mx-auto pt-6 w-4/5 text-xl font-light'>Please let us know when you are looking to start, what allergies your child has, and the current age of your child.</p>
                      <p className='mx-auto pt-3 w-4/5 text-xl font-light'>Thank you for your interest in our daycare.</p>
                      <p className='mx-auto pt-3 w-4/5 text-xl font-light'>We'll get back to you as soon as possible!</p>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2'>
                <img className='w-full h-full object-cover' src="images/stocksmall1.jpg" alt="child playing with blocks" width={640} height={427} />
              </div>
            </section>
        </div>
        {/* <div className='w-full h-96 mt-16 border-y-[1px] border-gray-300'> */}
        <div className='w-full h-96 mt-16'>
            {/* <img className='w-full h-full object-cover' src="images/map1.jpg" alt="map centered on West Covina" width={1589} height={527} /> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105787.91374695442!2d-117.99510150749457!3d34.04714656178031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c329c466d70ea9%3A0xe45ef44baa0981ea!2sWest%20Covina%2C%20CA!5e0!3m2!1sen!2sus!4v1724439431582!5m2!1sen!2sus" width={800} height={400} className='w-full' loading="lazy" referrerPolicy={"no-referrer-when-downgrade"} title='Google Maps showing the city of West Covina which is where the business is located'></iframe>
        </div>
        <p className='mt-12 text-lg text-center'>Map of West Covina above.</p>
    </div>
  )
}
