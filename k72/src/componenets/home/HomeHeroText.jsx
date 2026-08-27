import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] text-center p-4'>
        <div className='text-[9.5vw] uppercase leading-[8.3vw]'>
            L'étincelle
        </div>
        <div className='text-[9.5vw] uppercase leading-[8.3vw] flex align-center justify-center'>
            qui
            <div className='h-[15vh] w-[16vw] rounded-full overflow-hidden'>
                <Video/>
            </div>
            génère
        </div>
        <div className='text-[9.5vw] uppercase leading-[8.3vw]'>
            la créativité
        </div>
    </div>
  )
}

export default HomeHeroText