import Righttext from "./Righttext.jsx"
import Leftimg from "./Leftimg.jsx"
import Sectionlogos from "./Sectionlogos.jsx"

const Customer = () => {
  return (
    <div className="h-[70vh] bg-[#F5F7FA] flex items-center justify-between">
      <Leftimg/>
      
      <div className="right flex flex-col justify-between mr-20 gap-3">
                <Righttext/>
              <Sectionlogos/>
      </div>
    </div>
  )
}

export default Customer