import Video from '../componenets/home/Video'
import HomeHeroText from '../componenets/home/HomeHeroText'
import HomeBottomText from '../componenets/home/HomeBottomText'

const Home = () => {
  return (
    <div>
        <div className='h-screen w-screen fixed'>
            <Video/>
        </div>

        <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
            <HomeHeroText/>
            <HomeBottomText/>
        </div>
    </div>
  )
}

export default Home