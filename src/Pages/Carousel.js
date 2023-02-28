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

            <div className='h-[50%] bg-primary flex items-center justify-around'>
                {/* set speed */}
                <div className='flex items-center bg-orange p-10 rounded-lg space-x-4'>
                    <div>
                        <span className='rounded-l-xl p-1 bg-[#fff] inline-block'>Set speed: </span>
                        <input type='number' min={1} max={99} value={speed} onChange={(e) => { setSpeed(e.target.value) }} className='w-[2.5rem] rounded-r-xl p-1 bg-[#fff]' />
                    </div>
                    <button className='px-2 py-1 rounded-full bg-primary' onClick={() => { setSpeed(speed + 1) }}>+</button>
                    <button className='px-2 py-1 rounded-full bg-primary' onClick={() => { setSpeed(speed - 1) }}>-</button>
                </div>
                {/* Pause or play */}
                <button className='flex items-center  min-w-16 min-h-20 bg-orange p-10 rounded-lg' onClick={() => { setIsPaused(!isPaused) }}>{isPaused ? 'Play' : 'Pause'}</button>

            </div>
        </>
    )
}
export default Carousel