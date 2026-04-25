import Hero from "../components/Home/Hero/Hero.jsx"
import Client from "../components/Home/Client/Client.jsx"
import Community from "../components/Home/Community/Community.jsx"
import Unlock from "../components/Body/Unlock/Unlock.jsx"
import Achievments from "../components/Body/Achievments/Achievemnts.jsx"
import Calender from "../components/Body/Calender/Calender.jsx"
import Customer from "../components/Body/Customer/Customer.jsx"
import Updates from "../components/Body/Updates/Updates.jsx"
import Icon1 from '../assets/Icon (1).png'
import Icon2 from '../assets/Icon (2).png'
import Icon3 from '../assets/Icon (3).png'
import Updateimg from '../assets/Update.jpg'
import Updateimg2 from '../assets/Updateimg2.jpg'
import Updateimg3 from '../assets/Updateimg3.jpg'
import Section from "../components/Footer/Section.jsx"
import FooterSection from "../components/Footer/FooterSection.jsx"

const Home = () => {
  const Cards = [
    {
       img : Icon1,
       Heading1:'Membership',
       Heading2:'Organisations'

    },
    {
   img : Icon2,
       Heading1:'National ',
       Heading2:'Associations'
    },
    {
  img : Icon3,
 Heading1:'Clubs And ',
 Heading2:'Groups'
    }
  ]
 const Info =[{
    img:Updateimg,
    text:'Creating Streamlined  Safeguarding Processes with OneRen'
  }
  ,{
    img: Updateimg2,
    text:'What are your safeguarding responsibilities and how can you manage them?'
  }
  ,{
    img:Updateimg3,
    text:'Revamping the Membership Model with Triathlon Australia '
  }


    
  ]

  return (
    <div className="min-h-[90vh]"><Hero/>
    <Client/>
    <Community cards={Cards}/>
    <Unlock/>
    <Achievments/>
    <Calender/>
    <Customer/>
    <Updates Info={Info}/>
    <Section/>
    <FooterSection/>

    </div>
    
  )
}

export default Home