/** @format */

import React from 'react';
import Button from './Button';

const ModalScreen = ({ content, title, isOpen = false, closeModal }) => {
  return (
    <div className={`modal-container ${isOpen ? 'flex' : 'hidden'}`}>
      <header className="flex top-0 sticky z-50 items-center h-10 py-6 px-4 bg-yellow-accent border-b">
        <Button
          children="&lt;"
          onClick={closeModal}
        />
        <div className="flex-grow  h-full flex items-center justify-center ">
          <h1 className="font-bold text-3xl">{title}</h1>
        </div>
      </header>
      <div className="h-full overflow-hidden p-3 bg-gray">
        <div className="h-full w-full rounded-lg flex justify-center">
          {content ? content : 'Nothing here yet...check back later :-<'}
        </div>
      </div>
    </div>
  );
};

export default ModalScreen;
