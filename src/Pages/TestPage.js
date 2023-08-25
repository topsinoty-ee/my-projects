import React from 'react'
import ModalScreen from '../Components/ModalScreen'

const Test=()=>{
    return(
        <div className='h-full'>
            <ModalScreen content={
                <img src={'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png'} alt='' className='h-full'/>
            } title={'Test Image'}/>
        </div>
    )
}
export default Test