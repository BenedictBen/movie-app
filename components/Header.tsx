import Link from "next/link";
import { AiOutlineSearch, AiFillBell,AiOutlineUser } from "react-icons/ai";

import { useEffect, useState } from 'react';
import netflix from '../constants/images/netflix.png';
import Image from "next/image";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0){
                setIsScrolled(true)
            } else{
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>

    <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src={netflix}
          alt="logo"
          width={100}
          height={100}
          
        />

        <ul className="hidden space-x-4 md:flex">
            <li className="headerLink">Home</li>
            <li className="headerLink">TV Shows</li>
            <li className="headerLink">Movies</li>
            <li className="headerLink">New & Popular</li>
            <li className="headerLink">My List</li>
        </ul>
    </div>
    <div className="flex items-center space-x-4 text-sm font-light">
        <AiOutlineSearch  className="hidden w-6 h-6 sm:inline"/>
        <p className="hidden lg:inline">Kids</p>
        <AiFillBell className="w-6 h-6"/>
        <Link href="/account">
            <AiOutlineUser size={24}/>
          
        </Link>
    </div>

    </header>
  )
}
