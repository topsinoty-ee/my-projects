/** @format */

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Button from '../Components/Button';

const Components = () => {
  const [blocks, setBlocks] = useState([]);
  const [allIsHidden, setAllIsHidden] = useState(true);
  const [hiddenStates, setHiddenStates] = useState([]); // Add this state for individual visibility

  const url = 'https://api.jsonbin.io/v3/b/64da34708e4aa6225ecfd84c';
  const options = {
    headers: {
      'X-Master-Key':
        '$2b$10$eHmgjYnzA7vN9WhfhH/.puZlZ8g6BsCIcfv.JOFn1fZKqAVrPZ9SK',
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setBlocks(data.record);
        setHiddenStates(new Array(data.record.length).fill(true)); // Initialize all blocks as hidden
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // ...

  return (
    <div className="flex-col flex w-full h-full">
      <div className="flex items-center p-6">
        <h1 className="w-full font-semibold underline">Building Blocks</h1>
        <div className="flex-grow w-full flex-row-reverse flex">
          <Button
            color="blue"
            onClick={() => {
              setAllIsHidden(!allIsHidden);
              setHiddenStates(hiddenStates.map(() => !allIsHidden)); // Toggle all hidden states
            }}>
            {allIsHidden ? 'Show All' : 'Hide All'}
          </Button>
        </div>
      </div>
      <section className="container mx-auto p-6 justify-between overflow-x-hidden overflow-y-auto">
        <div className="masonry space-y-10 w-full">
          {blocks.length > 0 ? (
            blocks.map((component, index) => (
              <div
                key={index}
                className="flex flex-col m-0 masonry-item gap-3 w-[100%] max-w-[calc(100%-10px)] max-h-[1040px]">
                <div className="flex justify-between items-center">
                  <h1>{component.name}</h1>
                  <div className="flex gap-3">
                    <Button
                      color={hiddenStates[index] ? 'blue' : 'maroon'}
                      onClick={() => {
                        setHiddenStates((prevHiddenStates) => {
                          const newHiddenStates = [...prevHiddenStates];
                          newHiddenStates[index] = !newHiddenStates[index];
                          return newHiddenStates;
                        });
                      }}>
                      {hiddenStates[index] ? 'Show more' : 'Hide'}
                    </Button>
                    <Button color="olive">Preview</Button>
                  </div>
                </div>
                <div
                  className={`w-full rounded-lg bg-gray p-4 text-black overflow-auto ${
                    hiddenStates[index] ? 'hidden' : ''
                  }`}>
                  <ReactMarkdown>{component.content}</ReactMarkdown>
                </div>
              </div>
            ))
          ) : (
            <div className="flex gap-3 w-full m-auto">
              <div className="animate-spin border-8 rounded-full w-4 h-4 border-t-blue border-gray-300"></div>
              <p>Loading</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Components;
