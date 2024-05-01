import React from 'react'
import { Button, Flex } from "antd";
import prettier from "../../assets/prettier2.png";
import project1 from "../../assets/project1img.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
function Project() {
  return (
    <div>
       <div className="sixth_component_project p-8">
        <h3 className="text-xl font-semibold tracking-wider ">PROJECTS</h3>
        <div className="sixth_component_project_main border-2 border-gray-800 mt-5 ">
          <h2 className="sixth_component_project_text border-b-2 border-gray-800 text-3xl font-bold p-8">
            Take a look what I've been working on.
          </h2>
          <div className="sixth_component_project_images">
            <div className="image ">
              <img src={prettier} alt="" width={"auto"} />
            </div>
          </div>
        </div>
      </div>
      <div className="seventh_components first_ptoject p-8">
        <h3 className="text-xl font-semibold tracking-wider">01.</h3>
        <div className="senvth_component  border-2 border-gray-800 mt-5 ">
          <div className="senvth_component_heading border-b-2 border-gray-800 flex  items-center justify-between p-8">
            <h2 className="senvth_component_text    text-3xl font-bold ">
              Calacs
            </h2>
            <div className="buttons flex items-center">
              <Button type="link" className="text-black text-xl">
                code
              </Button>
              <Flex>
                <Button type="primary" className="bg-black text-xl px-5 py-0.5">
                  Visit
                </Button>
              </Flex>
            </div>
          </div>
          <div className="senvth_component_images">
            <img src={project1} alt="_" width={"75%"} className="m-auto" />
          </div>
        </div>
      </div>
      <div className="seventh_components first_ptoject p-8">
        <h3 className="text-xl font-semibold tracking-wider ">02.</h3>
        <div className="senvth_component  border-2 border-gray-800 mt-5">
          <div className="senvth_component_heading border-b-2 border-gray-800 flex  items-center justify-between p-8">
            <h2 className="senvth_component_text    text-3xl font-bold ">
              Response.AI
            </h2>
            <div className="buttons flex items-center">
              <Button type="link" className="text-black text-xl">
                code
              </Button>
              <Flex>
                <Button type="primary" className="bg-black text-xl px-5 py-0.5">
                  Visit
                </Button>
              </Flex>
            </div>
          </div>
          <div className="senvth_component_images">
            <img src={project2} alt="_" width={"75%"} className="m-auto" />
          </div>
         
        </div>
      </div>
      <div className="seventh_components first_ptoject p-8">
        <h3 className="text-xl font-semibold tracking-wider">03.</h3>
        <div className="senvth_component  border-2 border-gray-800 mt-5">
          <div className="senvth_component_heading border-b-2 border-gray-800 flex  items-center justify-between p-8">
            <h2 className="senvth_component_text    text-3xl font-bold ">
              Personal Portfolio
            </h2>
            <div className="buttons flex items-center ">
              <Button type="link" className="text-black text-xl">
                code
              </Button>
              <Flex>
                <Button type="primary" className="bg-black  text-xl px-5 py-0.5">
                  Visit
                </Button>
              </Flex>
            </div>
          </div>
          <div className="senvth_component_images">
            <img src={project3} alt="_" width={"75%"} className="m-auto" />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Project
