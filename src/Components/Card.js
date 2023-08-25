/** @format */

import React, { useState } from 'react';
import PropTypes, { func } from 'prop-types';
import Button from './Button';
import ModalScreen from '../Components/ModalScreen';

const Card = ({
  image,
  cardTitle = 'card title',
  cardText = 'card text',
  cardDescription = 'Nothing here yet...check back later :-<',
  openModal,
}) => {
  const [cardImage] = useState({
    src:
      image?.src ||
      'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
    alt: image?.alt || cardTitle,
  });
  const [canFullscreen] = useState(Boolean(image?.src));

  function openImageModal() {
    openModal(
      cardTitle,
      <img
        className="rounded-lg select-none"
        src={cardImage.src}
        alt={cardImage.alt}
      />
    );
  }

  function openContentModal() {
    openModal(cardTitle, <div className='bg-white w-full rounded-lg p-4'>{cardDescription}</div>);
  }

  return (
    <div className="flex flex-col m-0 gap-3 w-[100%] max-w-[calc(100%-10px)] max-h-[1040px] bg-silver p-2 rounded-lg">
      <div className="relative inline-block">
        <img
          className="rounded-lg select-none card-image"
          src={cardImage.src}
          alt={cardImage.alt}
        />
        <div className="buttons">
          <Button
            children={<span>Fullscreen</span>}
            className="rounded-full bg-contain fullscreen"
            disabled={!canFullscreen}
            onClick={openImageModal}
          />
          <Button
            children="&gt;"
            className="font-bold"
            onClick={openContentModal}
          />
        </div>
      </div>
      <div>
        <h2 className="text-2xl">{cardTitle}</h2>
        <p className="text-sm w-full truncate-ellipsis">{cardText}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  cardTitle: PropTypes.string.isRequired,
  cardText: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Card;
