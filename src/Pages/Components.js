/** @format */

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const Components = () => {
  const [blocks, setBlocks] = useState([]);
  const url =
    'https://drive.google.com/file/d/16Jrn6K0j948YSDbnn-CdBJXXEfyttV09/view?usp=sharing';
  const options = { mode: 'no-cors' , headers:{

  }};
  
  
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlocks(data))
      .catch((error) => {
        console.error('Error fetching data from Google Drive:', error);
      });
  }, []);

  return (
    <div className="flex-col flex w-full h-full">
      <h1 className="w-full font-semibold underline p-6">Building Blocks</h1>

      <section className="container mx-auto p-6 justify-between overflow-x-hidden overflow-y-auto">
        <div className="masonry space-y-10 w-full">
          {blocks.map((component, index) => (
            <div
              key={index}
              className="flex flex-col m-0 masonry-item  gap-3  w-[100%] max-w-[calc(100%-10px)] max-h-[1040px]">
              <div className="flex justify-between items-center">
                <h1>{component.name}</h1>
                <button className="button">Preview</button>
              </div>
              <div className="w-full rounded-lg bg-gray p-4 text-black overflow-auto">
                <ReactMarkdown>{component.content}</ReactMarkdown>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Components;
