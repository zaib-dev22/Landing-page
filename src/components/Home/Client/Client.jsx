import logo from "../../../assets/logo.png"
import logo1 from "../../../assets/logo1.png"
import logo2 from "../../../assets/logo2.png"
import logo3 from "../../../assets/logo3.png"
import logo4 from "../../../assets/logo4.png"
import logo5 from "../../../assets/logo5.png"
import logo6 from "../../../assets/logo6.png"



const Clint = () => {
  return (
    <div className="h-[40vh] w-full  flex flex-col items-center justify-center gap-10">
<div className="flex flex-col mb-3 items-center ">
  <h2 className="text-5xl text-[#4D4D4D] font-bold mb-2">Our Clients</h2>
  <p className="text-xl text-[#717171]">We have been working with some Fortune 500+ clients</p>
</div>
<div className="flex gap-35">
<img className="h-9 w-full object-contain" src={logo} alt="logos" />
<img  className="h-9 w-full object-contain" src={logo1} alt="logos" />
<img className="h-9 w-full object-contain "src={logo2} alt="logos" />
<img  className="h-9 w-full object-contain" src={logo3} alt="logos" />
<img className="h-9 w-full object-contain" src={logo4} alt="logos" />
<img  className="h-9 w-full object-contain" src={logo5} alt="logos" />
<img className="h-9 w-full object-contain  " src={logo6} alt="logos" />
</div>

    </div>
  )
}

export default Clint