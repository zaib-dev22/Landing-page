const Card = (props) => {
  return (
    <div className="mx-15 w-[340px] cursor-pointer ease duration-300 hover:scale-105  ">
      
      {/* Image */}
      <div className="h-[200px] w-full rounded-xl">
        <img
          src={props.img}
          alt="card"
          className="w-full h-full  rounded-xl object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative flex justify-center">
        
        {/* Overlay Card */}
        <div className=" flex flex-col items-center absolute -top-10 bg-gray-100 z-30 w-[75%] rounded-md p-4 text-center shadow">
          
          <h2 className="text-[#717171] font-semibold text-sm leading-snug">
            {props.text}
          </h2>

          <button className="mt-3 text-[#4CAF4F] text-sm font-medium flex items-center justify-center gap-1 hover:gap-2 transition-all duration-300">
            Readmore
            <span>→</span>
          </button>

        </div>

      </div>

      {/* Bottom spacing */}
      <div className="h-12"></div>
    </div>
  );
};

export default Card;