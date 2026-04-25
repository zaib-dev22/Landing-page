
import Herotext from './Herotext'
import Heroimg from './Heroimg'
import Elipse from './Elipse'
const Hero = () => {
  return (
    <div className="bg-[#F5F7FA] h-[90vh] flex items-center  ">
     < Herotext />
     <Heroimg/>
    <Elipse/>
  </div>
  )
}

export default Hero