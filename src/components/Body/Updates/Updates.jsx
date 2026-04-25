import Toptext from './Toptext'


import Card from './Card'
const Updates = (props) => {
  return (
    <div className='h-[75h] bg-[#ffffff] '>
      <Toptext/>
      <div className="flex flex-wrap justify-between gap-2 p-15   ">
      {props.Info.map(function(elem,idx){

return <Card  key={idx}  img={elem.img} text={elem.text} text2={elem.text2} text3={elem.text3}/>
      })}

      </div>

    </div>
  )
}

export default Updates