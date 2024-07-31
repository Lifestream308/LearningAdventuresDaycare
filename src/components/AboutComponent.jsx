import React from 'react'
// import SlideshowComponent from './SlideshowComponent.jsx'

export default function AboutComponent() {
  return (
    <>
      <div className='mt-2 flex flex-col gap-6 lg:gap-16 px-[6%] text-blue-900'>
        <section className='flex flex-col gap-6 lg:flex-row'>
          <div className='py-10 w-full bg-gradient-to-b from-zinc-50 via-zinc-100 to-zinc-200 lg:w-1/2 lg:py-4'>
            <div className='h-full flex items-center'>
              <div className='text-center'>
                  <h2 className='text-5xl font-bold'>Our Story</h2>
                  <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal'>Learning Time Adventures begins with a dream, a dream of quality care, cultivating a safe environment that supports curiosity and provides daily adventures to stimulate the mind and sustain a foundation where children become lifelong learners in all aspects of their life. Yes, we're a small, ethical home daycare ready to take on a large childcare industry starting at home to make an impact for the greater good of our youth and future generations.</p>
                  <img className='w-28 h-28 mt-6 mx-auto object-cover object-top rounded-full' src="/images/teacher1.jpg" alt="" />
                  <p className='mx-auto pt-2 w-4/5 text-xl font-light leading-normal'>Kimberly Quirarte, the founder of Learning Time Adventures, director of the program & mother of 2.</p>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/2'>
            <img className='w-full h-full object-cover object-left' src="images/seplaying2.jpg" alt="" />
          </div>
        </section>
        <section className='flex flex-col gap-6 lg:flex-row'>
          <div className='py-10 w-full bg-gradient-to-b from-yellow-200 via-yellow-200 to-yellow-300 lg:w-1/2 lg:py-4'>
            <div className='h-full items-center flex text-blue-900'>
              <div className='text-center'>
                <h2 className='text-5xl font-bold'>Our Mission</h2>
                <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal'>Safety, emotional well-being, and education is our priority. We understand the importance of learning through play and all the benefits it provides for early childhood development therefore, we believe we can instill a love for learning, while having fun exploring the world around us.</p>
                <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal'>Experiences have taught me that education looks different for every child. Their mind is constantly being molded through experiences, and it all starts with the first years of early childhood. Our mission is to provide quality care, respect, and kindness to better support each child so they can ask more questions. We will support each child paving their path towards success as we contribute to their foundation.</p>
                {/* <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal italic'>“It wasn’t until I became a mother that I realized not every place upholds high standards in regards to childcare and that is something that desperately needs to change. Our practices here at Learning Time Adventure not only hope to inspire our youth to be all they can be as a kind hearted well rounded individual, but also spark a change in how providers service all children in their care.</p>
                <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal italic'>We're one of the few that is in this to make a difference. In a world where everything is constantly changing we are here to provide stability for the child and families we serve.”</p>
                <p className='mx-auto pt-4 w-4/5 text-right text-xl font-light leading-normal'>-Kimberly Quirarte</p> */}
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/2'>
            <img className='w-full h-full object-cover' src="images/bookreading2.jpg" alt="young girl reading" width={640} height={427} />
          </div>
        </section>


        {/* <div className="w-full flex flex-col items-center justify-center bg-gray-100">
          <h1 className="text-2xl font-bold mb-8">My Slideshow</h1>
          <SlideshowComponent interval={5000} />
        </div> */}
      </div>
    </>
  )
}
