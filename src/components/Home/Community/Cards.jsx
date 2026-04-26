
const Cards = (props) => {
  return (
  
    
   <div className="w-full sm:w-[45%] lg:w-1/3 px-4 py-10 flex flex-col items-center justify-between gap-7 rounded-xl shadow-md bg-white">
          <img className="h-20 w-20 object-contain mb-2" src={props.img} alt="cardicon" />
          <div className="flex flex-col items-center"><h2 className='text-[#4D4D4D] text-4xl   font-semibold '>{props.heading} </h2>
           <h2 className="text-4xl text-[#4D4D4D] font-semibold">{props.heading2}</h2>
          </div>
          <p className='text-[#717171] ml-5'><span className='ml-15 '>Our membership management</span> <br />software provides full automation of membership <span className="ml-20">renewals and payments</span></p>
        
        </div>
    
  )
}

export default Cards