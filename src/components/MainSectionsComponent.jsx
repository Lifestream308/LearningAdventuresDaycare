import React from 'react'
import BGColorSectionComponent from './BGColorSectionComponent'
import { Link } from 'react-router-dom'

export default function MainSectionsComponent() {
  return (
    <>
      <div className='mt-2 flex flex-col gap-8 px-[6%]'>
          <main id='main' className='flex flex-col gap-6 justify-center md:gap-16'>
            <div className='mt-2 text-center md:hidden'>
              <h1 className='text-2xl font-bold text-blue-700 md:hidden'>Learning Time Adventures</h1>
              <p className='font-extralight text-gray-600 text-base'>Licensed Daycare</p>
            </div>
            <section className='relative w-full h-auto' aria-label='Introduction section'>
              <img className='w-full h-auto min-h-[20rem] max-h-[35rem] object-cover object-right' src={window.innerWidth <= 700 ? 'images/pexels1-small.webp' : 'images/pexels1.jpg'} alt="Picture of a classroom" width={1280} height={853} />
              <div className='absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/10'></div>
              <div className='absolute pl-[7%] w-full h-full flex flex-col top-0 justify-center'>
                <p className='font-bold text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl'>A place to learn, 
                  <br />
                play, and grow.</p>
                {/* <p className='font-bold text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl'>play, and grow.</p> */}
                <p className='mt-4 max-w-[50%] font-extralight text-neutral-100 text-sm sm:text-base md:text-lg lg:text-2xl'>Ready to enroll your child in a trusted West Covina daycare?</p>
                {/* <p className='mt-3 hidden font-extralight text-neutral-200 text-base sm:block md:text-lg lg:text-2xl'>Dedicated to offering a loving,</p> */}
                {/* <p className='hidden font-extralight text-neutral-200 text-base sm:block md:text-lg lg:text-2xl'>educational, and fun experience.</p> */}
                <Link to='/contact' className='px-2 py-1 mt-4 w-fit text-base font-bold bg-gradient-to-r from-blue-700 to-blue-500 text-white hover:shadow-xl hover:text-gray-200 shadow-sm shadow-neutral-600 rounded-lg sm:px-4 sm:py-2 sm:text-xl md:text-2xl sm:mt-6'>Contact Us</Link>
              </div>
            </section>
            <section className='flex flex-col gap-6 lg:flex-row'>
              <div className='py-10 w-full bg-gradient-to-b from-yellow-200 via-yellow-200 to-yellow-300 lg:w-1/2 lg:py-4'>
                <div className='h-full items-center flex text-blue-900'>
                  <div className=''>
                    <h2 className='text-5xl text-center font-bold'>West Covina Daycare</h2>
                    <p className='mx-auto text-center pt-4 w-4/5 text-xl font-light leading-normal'>We are a licensed CDSS home daycare. Dedicated to providing quality care for all children we serve. We focus on assisting every student in their milestone development. 
                    </p>
                    <p className='mx-auto text-center pt-4 w-4/5 text-xl font-light leading-normal'>We pride ourselves on having an amazing and kind hearted staff. All CPR certified with their Bachelor's Degree in Human Development with an emphasis on child development. 
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2'>
                <img loading='lazy' className='w-full h-full object-cover' src="images/bookreading1.jpg" alt="picture of adult reading with child" width={640} height={427} />
              </div>
            </section>
            <section className='flex flex-col gap-6 lg:flex-row-reverse'>
              <div className='py-10 w-full bg-gradient-to-b from-blue-50 via-blue-50 to-blue-200 lg:w-1/2 lg:py-4'>
                <div className='h-full flex items-center text-blue-900'>
                  <div className='text-center'>
                      <h2 className='text-5xl font-bold'>Nutrition</h2>
                      <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal'>We provide home cooked meals and two snacks a day. We have clean filtered water for refills all throughout the day. Fruit is huge with us, as well as veggies and protein.</p>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2'>
                <img loading='lazy' className='w-full h-full object-cover' src="images/healthyMeal.jpg" alt="healthy bowl of food" width={640} height={427} />
              </div>
            </section>
            {/* <section className='flex flex-col gap-6 lg:flex-row-reverse'>
              <div className='py-10 w-full bg-gradient-to-b from-yellow-200 via-yellow-200 to-yellow-300 lg:w-1/2 lg:py-4'>
                <div className='h-full flex items-center text-blue-900'>
                  <div className='text-center'>
                      <h2 className='text-5xl font-bold'>Coordination</h2>
                      <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal'>Our daily educational activities range from fine motor skills to gross motor skills and organized action that is intended to have a formative effect on the mind, character, or physical ability of an individual.</p>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2'>
                <img loading='lazy' className='w-full h-full object-cover' src="images/girlDrawing.jpg" alt="child drawing a picture" width={640} height={427} />
              </div>
            </section> */}
            <section className='flex flex-col gap-6 lg:flex-row'>
              <div className='py-10 w-full bg-gradient-to-b from-zinc-50 via-zinc-100 to-zinc-200 lg:w-1/2 lg:py-4'>
                <div className='h-full flex items-center text-blue-900'>
                  <div className='text-center'>
                      <h2 className='text-5xl font-bold'>Our Curriculum</h2>
                      <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal'>Learning Time Adventures follows a RIE/Reggio inspired, Play-based guided with Montessori practices.</p>
                      <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal'>Daily activities include but not limited to Phonics/Language, Intro to Spanish, Intro to Chinese, Emotional Awareness Development, Math Concepts,   science, gardening, Indoor/Outdoor environment, gross & fine motor skills, Arts & crafts, Sensory, music & movement, Dramatic play and more!</p>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2'>
                <img loading='lazy' className='w-full h-full object-cover' src="images/stocksmall3.jpg" alt="child learning numbers" width={640} height={427} />
              </div>
            </section>
          </main>
      </div>
      <BGColorSectionComponent />
    </>
  )
}
