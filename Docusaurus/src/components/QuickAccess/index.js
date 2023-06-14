import React, { useState } from "react";
import "./QuickAccess.css";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const cards = [
    {
      title: "How to use Linux 101",
      subtitle: "Because it's too hard",
      image: "https://www.pengertianku.net/wp-content/uploads/2017/08/pengertian-linux.jpg",
      content: "In this tutorial, we will cover the basics of using Linux, including navigating the file system, running commands, managing processes, and more. We will provide step-by-step instructions and explanations to help you become familiar with Linux and its command-line interface.",
      target: "docs/intro"
    },
    {
      title: "All About Docusaurus",
      subtitle: "A Better Markdown",
      image: "https://docusaurus.io/img/docusaurus.svg",
      content: "Docusaurus is a documentation framework that makes it easy to build, deploy, and maintain documentation websites. In this comprehensive guide, we will dive into the features and benefits of Docusaurus, how to install and configure it, and how to create and customize your documentation using Markdown.",
      target: "docs/category/tutorial---basics"
    },
    {
      title: "Setup VirtualBox",
      subtitle: "Because you use windows",
      image: "https://telset.id/wp-content/uploads/2016/08/virtbox_1.jpg",
      content: "VirtualBox is a powerful virtualization software that allows you to run multiple operating systems on your Windows machine. This tutorial will walk you through the process of setting up VirtualBox, creating virtual machines, installing guest operating systems, and managing your virtual environment.",
      target: "docs/tutorial-basics/create-a-page"
    },
  ];

  const filteredCards = searchQuery
    ? cards.filter((card) =>
        card.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : cards;

  return (
    <>
      <div className="title">Quick Access</div>
      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="search-input"
        />
      </div>
      <div className="grid-container">
        {filteredCards.map((card, index) => (
          <a href={card.target} className="" key={card.title}>
            <article className="card" key={index}>
              <img src={card.image} alt="Place image here" />
              <div className="card_content">
                <span className="card_title">{card.title}</span>
                <span className="card_subtitle">{card.subtitle}</span>
                <p className="card_description">
                  {card.content.length > 200
                    ? `${card.content.substring(0, 200)}...`
                    : card.content}
                </p>
              </div>
            </article>
          </a>
        ))}
      </div>
    </>
  );
};

export default Index;

