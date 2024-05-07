import React from 'react'
import photo1 from '../../assets/photo1.jpg'

function Aboutme() {
  return (
    <div className='m-2 md:m-8 xl:m-10'>
      <h3 className='text-xl font-semibold text-center md:text-start pb-2 xl:text-2xl xl:pb-5'>About Me</h3>
      <div className='border-2 border-gray-800'>
        <div className='text-2xl font-extrabold p-5 md:text-3xl xl:text-3xl xl:p-8 border-b-2 border-gray-800'>
        <h2>Get to Know me Better</h2>
        </div>
        <div className='flex justify-between md:justify-normal items-center border-b-2 border-gray-800 '>
        <div className='p-2 flex items-center border-r-2 border-gray-800 xl:p-4'>
            <img src={photo1} alt="_"  className="rounded-full drop-shadow-lg w-10 md:w-16 xl:w-24"/>
            <h4 className='px-3 font-bold md:text-xl xl:text-2xl'>Yashwant Gurjar</h4>
        </div>
        <div>
            <h4 className='px-1 font-semibold xl:text-xl xl:px-5'>Liked by you and 6 others </h4>
        </div>
        </div>
        <p className="text-lg font-medium p-2 break-all xl:text-lg xl:p-10">
              Passionate about the realm of technology, I am a results-driven
              Front-end software developer with a solid background in frontend
              development. Proficient in languages such as JavaScript and
              currently expanding my skills with TypeScript, I also possess
              framework knowledge in React.js and Tailwind.css. My focus lies in
              crafting robust and scalable applications that tackle complex
              issues while delivering exceptional user experiences. I am deeply
              passionate about developing new products with a strong focus on
              utilizing effective technology. I am proficient in conducting
              thorough research and possess some knowledge of marketing
              strategies. I find great satisfaction in conceptualizing and
              creating products, and I am committed to ensuring their success.
            </p>
      </div>
    </div>
  )
}

export default Aboutme
