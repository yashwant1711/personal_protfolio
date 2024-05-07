import React from "react";
import photo from "../../assets/formimage.png";
import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import emailjs from "@emailjs/browser";

function Contact() {
  const [sendName, setSendName] = React.useState("");
  const [sendEmail, setSendEmail] = React.useState("");
  const [sentSubject, setSentSubject] = React.useState("");
  const [sendMsg, setSendMsg] = React.useState("");

  const handelClick = (e) => {
    e.preventDefault();

    // if (!sendName || !sendEmail || !sentSubject || !sendMsg) return ;

    // if (!sendEmail.includes("@")) return warning();
    // console.log(sendName, sendEmail, sentSubject, sendMsg);

    // storing emial public key
    // const serviceId = "Your service id";
    // const templateId = "Your template id";
    // const publicKey = "Your public key";

    // // creating a new object that contains dynamic template

    const templaParams = {
      from_name: sendName,
      from_email: sendEmail,
      to_name: "Yashwant",
      subject: sentSubject,
      message: sendMsg,
    };

    // // sending email

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
    <div className="m-2 md:m-8 xl:m-10 md:p-10">
      <h3 className="text-xl font-semibold text-center md:text-start pb-2 xl:text-2xl xl:pb-5">
        Contact
      </h3>
      <div className="xl:flex xl:justify-around xl:items-center md:p-5">
        <div className="md:text-center">
          <h1 className="text-5xl font-extrabold">Let's create</h1>
          <h1 className="text-5xl font-extrabold">something</h1>
          <h1 className="text-5xl font-extrabold">together</h1>
          <img src={photo} alt="_" className="mt-4" />
        </div>
        <div className="mt-4 border-2 border-gray-800 xl:p-5 xl:w-1/3 xl:shadow-[10px_10px_0px_0px_rgba(0,0,0)] xl:m-5 ">
          <form>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input
                type="text"
                label="Name"
                size="lg"
                className="border-2 border-gray-800 m-2 font-bold lg"
                value={sendName}
                onChange={(e) => setSendName(e.target.value)}
              />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 ">
              <Input
                type="email"
                label="Email"
                size="lg"
                className="border-2 border-gray-800 m-2 font-bold "
                value={sendEmail}
                onChange={(e) => setSendEmail(e.target.value)}
              />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 ">
              <Input
                type="text"
                label="Subject"
                size="lg"
                className="border-2 border-gray-800 m-2 font-bold "
                value={sentSubject}
                onChange={(e) => setSentSubject(e.target.value)}
              />
            </div>
            <div className="border-2 border-gray-800 m-2 ">
            <Textarea
              label="Message"
              placeholder="Say hi"
              className="max-w-full font-bold "
              size="lg"
              value={sendMsg}
              onChange={(e) => setSendMsg(e.target.value)}
            />
            </div>
            <div className="flex justify-center md:justify-end p-2 pb-2">
            <Button color="primary"  className="xl:text-xl bg-pink-500" onClick={handelClick}>Let's Connect</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
