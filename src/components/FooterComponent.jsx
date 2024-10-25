import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterComponent() {
  return (
    <>
        <footer className='flex flex-col mt-14 mb-16 gap-6 text-blue-900 text-center'>
            <p className='break-all'>LearningTimeAdventures@gmail.com</p>
            <small>©{new Date().getFullYear()} by Learning Time Adventures Daycare</small>
            <Link to='/sitemap' className='px-4 py-2 mx-auto w-fit text-base text-blue-800 underline hover:text-blue-950'>Site Map</Link>
        </footer>
    </>
  )
}
