import React from "react";
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div>
        <div className="text-[6rem] text-center font-serif">
            HTTP 404: Page not found
        </div>
            <div className="flex flex-col h-full justify-center self-center items-center place-self-center place-items-center ">
                <h1>Oops! You seem to be lost.</h1>
                <p>Here are some helpful links:</p>
                <ul className='flex-col flex items-start content-start justify-start text-orange'>
                    <li>
                        <Link to='/' className="underline">Home</Link>
                    </li>
                    <li>
                        <Link to='/Carousel' className="underline">Carousel</Link>
                    </li>
                    <li>
                        <Link to='/Components' className="underline">Components</Link>
                    </li>
                    <li>
                        <span>Find out <a className="underline" href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404" target="_blank" rel="noreferrer" >more</a></span>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Error