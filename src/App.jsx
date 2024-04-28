import "./App.css";
import { Button, Flex } from "antd";
import prettier from "../assets/prettier2.png";
import project1 from "../assets/project1img.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import Firstsection from "./components/Firstsection";
import Aboutme from "./components/Aboutme";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="main">
     <Firstsection/>
      <Aboutme/>
     <Technologies/>
      {/* <div className="fourth-component p-8 ">
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
              Liked by you and 6 others
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
      </div> */}

      
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
              <Button type="link" className="text-black">
                code
              </Button>
              <Flex>
                <Button type="primary" className="bg-black">
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
              <Button type="link" className="text-black">
                code
              </Button>
              <Flex>
                <Button type="primary" className="bg-black">
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
              <Button type="link" className="text-black ">
                code
              </Button>
              <Flex>
                <Button type="primary" className="bg-black ">
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
  );
}

export default App;
