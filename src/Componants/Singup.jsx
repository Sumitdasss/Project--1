import React, { useEffect, useState } from 'react'
import { FaAngleRight, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import  locationsData  from '../Data/index.json';
import RetroLoader from './Loading';

const Singup = () => {
     const [showPassword, setShowPassword] = useState(false);
     const [showPassword2, setShowPassword2] = useState(false);
     const [isLoading, setIsLoading] = useState(true);
    const [divisions] = useState(locationsData);
  const [selectedDiv, setSelectedDiv] = useState('');
  const [selectedDist, setSelectedDist] = useState('');
  const [selectedUpazila, setSelectedUpazila] = useState('');
  const [selectedUnion, setSelectedUnion] = useState('');

  const [districtsList, setDistrictsList] = useState([]);
  const [upazilasList, setUpazilasList] = useState([]);
  const [unionsList, setUnionsList] = useState([]);

 


  const handleDivisionChange = (e) => {
    const divId = e.target.value;
    setSelectedDiv(divId);
    
  
    setSelectedDist('');
    setSelectedUpazila('');
    setSelectedUnion('');
    setUpazilasList([]);
    setUnionsList([]);

  
    const divObj = divisions.find(d => d.id === divId);
    setDistrictsList(divObj ? divObj.districts : []);
  };


  const handleDistrictChange = (e) => {
    const distId = e.target.value;
    setSelectedDist(distId);
    
    setSelectedUpazila('');
    setSelectedUnion('');
    setUnionsList([]);

   
    const distObj = districtsList.find(d => d.id === distId);
    setUpazilasList(distObj ? distObj.upazilas : []);
  };


  const handleUpazilaChange = (e) => {
    const upazilaId = e.target.value;
    setSelectedUpazila(upazilaId);
    setSelectedUnion('');

   
    const upaObj = upazilasList.find(u => u.id === upazilaId);
    setUnionsList(upaObj ? upaObj.unions : []);
  };
   



      
      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
      const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
      };

useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2122);
    return () => clearTimeout(timer);
  }, []);



if (isLoading) {
    return <RetroLoader />; 
  }



  return (
    <div className="max-w-[1440px] mx-auto ">
<div className="mt-[136px] mb-[136px]">
    <p className='text-[50px] text-[#262626] font-bold '>Sign up</p>
    <ul className='flex items-center gap-x-3 text-[#6D6D60] mt-[10px] text-[17px]'>
        <Link to="/" className=''>Home</Link>
        <li><FaAngleRight/></li>
        <Link to="/signup" className=''>Sign up</Link>

    </ul>
    <p className='text-[#767676] text-[17px] pt-[130px] pb-[70px] border-b-2 border-[#F0F0F0]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem<br></br> Ipsum has been the industry's standard dummy text ever since the.</p>
    <p className='text-[50px] text-[#262626] font-bold pt-[65px]'>Your Personal Details</p>

    <div className="flex mt-[60px] gap-x-15">
        <div className="">
            <p className='text-[#262626] font-bold text-[17px]'>First Name</p>
            <input type="text" placeholder='First Name' className='w-[508px] text-[20px]  h-[50px] text-[#767676] font-medium border-b-2 border-[#F0F0F0] focus:outline-none' />
        </div>
        <div className="">
            <p className='text-[#262626] font-bold text-[17px]'>Last Name</p>
            <input type="text" placeholder='Last Name' className='w-[508px] text-[20px]  h-[50px] text-[#767676] font-medium border-b-2 border-[#F0F0F0] focus:outline-none' />
        </div>
  
    </div>
    <div className="flex mt-[30px] pb-[70px] border-b-2 border-[#F0F0F0] gap-x-15">
        <div className="">
            <p className='text-[#262626] font-bold text-[17px]'>Email address</p>
            <input type="email" placeholder='company@domain.com' className='w-[508px] text-[20px]  h-[50px] text-[#767676] font-medium border-b-2 border-[#F0F0F0] focus:outline-none' />
        </div>
        <div className="">
            <p className='text-[#262626] font-bold text-[17px]'>Telephone</p>
            <input type="tel" placeholder='Your Telephone Number' className='w-[508px] text-[20px]  h-[50px] text-[#767676] font-medium border-b-2 border-[#F0F0F0] focus:outline-none' />
        </div>
  
    </div>
    <p className='text-[50px] text-[#262626] font-bold pt-[65px]'>New Customer</p>

    <div className="flex mt-[60px] gap-x-15">
        <div className="">
            <p className='text-[#262626] font-bold text-[17px]'>Address 1</p>
            <input type="text" placeholder='4279 Zboncak Port Suite 6212' className='w-[508px] text-[20px]  h-[50px] text-[#767676] font-medium border-b-2 border-[#F0F0F0] focus:outline-none' />
        </div>
        <div className="">
            <p className='text-[#262626] font-bold text-[17px]'>Address 2</p>
            <input type="text" placeholder='Apartment, suite, etc.' className='w-[508px] text-[20px]  h-[50px] text-[#767676] font-medium border-b-2 border-[#F0F0F0] focus:outline-none' />
        </div>
  
    </div>
    <div className="flex mt-[30px]  gap-x-15">
       <div className="">
            <p className='text-[#262626] font-bold text-[17px]'>Divisions</p>
           <select onChange={handleDivisionChange} value={selectedDiv} name="" id="" className='w-[508px] text-[20px]  h-[50px] text-[#767676] font-medium border-b-2 border-[#F0F0F0] focus:outline-none'>
          <option value="">Select Division</option>
              {divisions.map((div) => (
                <option key={div.id} value={div.id}>{div.bn_name}</option>
              ))}
           </select>
        </div>
       <div className="">
            <p className='text-[#262626] font-bold text-[17px]'>Districts</p>
           <select onChange={handleDistrictChange} 
              value={selectedDist} 
              disabled={!selectedDiv} name="" id="" className='w-[508px] text-[20px]  h-[50px] text-[#767676] font-medium border-b-2 border-[#F0F0F0] focus:outline-none'>
           <option value="">Select District</option>
              {districtsList.map((dist) => (
                <option key={dist.id} value={dist.id}>{dist.bn_name}</option>
              ))}
           </select>
        </div>
  
    </div>
    <div className="flex mt-[30px] pb-[70px] border-b-2 border-[#F0F0F0] gap-x-15">
        <div className="">
            <p className='text-[#262626] font-bold text-[17px]'>Upazila</p>
           <select onChange={handleUpazilaChange} 
              value={selectedUpazila} 
              disabled={!selectedDist} name="" id="" className='w-[508px] text-[20px]  h-[50px] text-[#767676] font-medium border-b-2 border-[#F0F0F0] focus:outline-none'>
         <option value="">Select Upazila</option>
              {upazilasList.map((upa) => (
                <option key={upa.id} value={upa.id}>{upa.bn_name}</option>
              ))}
           </select>
        </div>
        <div className="">
            <p className='text-[#262626] font-bold text-[17px]'>Unions</p>
             <select onChange={(e) => setSelectedUnion(e.target.value)} disabled={!selectedUpazila} value={selectedUnion}  name="" id="" className='w-[508px] text-[20px]  h-[50px] text-[#767676] font-medium border-b-2 border-[#F0F0F0] focus:outline-none'>
            <option value="">Select Union</option>
              {unionsList.map((union) => (
                <option key={union.id} value={union.id}>{union.bn_name}</option>
              ))}

           </select>
        </div>
  
    </div>
    
   <p className='text-[50px] text-[#262626] font-bold pt-[65px]'>Returning Customer</p>
   
       <div className="flex mt-[60px] pb-[70px] border-b-2 border-[#F0F0F0] gap-x-15">
          <div className="relative ">
       <p className='text-[#262626] font-bold text-[17px]'> Password</p>
         <input
           type={showPassword2 ? "text" : "password"} 
           placeholder=" Password"
           className="w-[508px]  h-[50px] text-[#767676] font-medium border-b-2 text-[20px] border-[#F0F0F0] focus:outline-none"
         />
         
      
         <button
           type="button"
           onClick={togglePasswordVisibility2}
           className="absolute right-0  top-10 cursor-pointer text-[20px] text-gray-600"
         >
           {showPassword2 ? <FaEye /> : <FaEyeSlash/>}
         </button>
       </div>
      <div className="relative ">
       <p className='text-[#262626] font-bold text-[17px]'>Repeat Password</p>
         <input
           type={showPassword ? "text" : "password"} 
           placeholder="Repeat Password"
           className="w-[508px]  h-[50px] text-[#767676] font-medium border-b-2 text-[20px] border-[#F0F0F0] focus:outline-none"
         />
         
      
         <button
           type="button"
           onClick={togglePasswordVisibility}
           className="absolute right-0  top-10 cursor-pointer text-[20px] text-gray-600"
         >
           {showPassword ? <FaEye /> : <FaEyeSlash/>}
         </button>
       </div>
       </div>

      <div className="max-w-md p-6 bg-white space-y-6 font-sans">
      
   
      <div className="flex items-center gap-3">
        <input 
          type="checkbox" 
          id="privacy" 
          className="w-4 h-4 border-[#767676] rounded focus:ring-[#767676] accent-[#767676] cursor-pointer"
        />
        <label htmlFor="privacy" className="text-[#767676] text-[15px]">
          I have read and agree to the <span className="hover:underline cursor-pointer">Privacy Policy</span>
        </label>
      </div>

  
      <div className="flex items-center gap-8">
        <span className="text-[#767676] text-[16px]">Subscribe Newsletter</span>
        
        <div className="flex items-center gap-6">
          
          <label className="flex items-center gap-2 cursor-pointer group">
            <input 
              type="radio" 
              name="newsletter" 
              value="yes"
              defaultChecked={true}
             
              className="w-4 h-4 border-[#767676] focus:ring-[#767676] accent-[#767676]"
            />
            <span className="text-[#767676] group-hover:text-[#222222]">Yes</span>
          </label>

         
          <label className="flex items-center gap-2 cursor-pointer group">
            <input 
              type="radio" 
              name="newsletter" 
              value="no"
              defaultChecked={true}
              
              className="w-4 h-4 border-[#767676] focus:ring-[#767676] accent-[#767676]"
            />
            <span className="text-[#767676] group-hover:text-[#222222]">No</span>
          </label>
        </div>
      </div>

      
      <button className="w-[180px] bg-[#222222] text-white py-3.5 px-4 font-semibold text-[16px] uppercase tracking-wider hover:bg-black transition-colors duration-300">
        Log in
      </button>

    </div>
    </div>
    </div>
  )
}

export default Singup