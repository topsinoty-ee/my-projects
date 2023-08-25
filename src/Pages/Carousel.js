import React, { useState, useEffect } from 'react';

const Carousel = ({ seconds, isPlaying }) => {
    const [images, setImage] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [speed, setSpeed] = useState(seconds)
    const [isPaused, setIsPaused] = useState(isPlaying)

    //fetch images from api
    useEffect(() => {
        fetch('https://dog.ceo/api/breed/hound/images')
            .then(res => res.json())
            .then(data => setImage(data.message))
    }, [])

    //slideshow and navigation

    useEffect(() => {

        const timer = setInterval(() => {
            while (isPaused) {
                //currentImageIndex is never less than 0 or heigher images.length
                setCurrentImageIndex((currentImageIndex + 1) % images.length);
                break;
            }
        }, Math.floor(speed * 1000));

        return () => {
            clearInterval(timer);
        };

    }, [currentImageIndex, images.length, isPaused, speed]);

    if (speed < 0) {
        setSpeed(0)
    }
    if (speed > 99) {
        setSpeed(99)
    }
    //DOM
    return (
        <>
            <div className='flex max-w-full w-3/4 place-content-evenly mx-auto self-center justify-between content-center my-10 max-h-[50%]'>
                <button onClick={() => setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length)} className='next-prev-btn'>{'<'}</button>
                <div className='max-w-screen-sm rounded-lg max-h-[60rem] flex items-center content-center justify-center'>
                    <img className='rounded-lg min-h-[20rem] max-h-full' src={images[currentImageIndex]} alt={`#${currentImageIndex}`} />
                </div>
                <button className='next-prev-btn' onClick={() => setCurrentImageIndex((currentImageIndex + 1 + images.length) % images.length)}>{'>'}</button>
            </div>

            <div className='h-[50%] bg-yellow flex justify-center content-center'>
                {/* set speed */}
                <div className='flex items-center justify-center bg-orange p-10 space-x-4 w-1/2'>
                    <div>
                        <span className='rounded-l-xl p-1 bg-white inline-block'>Set speed: </span>
                        <input type='number' min={1} max={99} value={speed} onChange={(e) => { setSpeed(e.target.value) }} className='max-w-[2rem] p-1 bg-[#fff]' />
                        <span className='rounded-r-xl p-1 bg-white inline-block'>seconds</span>
                    </div>
                    <div className='flex w-20'>
                        <button className='px-2 w-1/2 py-1 rounded-l-lg border-y border-l hover:border hover:scale-[1.05] bg-white' onClick={() => { setSpeed(speed + (1/10)) }}>+</button>
                        <button className='px-2 w-1/2 py-1 rounded-r-lg border-y border-r hover:border hover:scale-[1.05] bg-white' onClick={() => { setSpeed(speed - (1/10)) }}>-</button>
                    </div>
                </div>
                {/* Pause or play */}
                {isPaused ?
                    (
                        <button className='flex items-center justify-center uppercase text-6xl min-w-16 min-h-20 w-1/2 bg-gray p-10' onClick={() => { setIsPaused(!isPaused) }}>pause</button>
                    ) : (
                        <button className='flex items-center justify-center uppercase text-6xl min-w-16 min-h-20 w-1/2 bg-green p-10' onClick={() => { setIsPaused(!isPaused) }}>play</button>
                    )}
            </div>
        </>
    )
}
export default Carousel