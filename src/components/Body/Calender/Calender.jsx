import Unlockimg from '../../../assets/pana.png'
const Calender = () => {
  return (
    <div className="h-[70vh] w-full flex justify-between items-center">
          <div className='ml-25'>
            <img  className=" h-100"src={Unlockimg} alt="Unlockimg" />
          </div>
          <div className='h-80 w-1/2 mr-30 '>
            <h1 className='text-5xl font-semibold text-[#4D4D4D]'>How to design your site footer like we did</h1>
    <p className='my-8 w-190 tracking-wide text-[#717171]'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
    <button className='bg-[#4CAF4F] text-white py-3 px-7 rounded-md ease duration-500 cursor-pointer hover:scale-105 hover:bg-green-700'>Learn More</button>
          </div>
        </div>
  )
}

export default Calender