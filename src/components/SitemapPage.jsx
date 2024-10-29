import React from 'react'
import { Link } from 'react-router-dom'

export default function SitemapPage() {
  return (
    <div>
    <div className='mt-2 flex flex-col gap-8 px-[6%]'>
        <main id='main' className='px-4 py-10 w-full flex flex-col gap-4 text-blue-900 bg-gradient-to-b from-zinc-50 via-zinc-100 to-zinc-200'>
            <h2 className='text-3xl font-bold'>Site Map Links</h2>
            <nav aria-label='Site Map'>
                <ul className='pt-0 flex flex-col gap-4 text-xl text-blue-800'>
                    <li><Link to='/' className='underline hover:text-blue-900 hover:font-bold'>Home</Link></li>
                    <li><Link to='/about' className='underline hover:text-blue-900 hover:font-bold'>About</Link></li>
                    <li><Link to='/contact' className='underline hover:text-blue-900 hover:font-bold'>Contact</Link></li>
                    <li><Link to='/sitemap' className='underline hover:text-blue-900 hover:font-bold'>Site Map</Link></li>
                </ul>
            </nav>
        </main>
    </div>
</div>
  )
}
