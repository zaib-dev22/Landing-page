import Text from './Text.jsx'
import Cards from './Cards.jsx'

const Community = (props) => {
  return (
    <div className="h-[75] flex flex-col ">
      <Text/>
    <div className='flex m-20 mb-5 '> {props.cards.map(function(elem,idx){

return <Cards key={idx}  img={elem.img} heading={elem.Heading1} heading2={elem.Heading2}/>
      })}
      </div>
      
    </div>
  )
}

export default Community