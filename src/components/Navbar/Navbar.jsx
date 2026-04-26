import logo from '../../assets/Icon.png'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className='sticky top-0 z-50 backdrop-blur-md '>
<div className='flex max-w-full items-center justify-between p-4 bg-[#F5F7FA]  '>
      {/* Logo Section */}
      <div className='flex gap-2 ml-5 items-center'>
        <img className="h-6  w-full object-contain " src={logo} alt="logo" />
        <h1  className='text-3xl font-bold text-[#263238] tracking-wide'>Nexcent</h1>
      </div>

      {/* Nav Items */}
      <div className='flex items-center gap-17 mr-10  '>
        {props.item.map((item) => (
          <Link className="text-[#18191F] font-semibold ease duration-200 hover:text-amber-500 hover:scale-105 " key={item.name} to={item.path}>
            {item.name}
          </Link>
        ))}
      </div>

      <div className='mr-10 '>
        <button className='mr-5 cursor-pointer  px-8 py-2 font-semibold border-none rounded-md text-[#4CAF4F] bg-[#F5F7FA]  ease duration-200  hover:scale-105 hover:shadow-2xs hover:bg-gray-100
      ' >Login</button>
        <button className='px-6 py-2  cursor-pointer duration-200 ease-in hover:scale-105 hover:bg-green-700 font-semibold border-none rounded-md text-white bg-[#4CAF4F]'> Sign Up</button>
      </div>
</div>
    </nav>
  )
}

export default Navbar