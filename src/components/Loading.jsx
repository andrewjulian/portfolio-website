import React from "react";
import { ThreeBody } from "@uiball/loaders";

const quotes = [
  {
    quote:
      "We can only see a short distance ahead, but we can see plenty there that needs to be done.",
    author: "Alan Turing",
  },
  {
    quote:
      "The most dangerous phrase in the language is, 'We've always done it this way.'",
    author: "Grace Hopper",
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    quote: "The computer was born to solve problems that did not exist before.",
    author: "Bill Gates",
  },
  {
    quote:
      "The most exciting phrase to hear in science, the one that heralds new discoveries, is not 'Eureka!' but 'That's funny...'",
    author: "Isaac Asimov",
  },
  {
    quote: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote:
      "The most beautiful thing we can experience is the mysterious. It is the source of all true art and science.",
    author: "Albert Einstein",
  },
  {
    quote: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House",
  },
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="mx-auto my-auto text-center">
        <ThreeBody size={100} color="#0097b2" />
        <h1 className="text-xl text-[#0097b2] font-bold mt-4">
          "{randomQuote.quote}"
          <br />- {randomQuote.author}
        </h1>
      </div>
    </div>
  );
};

export default Loading;
