import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a
            href={props.elem.url} 
            target='_blank'  
            rel='noopener noreferrer'
        >
            <div className='h-52 w-56 overflow-hidden rounded-xl'>
                <img 
                    src={props.elem.download_url} 
                    alt="Image" 
                    className='h-full w-full object-cover hover:scale-110 transition duration-300' 
                />
            </div>

            <h2 className='mt-2 text-lg font-bold'>
                {props.elem.author}
            </h2>
        </a>
    </div>
  )
}

export default Card