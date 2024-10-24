import React from 'react'

export default function FooterComponent() {
  return (
    <>
        <footer className='flex flex-col mt-14 mb-16 gap-8 text-blue-900 text-center'>
            <p className='break-all'>LearningTimeAdventures@gmail.com</p>
            <Link to='/sitemap' className='px-4 py-2 text-xl font-light text-blue-800 hover:underline'>Site Map</Link>
            <small>©{new Date().getFullYear()} by Learning Time Adventures Daycare</small>
        </footer>
    </>
  )
}
