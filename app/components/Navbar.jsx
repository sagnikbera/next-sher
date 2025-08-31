import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-6 py-3 text-xl bg-pink-400'>
      <h3>Logo</h3>

      <div className='flex gap-6'>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/product">Product</Link>
      </div>
    </div>
  )
}

export default Navbar
