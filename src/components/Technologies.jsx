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
    <div>
      <div className="fifth-component p-10">
        <h3 className="text-xl font-semibold tracking-wider">TECNOLOGIES</h3>
        <div className="fifth-component-main border-2 border-gray-800  mt-5">
          <h2 className="fifth-component-text border-b-2 border-gray-800 text-3xl font-bold p-8">
            Check out what I'm good at.
          </h2>
          <div className="fifth-component-images m-5">
            <div className="first_components_tech flex justify-around items-center">
              <div className="flex flex-col items-center">
                <img src={html} alt="_" width="100px" hight="100px" />
                <p className="text-lg font-bold">HTML</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={css} alt="_" width="100px" hight="100px" />
                <p className="text-lg font-bold">CSS</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={js} alt="" width="100px" hight="100px" />
                <p className="text-lg font-bold">JS</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={typescript} alt="" width="100px" hight="100px" />
                <p className="text-lg font-bold">TS</p>
              </div>
            </div>
            <div className="second_components_tech flex justify-around items-center pt-8">
              <div className="flex flex-col items-center">
                <img src={react_icon2} alt="" width="100px" hight="100px" />
                <p className="text-lg font-bold">React</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={tailwind} alt="" width="100px" hight="100px" />
                <p className="text-lg font-bold pt-8">Tailwind</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={redux1} alt="" width="100px" hight="100px" />
                <p className="text-lg font-bold">Redux</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={github1} alt="" width="100px" hight="100px" />
                <p className="text-lg font-bold">GitHub</p>
              </div>
            </div>
            {/* <div >

            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technologies
