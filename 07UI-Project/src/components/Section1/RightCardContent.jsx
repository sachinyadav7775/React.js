import React from 'react'

const RightCardContent = () => {
  return (
        <div className='h-full w-full absolute top-0 left-0 p-8 flex flex-col justify-between'>
            <h2 className='h-15 w-15 rounded-full bg-white text-2xl font-semibold flex items-center justify-center'>1</h2>
            <div>
                <p className='mb-10 text-white text-xl leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsa aliquid recusandae perferendis dolores molestias.</p>
                <div className='flex justify-between'>
                    <button className='px-8 py-2 text-white font-medium bg-blue-600 rounded-full'>Satisfied</button>
                    <button className='px-3 py-2 text-white font-medium bg-blue-600 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent