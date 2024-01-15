import React from 'react'

export default function HeaderComponent() {
  return (
    <>
        <header className='flex justify-between items-center'>
          <div className='flex items-center'>
            <img className='w-36 min-w-32 h-auto' src="images/adventurelearningtime.png" alt="Company Tree Logo" />
            <h1 className='text-2xl font-bold hidden text-blue-700 md:block xl:text-3xl'>Learning Time Adventures Daycare</h1>
          </div>
          <div className='flex flex-wrap'>
            <a className='px-4 py-2 text-xl font-light text-blue-800 hover:underline' href="">Home</a>
            <a className='px-4 py-2 text-xl font-light text-blue-800 hover:underline' href="">About Us</a>
            <a className='px-4 py-2 text-xl font-light text-blue-800 hover:underline' href="">Contact</a>
          </div>
        </header>
    </>
  )
}
