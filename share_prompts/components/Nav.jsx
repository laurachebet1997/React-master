'use client';

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect} from "react";
import {signIn,signOut,useSession,getProviders} from 'next-auth/react'

const Nav = () => {
  const isuserloggedin = true;
  const [providers, setProviders] = useState(null);
  const [toggleDropDown, setToggleDropDown] = useState(false)

  useEffect(() => {
    const setProviders = async ()=>{
      const response = await getProviders();
      setProviders(response)
    } 
    setProviders();
  },[])

  const toggle = ()=>{
      setToggleDropDown((prev)=>!prev)
}
  

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link  href="/" className="flex gap-2 ">
        < Image  src="/nextjs_13_assets/assets/images/logo.svg" 
                alt="prompt" 
                width={30}
                height={30}
                className="object-contain"/>
        <p className="logo_text">laura</p>
      </Link>
      <div className="sm:flex hidden">
        {isuserloggedin ? (
          <div className="flex gap-3 md:gap-5">
            <Link  href="/create-prompt" className="black_btn ">
              create prompt
            </Link>
            <button type='button'  onClick={signOut} className="outline_btn" > 
              sign out
            </button>
            <Image  src="/nextjs_13_assets/assets/images/logo.svg" 
                alt="prompt" 
                width={37}
                height={37}
                className="rounded-full"/>
          </div>
        ) : (
          <div>
            {
              providers && object.values(providers)
                .map((provider)=> (
                   <button type="button" onClick={()=>signIn(provider.id)} key={provider.name} className="black_btn">
                    sign in
                   </button> ))
            }
          </div>
        )}
      </div>
      <div className="sm:hidden flex-shrink-0 relative">
      {isuserloggedin ? (
          <div className="flex">
            <Image  src="/nextjs_13_assets/assets/images/logo.svg" 
                alt="prompt"
                onClick={toggle} 
                width={37}
                height={37}
                className="rounded-full"/>
            {toggleDropDown && (
              <div className="dropdown">
                <Link  href="/profile" className="dropdown_link" onClick={toggle}>
                     My Profile
                 </Link>
                 <Link  href="/create-prompt" className="dropdown_link" onClick={toggle}>
                     create prompt
                 </Link>
                 <button type='button'  onClick={()=>{toggle; signOut();}} className=" mt-5 w-full black_btn" > 
                     sign out
                </button>
              </div>
            )}    
          </div>
        ) : (
          <div>
            {
              providers && object.values(providers)
                .map((provider)=> (
                   <button type="button" onClick={()=>signIn(provider.id)} key={provider.name} className="black_btn">
                    sign in
                   </button> ))
            }
          </div>
        )}
      </div>
    </nav>
  )
}

export default Nav