import Righttext from "./Righttext"
import Leftimg from "./Leftimg"
import Sectionlogos from "./Sectionlogos"

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