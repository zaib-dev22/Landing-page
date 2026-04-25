import Text from './Text'
import Cards from './Cards'

const Community = (props) => {
  return (
    <div className="h-[75] flex flex-col items-center justify-around">
      <Text/>
    <div className='flex items-center m-20 mb-5 justify-between'> {props.cards.map(function(elem,idx){

return <Cards key={idx}  img={elem.img} heading={elem.Heading1} heading2={elem.Heading2}/>
      })}
      </div>
      
    </div>
  )
}

export default Community