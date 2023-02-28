import React from "react";
import { Link } from 'react-router-dom';

const Navbar = ({ pages }) => {
    return (
        <header className="w-full max-w-full min-w-full max-h-[10vh] h-16 min-h-[3rem] bg-secondary text-primary flex justify-between p-4">
            <div className="text-2xl">Test Page</div>

            <div className="w-1/6 min-w-[10rem]">
                <ul className="flex justify-evenly items-center">
                    {pages.map((page, i) =>
                        <li key={i}>
                            <Link to={`/${page}`} className='active:nav hover:nav'>{page}</Link>
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