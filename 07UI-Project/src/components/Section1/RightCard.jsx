import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    return (
        <div className='h-full shrink-0 w-80 overflow-hidden relative bg-amber-600 rounded-4xl'>
            <img className='h-full w-full object-cover' src={props.img} alt="Image" />
            <RightCardContent num={props.num} tag={props.tag} intro={props.intro} btnColor={props.btnColor}/>
        </div>
    )
}

export default RightCard 