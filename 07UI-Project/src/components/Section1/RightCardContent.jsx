import React from 'react'

const RightCardContent = (props) => {
    return (
        <div className='h-full w-full absolute top-0 left-0 p-8 flex flex-col justify-between'>
        
            <h2 className='h-16 w-16 rounded-full bg-white text-2xl font-semibold flex items-center justify-center'>{props.num}</h2>

            <div>
                <p className='mb-10 text-shadow-2xs text-white text-xl leading-relaxed'>{props.intro}</p>

                <div className='flex justify-between'>
                    <button className='px-8 py-2 text-white font-medium rounded-full'style={{ backgroundColor: props.btnColor }}>{props.tag}</button>
                    <button className='px-3 py-2 text-white font-medium rounded-full'style={{ backgroundColor: props.btnColor }}><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>

        </div>
    )
}

export default RightCardContent