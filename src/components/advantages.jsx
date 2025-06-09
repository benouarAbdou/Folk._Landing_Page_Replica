import React from "react";
import AdvantageCard from "../components/advantageCard.jsx";

// Import images
import im5 from "../assets/images/im5.webp";
import im6 from "../assets/images/im6.webp";
import im7 from "../assets/images/im7.webp";
import im8 from "../assets/images/im8.webp";
import im9 from "../assets/images/im9.webp";

function Advantages() {
  const cardsData = [
    {
      title: "Capture contacts fast as lightning",
      paragraph:
        "folkX chrome extension imports leads and enriches their details without leaving LinkedIn",
      buttonText: "Explore folkX extension",
      imageSrc: im5
    },
    {
      title: "Sales research, done for you",
      paragraph:
        "Smart fields find emails in 1 click, identify a lead’s strongest connection, and import data from your prospect’s website with AI",
      buttonText: "Explore 1-click Enrichment",
      imageSrc: im6
    },
    {
      title: "Personal outreach, at scale",
      paragraph:
        "CRM data combined with AI to generate contextual drafts, schedule messages, and automate sequences",
      buttonText: "Explore Messages & Sequences",
      imageSrc: im7
    },
    {
      title: "Get the full story about every lead",
      paragraph:
        "Integrations capture all the details about your relationships by connecting to your emails, calendar, social platforms, and 6000+ other tools",
      buttonText: "Explore Integrations",
      imageSrc: im8
    },
    {
      title: "Sell together, close faster",
      paragraph:
        "Collaborate on deals with shared pipelines, customizable roles and permissions, and sales dashboards",
      buttonText: "Explore Pipelines",
      imageSrc: im9
    }
  ];

  return (
    <div className="flex flex-col items-center gap-10 px-4 py-10">
      {cardsData.map((card, index) => (
        <AdvantageCard
          key={index}
          title={card.title}
          paragraph={card.paragraph}
          buttonText={card.buttonText}
          imageSrc={card.imageSrc}
        />
      ))}
    </div>
  );
}

export default Advantages;
