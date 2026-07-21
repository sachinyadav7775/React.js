import RightCardContent from './RightCardContent'

const RightCard = () => {
  return (
    <div className='h-full shrink-0 w-80 overflow-hidden relative bg-amber-600 rounded-4xl'>
        <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1773332611612-ffdaa753afb1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <RightCardContent/>
    </div>
  )
}

export default RightCard