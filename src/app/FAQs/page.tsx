
"use client";

import React, { useState } from "react";
import Header from "../components/header";
import Header2 from "../components/header2";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const questions = [
    {
      question: "What types of chairs do you offer?",
      answer: "We offer a wide variety of chairs including ergonomic, executive, and gaming chairs.",
    },
    {
      question: "Do your chairs come with a warranty?",
      answer: "Yes, all our chairs come with a 1-year limited warranty.",
    },
    {
      question: "Can I try a chair before purchasing?",
      answer: "You can visit our showroom to test the chairs before buying.",
    },
    {
      question: "How can we get in touch with you?",
      answer: "You can contact us via email or phone, available on our website.",
    },
    {
      question: "What will be delivered? And When?",
      answer: "We deliver fully assembled chairs within 5-7 business days.",
    },
    {
      question: "How do I clean and maintain my Comfortly chair?",
      answer: "Use a damp cloth and mild soap to clean the chair. Avoid abrasive cleaners.",
    },
  ];

  return (
    <div>
      <Header />
      <Header2 />
      <Navbar />
      <div className="flex flex-col items-center px-6 py-10 md:px-16 lg:px-32">
        <h1 className="text-2xl font-bold md:text-3xl">Questions Looks Here</h1>
        <p className="text-center text-gray-500 mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {questions.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm p-4 cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">{item.question}</h2>
                <span
                  className={`text-lg font-bold transform ${
                    openQuestion === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </div>
              {openQuestion === index && (
                <p className="mt-2 text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;

