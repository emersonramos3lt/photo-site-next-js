import React from 'react'
import Link from 'next/link'

const Button = () => {
  return (
    <button className='bg-black text-white p-3 rounded border border-black transition-colors hover:bg-transparent hover:text-black'>
        <Link href="/">See my portfolio</Link>
    </button>
  )
}

export default Button