import React from "react";
import prettier from "../../assets/prettier2.png";
import project1 from "../../assets/project1img.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import { Button } from "@nextui-org/button";

function Projects() {
  return (
    <>
      <div className="m-2 md:m-8 xl:m-10">
        <h3 className="text-xl font-semibold text-center md:text-start pb-2 xl:text-2xl xl:pb-5">
          PROJECTS
        </h3>
        <div className="border-2 border-gray-800">
          <div className="text-2xl font-extrabold p-5 md:text-3xl xl:text-3xl xl:p-8 border-b-2 border-gray-800">
            <h2>Take a look what I'm working on.</h2>
          </div>
          <div>
            <img src={prettier} alt="" />
          </div>
        </div>
      </div>


      <div className="m-2 md:m-8 xl:m-10">
        <h3 className="text-xl font-semibold text-center md:text-start pb-2 xl:text-2xl xl:pb-5">
          01.
        </h3>
        <div className="border-2 border-gray-800">
          <div className="text-2xl font-extrabold md:text-3xl xl:text-3xl  border-b-2 border-gray-800">
            <div className="flex justify-between items-center border-b-2 border-gray-800 p-5">
            <h2>Calcas.</h2>
            <div>
              <Button
                color="primary"
                className="text-black xl:text-xl"
                variant="light"
              >
                code
              </Button>
              <Button
                color="primary"
                className="xl:text-xl text-white bg-black" >
                Visit
              </Button>
            </div>
            </div>
            <div>
                <img src={project1} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="m-2 md:m-8 xl:m-10">
        <h3 className="text-xl font-semibold text-center md:text-start pb-2 xl:text-2xl xl:pb-5">
          02.
        </h3>
        <div className="border-2 border-gray-800">
          <div className="text-sm font-extrabold md:text-3xl xl:text-3xl  border-b-2 border-gray-800">
            <div className="flex justify-between items-center border-b-2 border-gray-800 p-5">
            <h2>Response.AI.</h2>
            <div>
              <Button
                color="primary"
                className="text-black xl:text-xl"
                variant="light"
              >
                code
              </Button>
              <Button
                color="primary"
                className="xl:text-xl text-white bg-black " >
                Visit
              </Button>
            </div>
            </div>
            <div className="p-5">
                <img src={project2} alt="" />
            </div>
          </div>
        </div>
      </div>

      
      <div className="m-2 md:m-8 xl:m-10">
        <h3 className="text-xl font-semibold text-center md:text-start pb-2 xl:text-2xl xl:pb-5">
          03.
        </h3>
        <div className="border-2 border-gray-800">
          <div className="text-sm font-extrabold md:text-3xl xl:text-3xl  border-b-2 border-gray-800">
            <div className="flex justify-between items-center border-b-2 border-gray-800 p-5">
            <p>Personal Portfolio.</p>
            <div>
              <Button
                color="primary"
                className="text-black xl:text-xl"
                variant="light"
              >
                code
              </Button>
              <Button
                color="primary"
                style={{ background: "black" }}
                className="xl:text-xl text-white bg-black" >
                Visit
              </Button>
            </div>
            </div>
            <div className="p-5">
                <img src={project3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
