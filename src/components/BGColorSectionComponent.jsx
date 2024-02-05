import React from 'react'

export default function BGColorSectionComponent() {
  return (
    <>
        <section className='mt-6 bg-amber-200 md:mt-16'>
            <div className='flex flex-col-reverse gap-6 items-center px-[12%] py-12 md:flex-row md:py-24'>
                <div className='relative flex justify-center w-full md:w-1/2'>
                    <div class="absolute w-full h-full bg-blue-500 transform -translate-x-6 translate-y-6"></div>
                    <img className='w-full h-auto z-10' src="images/outside1.jpg" alt="" />
                </div>
                <div className='flex flex-col px-1 justify-center gap-4 w-full text-blue-800 text-center md:w-1/2'>
                    <h2 className='text-5xl font-bold'>Family Business</h2>
                    <h3 className='text-2xl font-semibold'>Outstanding Quality</h3>
                    <p className='text-lg font-light'>We want to recognize our parents for supporting the goal we have as a family home daycare. We feel blessed and very fortunate to be on this journey with you all!</p>
                    <p className='text-lg font-light'>We value family, we value life.</p>
                </div>
            </div>
        </section>
    </>
  )
}
