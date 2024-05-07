import React from 'react'
import html from "../../assets/html.png";
import css from "../../assets/css.jpg";
import js from "../../assets/js.png";
import typescript from "../../assets/typescript.png";
import tailwind from "../../assets/tailwind.png";
import redux1 from "../../assets/redux1.jpg";
import github1 from "../../assets/github1.png";
import react_icon2 from "../../assets/react-icon-2.png";

function Technologies() {
  return (
    <div className='m-2 md:m-8 xl:m-10'>
      <h3 className='text-xl font-semibold text-center md:text-start pb-2 xl:text-2xl xl:pb-5'>Technologies</h3>
      <div className='border-2 border-gray-800'>
        <div className='text-2xl font-extrabold p-5 border-b-2 border-gray-800 md:text-3xl xl:text-3xl xl:p-8 '>
        <h3>Check out what I'm good at.</h3>
        </div>
        <div className='flex md:flex-col md:m-5 '>
            <div className='flex flex-col justify-center items-center border-r-2 border-gray-800 md:border-none md:flex-row md:justify-around md:items-center md:p-5'>
                <div className=' flex  flex-col items-center gap-2 p-5 md:gap-0 md:p-0 '>
                    <img src={html} alt="_" className='w-1/3 md:w-24 md:h-24'/>
                    <p className='font-semibold'>HTML</p>
                </div>
                <div className=' flex  flex-col items-center gap-2 p-5 md:gap-0 md:p-0'>
                <img src={css} alt="_" className='w-1/3 md:w-24 md:h-24'/>
                <p className='font-semibold'>CSS</p>
                </div>
                <div className=' flex  flex-col items-center gap-2 p-5 md:gap-0 md:p-0'>
                <img src={js} alt="_" className='w-1/3 md:w-24 md:h-24' />
                <p className='font-semibold'>JavaScript</p>
                </div>
               <div className=' flex  flex-col items-center gap-2 p-5 md:gap-0 md:p-0'>
               <img src={typescript} alt="_" className='w-1/3 md:w-24 md:h-24'/>
               <p className='font-semibold'>TypeScript</p>
               </div>
            </div>
            <div className='flex flex-col justify-center items-center md:flex-row md:justify-around md:items-center md:p-5 '>
            <div className=' flex  flex-col items-center gap-2 p-5 md:gap-0 md:p-0 '>
                    <img src={tailwind} alt="_" className='w-1/3 md:w-24 md:h-24'/>
                    <p className='font-semibold'>Tailwind</p>
                </div>
                <div className=' flex  flex-col items-center gap-2 p-5 md:gap-0 md:p-0'>
                <img src={react_icon2} alt="_" className='w-1/3 md:w-24 md:h-24'/>
                <p className='font-semibold'>React</p>
                </div>
                <div className=' flex  flex-col items-center gap-2 p-5 md:gap-0 md:p-0'>
                <img src={redux1} alt="_" className='w-1/3 md:w-24 md:h-24'/>
                <p className='font-semibold'>Redux</p>
                </div>
               <div className=' border-gray-800 flex  flex-col items-center gap-2 p-5 md:gap-0 md:p-0'>
               <img src={github1} alt="_" className='w-1/3 md:w-24 md:h-24'/>
               <p className='font-semibold'>GitHub</p>
               </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Technologies
