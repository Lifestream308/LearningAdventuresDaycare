import React from 'react'

export default function FooterComponent() {
  return (
    <>
        <footer className='flex flex-col mt-14 mb-16 gap-8 text-blue-900 text-center'>
            <h3 className='break-all'>LearningTimeAdventures@gmail.com</h3>
            <small>©{new Date().getFullYear()} by Learning Time Adventures Daycare</small>
        </footer>
    </>
  )
}
