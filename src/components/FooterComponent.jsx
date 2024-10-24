import React from 'react'

export default function FooterComponent() {
  return (
    <>
        <footer className='flex flex-col mt-14 mb-16 gap-8 text-blue-900 text-center'>
            <p className='break-all'>LearningTimeAdventures@gmail.com</p>
            <small>©{new Date().getFullYear()} by Learning Time Adventures Daycare</small>
        </footer>
    </>
  )
}
