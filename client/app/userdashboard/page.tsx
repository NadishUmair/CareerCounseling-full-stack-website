"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import jwt from 'jsonwebtoken'
import { useSelector } from 'react-redux'
import { RiMenuFoldLine,RiMenuUnfoldLine  } from "react-icons/ri";
import Link from 'next/link';


import { MyPost } from './myInstitutes/page'
import { PersonaData } from './personaldata/page'
import { CreateInstitute } from './createInstituteUpdate/page'
import { loginUser } from '../redux/action'

import { EditInstitute } from './edituni/page'




 function Dashboard() {
  const [activeComponent, setActiveComponent] = useState('myposts');
  const [selectedInstitute,setselectedInstitute]=useState(null)
 
  const [Showmenu,setShowmenu]=useState(false)
   const [userData,setuserData]=useState();
   
   
   
    const logeduser = useSelector((state)=>state.custom.user);
    
    useEffect(()=>{
      setuserData(logeduser)
    },[logeduser])
   

  
  return (
    <div>
        { userData ? (

        
          <div className=' flex h-[90vh]'>
          <div className={`${Showmenu ? 'w-[60px]' : 'w-[250px]'}  transition-width duration-500 ease-in-out p-2 bg-blue-600 text-white font-light rounded-sm md:font-semibold   overflow-hidden `}   >
          <div className='text-end' >
          <button onClick={()=>setShowmenu(!Showmenu)} className=''>
          { Showmenu ?(
           <RiMenuUnfoldLine className='text-4xl ' />
          ):(
            <RiMenuFoldLine className='text-4xl mr-2' />
          )
             
          }
          </button>
          </div>
       
          <ul className='md:p-4'style={{ transform: Showmenu ? 'translateX(-300%)' : 'translateX(0%)', transition: 'transform 0.5s ease-in-out' }}  >
          
            <li><h1 className='font-extrabold text-2xl'>Quick Links</h1></li>
            {
              logeduser.role === "admin" &&
              <div>
                <li className='mt-4'><Link href={''}
            onClick={()=>setActiveComponent('myposts')}
            className={activeComponent==='myposts'? 'md:text-xl border-b-2 border-white':''} >My Institute</Link></li>
            
            <li className='mt-4'><Link href={''}
            onClick={()=>setActiveComponent('postInstituteadmission')}
            className={activeComponent==='postInstituteadmission'? 'md:text-xl border-b-2 border-white':''}>Post Institute Admission</Link></li>
              </div>
            }
           <li className='mt-4'><Link href={``}
            onClick={()=>setActiveComponent('personaldata')}
              className={activeComponent==='personaldata'? 'md:text-xl border-b-2 border-white':''}>My personal Data</Link></li>
            
          </ul>
        </div>
       
      <div className='w-[80%] md:w-[80%] p-4  '>
     
      {activeComponent === 'personaldata' && <PersonaData user={userData}/>}
      {activeComponent === 'postInstituteadmission' && <CreateInstitute user={userData} />}
      {activeComponent === 'myposts' && <MyPost  />}
      {activeComponent === 'editInstitute' && <EditInstitute/>}


    </div>
    </div>):(
      <h1>Not login any account</h1>
    )
        }
    </div>
  )
}

export default Dashboard;