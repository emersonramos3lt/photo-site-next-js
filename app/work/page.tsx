"use client"

import React from 'react'
import Button from '@/components/Button'
import Link from 'next/link'
import Image from 'next/image'
import { RevealWrapper } from 'next-reveal'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <main>
       <header className="p-8 flex justify-between items-center">
        <div className="cursor-pointer">
          <h1 className="text-4xl font-semibold">
            <Link href="/">Focus</Link>
          </h1>
          <span className="text-orange">Urban Photographer</span>
        </div>
        <div>
          <Button />
        </div>
      </header>


    <RevealWrapper delay={400} origin='bottom' mobile={false} desktop={true}>
    <section>
        <div className='grid-area'>

          <div className="item-1 p-8">
            <Image src="/img1.jpg" alt='Image 1' aria-labelledby='caption-1'
            width={500} height={500}/>
          <h2 id='caption-1' className='font-medium p-2'>A photo of a house with bright colors.</h2>
          </div>

          <div className="item-2 p-8">
            <Image src="/img2.jpg" alt='Image 2' aria-labelledby='caption-2'
            width={500} height={500}/>
            <h2 id='caption-2' className='font-medium p-2'>A bicycle on a pink background.</h2>
         </div>
       

         
          <div className="item-3 p-8">
            <Image src="/img3.jpg" alt='Image 3' aria-labelledby='caption-3'
            width={800} height={800}/>
            <h2 id='caption-3' className='font-medium p-2'>A photo of the building.</h2>
         </div>
        

        
          <div className="item-4 p-8">
            <Image src="/img4.jpg" alt='Image 4' aria-labelledby='caption-4'
            width={500} height={500}/>
            <h2 id='caption-4' className='font-medium p-2'>Photo of the CN Tower in Canada.</h2>
         </div>
        </div>
      </section>
    </RevealWrapper>

    <Footer />
    </main>
  )
}

export default page
