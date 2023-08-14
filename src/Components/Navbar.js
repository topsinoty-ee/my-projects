import React from "react";
import { Link } from 'react-router-dom';

const Navbar = ({ pages }) => {
    return (
        <header className="w-full max-w-full min-w-full max-h-[10vh] h-16 min-h-[3rem] bg-blue text-yellow flex justify-between p-4 ">
            <div className="text-2xl">Test Page</div>

            <div className="min-w-[10rem]">
                <ul className="flex justify-evenly items-center">
                    {pages.map((page, i) =>
                        <li key={i}>
                            <Link to={`/${page}`} className='hover:bg-navy py-1.5 px-3 rounded-lg'>{page}</Link>
                        </li>
                    )}
                </ul>
            </div>
        </header>
    )
}

export default Navbar
//homepage
//hamburger
//Carousel