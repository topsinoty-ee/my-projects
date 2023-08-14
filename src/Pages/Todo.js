import React, { useState, useEffect } from "react";
import { ReactComponent as Close } from '../Assets/Close.svg';


const OpenBox = ({ value, send }) => {
    return (
        <div className='py-3 px-6 bg-yellow-accent rounded-lg flex content-between justify-between w-full h-16'>
            <input className=' outline-none bg-yellow-accent border-b-2 flex-1' onChange={value} />
            <input className='p-3 py-1.5 bg-black text-yellow-accent rounded-r-full hover:bg-[#252525]' onClick={send} value='Add to list' type='button' />
        </div>
    )
}
const ClosedBox = ({ value, i }) => {
    return (
        <div key={i} className='py-3 px-6 bg-green rounded-lg flex content-between justify-between w-full h-16 group'>
            <div className=' outline-none bg-yellow-accent border-b-2 border-l-2 flex-1 rounded-r-full group-hover:rounded-none'><p>{value}</p></div>
            <button className='p-3 py-1.5 bg-black text-yellow-accent rounded-r-full hidden group-hover:block hover:bg-[#252525]'><Close className="hover:animation-bounce" /></button>
        </div>
    )
}
const Todo = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const saved = localStorage.getItem('todos')
        return () => {
            if (setTodos.length) {
                setTodos(JSON.parse(saved))
            }
        };
    }, []);

    const handleAddTodo = () => {
        if (value.trim()) {
            setTodos(
                [...todos,
                {
                    id: Date.now(),
                    text: value
                }]
            );
            setValue('');
        }
    }
    return (
        <div>
            <h2 className='text-center text-4xl my-2'>To-do list</h2>
            <div className='m-5 rounded-lg flex space-x-4'>
                <div className='w-1/2'><OpenBox value={(e) => { setValue(e.target.value) }} send={handleAddTodo} /></div>
                <div className="w-1/2">
                    {todos.map((listItem, i) =>
                        <ClosedBox value={listItem} key={i} />
                    )}
                </div>
            </div>
        </div>
    )
}
export default Todo