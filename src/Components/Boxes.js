import React from 'react';
import { ReactComponent as Close } from '../Assets/Close.svg';


const OpenBox = ({ onClick, value, input }) => {
    return (
        <div className='py-3 px-6 bg-yellow-accent rounded-lg flex content-between justify-between w-full h-16'>
            <input className=' outline-none bg-yellow-accent border-b-2 flex-1' value={input} onChange={(e) => { value = e.target.value }} />
            <button className='p-3 py-1.5 bg-black text-yellow-accent rounded-r-full hover:bg-[#252525]' onClick={onClick}>+</button>
        </div>
    )
}
const ClosedBox = ({ value }) => {
    return (
        <div className='py-3 px-6 bg-green rounded-lg flex content-between justify-between w-full h-16 group'>
            <div className=' outline-none bg-yellow-accent border-b-2 border-l-2 flex-1 rounded-r-full group-hover:rounded-none'><p>{value}</p></div>
            <button className='p-3 py-1.5 bg-black text-yellow-accent rounded-r-full hidden group-hover:block hover:bg-[#252525]'><Close className="hover:animation-bounce" /></button>
        </div>
    )
}
export { OpenBox, ClosedBox }

