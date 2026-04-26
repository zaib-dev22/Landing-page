import Text from './Text.jsx'
import Cards from './Cards.jsx'

const Community = (props) => {
  return (
    <div className="min-h-[80vh] flex flex-col ">
      <Text/>
   <div className="flex  justify-between gap-1 mt-8 mb-8 px-1">
    {props.cards.map(function(elem,idx){
      return <Cards key={idx}  img={elem.img} heading={elem.Heading1} heading2={elem.Heading2}/>

      })}
      </div>
      
    </div>
  )
}

export default Community