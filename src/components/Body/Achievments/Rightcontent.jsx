import icon4 from '../../../assets/Icon (4).png'
import icon5 from '../../../assets/Icon (5).png'
import icon6 from '../../../assets/Icon (6).png'
import icon7 from '../../../assets/Icon (7).png'

const Rightcontent = () => {
  return (
<div className='flex w-1/3 items-center justify-between  mx-15 flex-col '>
<div className='flex mt-5 gap-14'>
<div className='flex'>
  <img className='mr-4' src={icon4} alt="icon" />
  <div className=''>
    <h1 className='text-3xl text-[#4D4D4D] font-semibold'>2,245,341</h1>
    <h6 className='text-[#717171]'>Member</h6>
  </div>
</div>
<div className='flex'>
  <img className='mr-1' src={icon5} alt="Icon2" />
  <div className='detail '>
    <h1 className='text-3xl font-semibold text-[#4D4D4D]'>46,328</h1>
    <h6 className='text-[#717171]' >Clubs</h6>
  </div>
</div>
</div>
<div className='flex my-5 gap-20'>
<div className='flex '>
  <img  className="mr-2" src={icon6} alt="Icon3" />
  <div className='flex flex-col'>
    <h1 className='text-3xl font-semibold text-[#4D4D4D]'>828,867</h1>
    <h6 className='text-xs text-[#717171]'> Event Bookings</h6>
  </div>
</div>
<div className='flex'>
  <img className='mr-2' src={icon7} alt="icon4" />
  <div className='detail'>
    <h1 className='text-3xl font-semibold text-[#4D4D4D]'>1,926,436</h1>
    <h6 className='text-[#717171]'>Payments</h6></div>
</div>
</div>
</div>
  )
}

export default Rightcontent