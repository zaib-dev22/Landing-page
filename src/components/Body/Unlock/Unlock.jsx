import Unlockimg from '../../../assets/rafiki.png'

const Unlock = () => {
  return (
    <div className="h-[70vh] w-full flex justify-between items-center">
      <div className='ml-20'>
        <img  className=" h-90"src={Unlockimg} alt="Unlockimg" />
      </div>
      <div className='h-80 w-1/2 mr-30 '>
        <h1 className='text-5xl font-semibold text-[#4D4D4D]'>The unseen of spending three years at Pixelgrade</h1>
<p className='my-8 w-175 tracking-wide text-[#717171]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
<button className='hover:bg-green-700 bg-[#4CAF4F] text-white py-3 px-7 rounded-md ease duration-500 cursor-pointer hover:scale-105'>Learn More</button>
      </div>
    </div>
   
    
  )
}

export default Unlock