import React from "react";
import TestimonialCard from "./testoCard";

import pic1 from "../assets/images/pic1.png";
import pic2 from "../assets/images/pic2.png";
import pic3 from "../assets/images/pic3.png";
import pic4 from "../assets/images/pic4.png";
import pic5 from "../assets/images/pic5.png";

const testimonials = [
  {
    quoteBeforeHighlight:
      "folk helped us simplify our whole sales flow. Sometimes you get overwhelmed by all the tasks you need to do. Having folk just reminding us ",
    highlightedText: "what leads to prioritize",
    quoteAfterHighlight: " is a game-changer.",
    name: "Catherine",
    job: "Partnerships manager ",
    twitterHandle: "Eugeniuses",
    imageUrl: pic1,
    highlightColor: "bg-blue-100"
  },
  {
    quoteBeforeHighlight:
      "Prospecting takes multiple forms: reach out to someone, meet at an event, get introduced, word of mouth... ",
    highlightedText: "folk helps us capture all of this",
    quoteAfterHighlight: ".",
    name: "Hugo",
    job: "CEO ",
    twitterHandle: "nextra",
    imageUrl: pic2,
    highlightColor: "bg-green-100"
  },
  {
    quoteBeforeHighlight:
      "We're wearing a lot of hats and, at our agency, we need to. ",
    highlightedText: "My CRM organization needs to be streamlined",
    quoteAfterHighlight: " and easy to use. That's why we love folk.",
    name: "Oliver",
    job: "founder ",
    twitterHandle: "pinfluence",
    imageUrl: pic3,
    highlightColor: "bg-purple-100"
  },
  {
    quoteBeforeHighlight:
      "folk is simple and flexible enough to evolve with the way we collaborate as a team. We used to rely mainly on inbound and word-of-mouth. And now ",
    highlightedText: "folk helps also with prospecting",
    quoteAfterHighlight: ".",
    name: "Luc Chanut",
    job: "founder",
    twitterHandle: "monette",
    imageUrl: pic4,
    highlightColor: "bg-pink-100"
  },
  {
    quoteBeforeHighlight:
      "A future-proof CRM should do tasks on the background. I'll go to folk to get my insights, look at my boards, see how my pipeline is doing, but ",
    highlightedText: "I don't have to tell it stuff to do",
    quoteAfterHighlight: ". That's the beauty of it.",
    name: "Luc Chanut",
    job: "founder ",
    twitterHandle: "monette",
    imageUrl: pic5,
    highlightColor: "bg-yellow-100"
  },
  {
    quoteBeforeHighlight:
      "Prospecting takes multiple forms: reach out to someone, meet at an event, get introduced, word of mouth... ",
    highlightedText: "folk helps us capture all of this",
    quoteAfterHighlight: ".",
    name: "Hugo",
    job: "CEO",
    twitterHandle: " @nextra",
    imageUrl: pic2,
    highlightColor: "bg-green-100"
  }
];

const Testimonials = () => {
  return (
    <div className="px-6 py-10 max-w-[1500px] mx-auto">
      <h2 className="text-5xl font-bold mb-8 text-left font-uxum normal">
        What People Are Saying
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, index) => (
          <div key={index}>
            <TestimonialCard {...t} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
