import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex items-center justify-center flex-col p-8'>

        <h1 className='text-orange font-medium'>Contact or more photos</h1>

         <div className="inline-flex mt-7">  
              <Image src="/instagram.svg" alt="Instagram"
              width={25} height={25} className="mr-8 cursor-pointer"/>
              <Image src="/twitter.svg" alt="Twitter"
              width={25} height={25} className="mr-8 cursor-pointer"/>
              <Image src="/unsplash.svg" alt="Unsplash"
              width={25} height={25} className="cursor-pointer"/>
          </div>
    </footer>
  )
}

export default Footer