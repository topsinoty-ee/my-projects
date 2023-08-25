/** @format */

import React, { useState } from 'react';
import Card from '../Components/Card';
import ModalScreen from '../Components/ModalScreen';

const Projects = () => {
  const projects = [
    {
      image: {
        src: 'https://i.ibb.co/wc47d7Y/Customer-database-app.jpg',
        alt: 'Customer database application',
        description: 'Customer database application'
      },
      title: 'Customer database app',
      text: 'Customer database app made with java, react and tailwindcss',
    },
    {
      image: {
        src: 'https://i.ibb.co/DKdYNdd/Screenshot-2023-08-23-140047.jpg',
        alt: 'Screenshot of CycloneHD web',
      },
      title: 'CycloneHD',
      text: 'A homepage for CycloneHD...',
    },
    {
      title: 'Burger Joint',
      text: 'Web app built with HTML, tailwindcss and javaScript',
    },
    {
      title: 'Fu-Hire',
      text: 'A landing page for a deign that ',
    },
    {
      title: 'Portfolio',
      text: 'A app made to showcase my skills and projects.',
    },
    {
      image: {
        src: 'https://i.ibb.co/KD9TXrF/calculator.jpg',
        alt: 'calculator',
      },
      title: 'Calculator',
      text: 'A calculator app still in progress',
    },
    {
      title: 'Gameflix',
      text: 'A game database',
    },
    {
      image: {
        src: 'https://i.ibb.co/5Mh7sXq/Weather-app.jpg',
        alt: 'Weather-app',
      },
      title: 'Random Weather Generator',
      text: 'A random weather card generator',
    },
    {
      title: 'Grace Chapel Tallinn',
      text: 'A church website',
    },
    {
      title: 'Parahack',
      text: 'A company template',
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col relative items-center p-3 gap-5 container">
      {!isModalOpen ? (
        <>
          <div>
            <h1 className="text-4xl">My Projects</h1>
          </div>
          <div className="masonry space-y-10 w-full">
            {projects.map((card, index) => (
              <Card
                key={index}
                image={card.image}
                cardText={card.text}
                cardTitle={card.title}
                openModal={openModal}
                cardDescription={card.description}
              />
            ))}
          </div>
        </>
      ) : (
        <ModalScreen
          content={modalContent?.content}
          title={modalContent?.title}
          closeModal={closeModal}
          isOpen={isModalOpen}
        />
      )}
    </div>
  );
};

export default Projects;
