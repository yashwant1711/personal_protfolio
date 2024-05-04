import React from "react";
import { Input, message } from "antd";
const { TextArea } = Input;
import { Button, Flex } from "antd";
import photo from "../../assets/formimage.png";
import emailjs from "@emailjs/browser";


function Contact() {
  const [sendName, setSendName] = React.useState("");
  const [sendEmail, setSendEmail] = React.useState("");
  const [sentSubject, setSentSubject] = React.useState("");
  const [sendMsg, setSendMsg] = React.useState("");

  const formRef = React.useRef(null);

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Message sent successfully',
    });
  };
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Please fill all the fields',
    });
  };

  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: 'Please enter a valid email',
    });
  }

  const handelClick = (e) => {
    e.preventDefault();

    if(!sendName  || !sendEmail || !sentSubject  || !sendMsg  )  return error();
    
    if(!sendEmail.includes("@")) return warning();
    console.log("Form submitted!");
    console.log(sendName,sendEmail,sendMsg, sentSubject);
    success();
    setSendName("");
    setSendEmail("");
    setSentSubject("");
    setSendMsg("");
    

    

    // storing emial public key
    const serviceId = "Your service id";
    const templateId = "Your template id";
    const publicKey = "Your public key";

    // creating a new object that contains dynamic template

    const templaParams = {
      from_name: sendName,
      from_email: sendEmail,
      to_name: "Yashwant",
      subject: sentSubject,
      message: sendMsg,
    };

    // sending email

    emailjs
      .send(serviceId, templateId, templaParams, publicKey)
      .then((res) => {
        console.log("email sent", res.status, res.text);
        setSendName(" ");
        setSendEmail(" ");
        setSentSubject(" ");
        setSendMsg(" ");
      })
      .catch((err) => {
        console.log(err);
      });
      
  };
  return (
    <div className="contact p-4">
      <h1 className="text-3xl font-bold px-8">Contact</h1>
      <div className="contact-main m-5">
        <div className="contact-text flex  justify-around items-center">
          <div className="first-section">
            <h1 className="text-5xl font-extrabold">Let's create</h1>
            <h1 className="text-5xl font-extrabold">something</h1>
            <h1 className="text-5xl font-extrabold">together</h1>
            <img src={photo} alt="_" width={"300px"} />
          </div>
          <div className="form-section border-2 border-gray-800 flex flex-col p-8 w-1/3 shadow-[10px_10px_0px_0px_rgba(0,0,0)]">
            <form ref={formRef} >
              <div className="name_section_form flex items-center p-4">
                <p className="mr-5" style={{ width: "80px" }}>
                  Name
                </p>
                <Input
                  className="border-2 border-gray-800"
                  style={{ width: "calc(100% - 85px)" }}
                  value={sendName}
                  onChange={(e) => setSendName(e.target.value)}
                />
              </div>
              <div className="email_section_form flex items-center justify-between p-4 ">
                <p className="mr-5" style={{ width: "80px" }}>
                  Email
                </p>
                <Input
                  className="border-2 border-gray-800"
                  type="email"
                  style={{ width: "calc(100% - 85px)" }}
                  value={sendEmail}
                  onChange={(e) => setSendEmail(e.target.value)}
                />
              </div>
              <div className="subject_section_form flex items-center justify-between p-4">
                <p className="mr-5" style={{ width: "80px" }}>
                  Subject
                </p>
                <Input
                  className="border-2 border-gray-800"
                  style={{ width: "calc(100% - 85px)" }}
                  value={sentSubject}
                  onChange={(e) => setSentSubject(e.target.value)}
                />
              </div>
              <div className="form_area w-full p-4">
                <TextArea
                  className="text-xl font-medium border-2 border-gray-800"
                  rows={6}
                  placeholder="Say hi!"
                  value={sendMsg}
                  onChange={(e) => setSendMsg(e.target.value)}
                />
              </div>
              <div className="form_button w-full flex justify-end items-center p-4">
                <Flex>

                  <Button
                    type="submit"
                    className="bg-pink-300 text-xl font-bold text-black border-2 border-black  py-0 "
                    onClick={handelClick}
                    >
                    Let's talk!
                  </Button>
                </Flex>
              </div>
              {contextHolder}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
