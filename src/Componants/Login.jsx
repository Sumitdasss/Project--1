import React, { useRef, useState } from 'react';
import { FaAngleRight, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const [btnPos, setBtnPos] = useState({ left: '0', top: '0', position: 'relative' });

  const containerRef = useRef(null);
  const btnRef = useRef(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

 
  const handleMouseOver = () => {

    if (!username.trim() || !password.trim()) {
      const container = containerRef.current;
      const btn = btnRef.current;

      if (container && btn) {
       
        const maxX = container.clientWidth - btn.clientWidth;
        const maxY = container.clientHeight - btn.clientHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        setBtnPos({
          left: `${randomX}px`,
          top: `${randomY}px`,
          position: 'absolute'
        });
      }
    }
  };

  
  const handleInputChange = (val, type) => {
    if (type === 'user') setUsername(val);
    else setPassword(val);

    
    if (username.trim() !== '' && password.trim() !== '') {
      setBtnPos({ left: '0', top: '0', position: 'relative' });
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="mt-[136px] mb-[136px]">
        <p className='text-[50px] text-[#262626] font-bold '>Login</p>
        <ul className='flex items-center gap-x-3 text-[#6D6D60] mt-[10px] text-[17px]'>
          <Link to="/" className=''>Home</Link>
          <li><FaAngleRight /></li>
          <Link to="/login" className=''>Login</Link>
        </ul>

        <p className='text-[#767676] text-[17px] pt-[130px] pb-[70px] border-b-2 border-[#F0F0F0]'>
          Enter your credentials to access your account.
        </p>

        <p className='text-[50px] text-[#262626] font-bold pt-[65px]'>Returning Customer</p>

        
        <div className="flex mt-[60px] gap-x-15">
          <div>
            <p className='text-[#262626] font-bold text-[17px]'>Email address</p>
            <input 
              onChange={(e) => handleInputChange(e.target.value, 'user')} 
              type="email" 
              placeholder='company@domain.com' 
              className='w-[508px] text-[20px] h-[50px] text-[#767676] font-medium border-b-2 border-[#F0F0F0] focus:outline-none' 
            />
          </div>

          <div className="relative">
            <p className='text-[#262626] font-bold text-[17px]'>Password</p>
            <input
              onChange={(e) => handleInputChange(e.target.value, 'pass')}
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="w-[508px] h-[50px] text-[#767676] font-medium border-b-2 text-[20px] border-[#F0F0F0] focus:outline-none"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-0 top-10 text-[20px] text-gray-600"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
        </div>

      
        <div 
          ref={containerRef} 
          className="relative w-full h-[200px] mt-[50px] border-b-2 border-[#F0F0F0] pb-[70px]"
        >
          <button
            ref={btnRef}
            onMouseOver={handleMouseOver}
            style={{
              left: btnPos.left,
              top: btnPos.top,
              position: btnPos.position,
              transition: 'all 0.3s ease' 
            }}
            className="px-20 text-[20px] font-medium text-[#262626] py-5 bg-white border-2 inline-block border-[#262626] cursor-pointer"
          >
            Log in
          </button>
        </div>

        <p className="text-[#262626] font-bold text-[50px] pt-[70px]">New Customer</p>
        <p className='text-[#767676] text-[17px] pt-[60px] '>
          Join us today to get the best shopping experience.
        </p>
      </div>
    </div>
  );
};

export default Login;