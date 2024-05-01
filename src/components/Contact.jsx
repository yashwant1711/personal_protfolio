import React from "react";
import { Input } from "antd";
const { TextArea } = Input;
import { Button, Flex } from "antd";
import photo from "../../assets/formimage.png";


function Contact() {
  return (
      <div className="contact p-4">
        <h1 className="text-3xl font-bold px-8">Contact</h1>
        <div className="contact-main m-5">
          <div className="contact-text flex  justify-around items-center">
            <div className="first-section">
              <h1 className="text-5xl font-extrabold">Let's    create</h1>
              <h1 className="text-5xl font-extrabold">something</h1>
              <h1 className="text-5xl font-extrabold">together</h1>
              <img src={photo} alt="_" width={"300px"} />
            </div>
            <div className="form-section border-2 border-gray-800 flex flex-col p-8 w-1/3 shadow-[10px_10px_0px_0px_rgba(0,0,0)]">
            <div className="name_section_form flex items-center p-4">
                <p className="mr-5"  style={{ width: '80px' }}>Name</p>
                <Input className="border-2 border-gray-800"  style={{ width: 'calc(100% - 85px)' }}/>
              </div>
                <div className="email_section_form flex items-center justify-between p-4 ">
                  <p className="mr-5" style={{ width: '80px' }}>Email</p>
                  <Input className="border-2 border-gray-800" type="email"  style={{ width: 'calc(100% - 85px)' }} />
                </div>
                <div className="subject_section_form flex items-center justify-between p-4">
                  <p className="mr-5"  style={{ width: '80px' }}>Subject</p>
                  <Input  className="border-2 border-gray-800" style={{ width: 'calc(100% - 85px)' }} />
                </div>
                <div className="form_area w-full p-4">
                <TextArea className="text-xl font-medium border-2 border-gray-800" rows={6} placeholder="Say hi!" />
                </div>
                <div className="form_button w-full flex justify-end items-center p-4">
                <Flex>
                <Button  className="bg-pink-300 text-xl font-bold text-black border-2 border-black  py-0 ">
                  Let's talk!
                </Button>
               </Flex>
                </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Contact;
