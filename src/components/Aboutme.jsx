import React from 'react'
import photo1 from "../../assets/photo1.jpg";


function Aboutme() {
  return (
    <div>
      <div className="fourth-component p-10">
        <h3 className="text-xl font-semibold tracking-wider">About Me</h3>
        <div className="fourth-component-text border-2 border-gray-800 mt-5">
          <h2 className="text-3xl font-bold p-8">Get to know me better.</h2>
          <div className="main-bottom-area flex h-32 border-t-2 border-b-2 border-gray-800 ">
            <div className="inner-text flex items-center p-8  border-gray-800 ">
              <img
                className="rounded-full"
                src={photo1}
                alt="img"
                width="100px"
                hight="100px"
              />
              <h3 className="text-3xl font-bold p-3">Yashwant Gurjar</h3>
            </div>
            <div className="border-l-2 border-gray-800 text-xl font-semibold  p-12">
              <p>Liked by you and 6 others</p>
              
            </div>
          </div>
          <div className="main-end-area">
            <p className="text-lg font-medium p-10 break-all">
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
      </div>
    </div>
  )
}

export default Aboutme
