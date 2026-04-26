import logo from "../../../assets/Logo.png"
import logo1 from "../../../assets/Logo1.png"
import logo2 from "../../../assets/Logo2.png"
import logo3 from "../../../assets/Logo3.png"
import logo4 from "../../../assets/Logo4.png"
import logo5 from "../../../assets/Logo5.png"
import logo6 from "../../../assets/Logo6.png"
import {MoveRight} from 'lucide-react'

const Sectionlogos = () => {
  return (
    <div className="logosbottom flex gap-10 mt-9">

          <img className='h-12 w-12 object-contain' src={logo} alt="logo.png" />
          <img className='h-12 w-12 object-contain' src={logo1} alt="logo.png" />
          <img className='h-12 w-12 object-contain' src={logo2} alt="logo.png" />
          <img className='h-12 w-12 object-contain' src={logo3} alt="logo.png" />
          <img className='h-12 w-12 object-contain' src={logo4} alt="logo.png" />
          <img className='h-12 w-12 object-contain' src={logo5} alt="logo.png" />
          <img className='h-12 w-12 object-contain' src={logo6} alt="logo.png" />
 <div className='flex items-center cursor-pointer ease duration-300 hover:scale-105 hover:translate-y-1  '>         
<h3 className='text-2xl font-semibold text-[#4Caf4f] hover:text-[#69d36d]'> Meet all customers </h3>
<span className='ml-2'><MoveRight size={16} className='h-8  w-12 text-[#4CAF4F] hover:text-[#69d36d]' /></span>
        </div>
        </div>
  )
}

export default Sectionlogos