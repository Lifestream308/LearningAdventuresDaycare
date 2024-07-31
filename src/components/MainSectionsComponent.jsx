import React from 'react'
import BGColorSectionComponent from './BGColorSectionComponent'
import { Link } from 'react-router-dom'

export default function MainSectionsComponent() {
  return (
    <>
      <div className='mt-2 flex flex-col gap-8 px-[6%]'>
          <main className='flex flex-col gap-6 justify-center md:gap-16'>
            <div className='mt-2 text-center md:hidden'>
              <h1 className='text-2xl font-bold text-blue-700 md:hidden'>Learning Time Adventures</h1>
              <h2 className='font-extralight text-gray-600 text-base'>Licensed Daycare</h2>
            </div>
            <section className='relative w-full h-auto'>
              <img className='w-full h-auto' src="images/pexels1.jpg" alt="Picture of a classroom" width={1280} height={853} />
              <div className='absolute inset-0 w-7/10 bg-gradient-to-r from-gray-900/90 to-gray-500/5'></div>
              <div className='absolute w-full h-full flex flex-col top-0 justify-center left-[7%]'>
                <h3 className='font-bold text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl'>A place to learn,</h3>
                <h3 className='font-bold text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl'>play, and grow.</h3>
                <h3 className='mt-3 hidden font-extralight text-neutral-200 text-base sm:block md:text-lg lg:text-2xl'>Dedicated to offering a loving,</h3>
                <h3 className='hidden font-extralight text-neutral-200 text-base sm:block md:text-lg lg:text-2xl'>educational, and fun experience.</h3>
                {/* <h2 className='w-4/5 font-bold text-white text-2xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl lg:w-3/4'>Welcome to Learning Time Adventures Daycare</h2> */}
                <Link to='/contact' className='px-2 py-1 mt-4 w-fit text-base font-bold bg-gradient-to-r from-blue-700 to-blue-500 text-white hover:shadow-xl hover:text-gray-200 shadow-sm shadow-neutral-600 rounded-lg sm:px-4 sm:py-2 sm:text-xl md:text-2xl sm:mt-6' href="">Contact Us</Link>
              </div>
            </section>
            <section className='flex flex-col gap-6 lg:flex-row'>
              <div className='py-10 w-full bg-gradient-to-b from-yellow-200 via-yellow-200 to-yellow-300 lg:w-1/2 lg:py-4'>
                <div className='h-full items-center flex text-blue-900'>
                  <div className=''>
                    <h2 className='text-5xl text-center font-bold'>About Us</h2>
                    <p className='mx-auto text-center pt-4 w-4/5 text-xl font-light leading-normal'>We are a licensed CDSS home daycare. Dedicated to providing quality care for all children we serve. We focus on assisting every student in their milestone development. 
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2'>
                <img className='w-full h-full object-cover' src="images/bookreading1.jpg" alt="picture of adult reading with child" width={640} height={427} />
              </div>
            </section>
            <section className='flex flex-col gap-6 lg:flex-row'>
              <div className='py-10 w-full bg-gradient-to-b from-blue-50 via-blue-50 to-blue-200 lg:w-1/2 lg:py-4'>
                <div className='h-full flex items-center text-blue-900'>
                  <div className='text-center'>
                      <h2 className='text-5xl font-bold'>Our Curriculum</h2>
                      <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal'>Learning Time Adventures follows a RIE/Reggio inspired, Play-based guided with Montessori practices.</p>
                      <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal'>Daily activities include but not limited to Phonics/Language, Intro to Spanish, Intro to Chinese, Emotional Awareness Development, Math Concepts,   science, gardening, Indoor/Outdoor environment, gross & fine motor skills, Arts & crafts, Sensory, music & movement, Dramatic play and more!</p>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2'>
                <img className='w-full h-full object-cover' src="images/stocksmall3.jpg" alt="" />
              </div>
            </section>
          </main>
      </div>
      <BGColorSectionComponent />
    </>
  )
}
