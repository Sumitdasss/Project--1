import React, { useState } from 'react'
import { FaAngleRight, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from './Button';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (

<div className="max-w-[1440px] mx-auto ">
<div className="mt-[136px] mb-[136px]">
    <p className='text-[50px] text-[#262626] font-bold '>Login</p>
    <ul className='flex items-center gap-x-3 text-[#6D6D60] mt-[10px] text-[17px]'>
        <Link to="/" className=''>Home</Link>
        <li><FaAngleRight/></li>
        <Link to="/login" className=''>Login</Link>

    </ul>
    <p className='text-[#767676] text-[17px] pt-[130px] pb-[70px] border-b-2 border-[#F0F0F0]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem<br></br> Ipsum has been the industry's standard dummy text ever since the.</p>
    <p className='text-[50px] text-[#262626] font-bold pt-[65px]'>Returning Customer</p>

    <div className="flex mt-[60px] gap-x-15">
        <div className="">
            <p className='text-[#262626] font-bold text-[17px]'>Email address</p>
            <input type="email" placeholder='company@domain.com' className='w-[508px] text-[20px]  h-[50px] text-[#767676] font-medium border-b-2 border-[#F0F0F0] focus:outline-none' />
        </div>
   <div className="relative ">
    <p className='text-[#262626] font-bold text-[17px]'>Password</p>
      <input
        type={showPassword ? "text" : "password"} 
        placeholder="Enter password"
        className="w-[508px]  h-[50px] text-[#767676] font-medium border-b-2 text-[20px] border-[#F0F0F0] focus:outline-none"
      />
      
   
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute right-0  top-10 text-[20px] text-gray-600"
      >
        {showPassword ? <FaEye /> : <FaEyeSlash/>}
      </button>
    </div>
    </div>
    <div className="pb-[70px] border-b-2 border-[#F0F0F0]">
    <Button text={"Log in"} className={"px-20 text-[20px] mt-[50px] font-medium text-[#262626] py-5 bg-white border-2 inline-block border-[#262626]"}/>
    
    </div>
    <p className="text-[#262626] font-bold text-[50px] pt-[70px]">New Customer</p>
    <p className='text-[#767676] text-[17px] pt-[60px] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br></br>Ipsum has been the industry's standard dummy text ever since the.</p>
     <Button text={"Continue"} className={"px-20 text-[20px] mt-[60px] font-medium text-white py-5 bg-[#262626]  inline-block "}/>
    </div>
    </div>
  )
}

export default Login