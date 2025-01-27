"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { useTheme } from "next-themes";

function ContactForm() {
  const [userInput, setUserInput] = useState({ name: "", email: "", message: "" });
  const {theme} = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    setUserInput({ ...userInput, [name]: value });
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

    try {
        const emailParams = {
            name: userInput.name,
            email: userInput.email,
            message: userInput.message,
        };
        const res = await emailjs.send(serviceID, templateID, emailParams, userID);
        if (res.status === 200) {
            toast.success("Message sent successfully!");
            setUserInput({ name: "", email: "", message: "" });
        }
    } catch (error: unknown) {
        console.log(error);
        toast.error("Failed to send message. Please try again later.");
    }
};

  return (
    <form onSubmit={handleSubmit} className=" flex flex-col items-center justify-center border border-input rounded-lg p-5 gap-3 " >
      <div className="flex flex-col">
        <label>Your Name</label>
        <input type="text" name="name" className={"rounded-md max-w-96 min-w-60 p-2 border-input border outline-none sm:min-w-64"} value={userInput.name} onChange={handleChange} required />
      </div>
      <div className="flex flex-col">
        <label>Your Email</label>
        <input type="email" name="email" className={"rounded-md max-w-96 min-w-60 p-2 border-input border outline-none sm:min-w-64 "} value={userInput.email} onChange={handleChange} required />
      </div>
      <div className="flex flex-col">
        <label>Your Message</label>
        <textarea name="message" className={"rounded-md max-w-96 min-w-60 p-2 border-input border outline-none sm:min-w-64"} value={userInput.message} onChange={handleChange} required />
      </div>
      <button type="submit" className={`border border-input font-semibold m-2 px-6 py-2 rounded-lg hover:blend-difference ${theme === "light" ? "hover:text-black hover:bg-slate-100":"hover:bg-black hover:text-slate-100 bg-slate-100 text-black"}`}>Send</button>
    </form>
  );
}

export default ContactForm;
