import { useState } from "react"
import Image from "./Image";

const Navbar = () => {
    const [open,setOpen] = useState(false);

  return (
    <div className="h-16 md:h-20 flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center gap-4 text-2xl font-bold">
            <Image src="logo.png" alt="GrowthAlgo Logo" w={32} h={32} />
            <span>Growth Algo</span>
        </div>
        {/* mobile menu */}
        <div className="md:hidden">
            {/* mobile button */}
            <div onClick={()=>setOpen((prev)=>!prev)} 
            className="text-4xl cursor-pointer">
                {open ? "X" : "☰"}
            </div>
            {/* mobile link list */}
            
            <div className={`w-full h-screen bg-[#e6e6ff] flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"}`}>
            <a href="/">Home</a>
            <a href="/">Trending</a>
            <a href="/">Most Popular</a>
            <a href="/">About</a>
            <a href="/">
                <button className="bg-blue-800 px-8 py-2 rounded-3xl text-white">Login</button>
            </a>
            </div>
        </div>
        
        {/* desktop menu */}
        <div className="hidden md:flex items-center gap-4 xl:gap-8 font-medium">
            <a href="/">Home</a>
            <a href="/">Trending</a>
            <a href="/">Most Popular</a>
            <a href="/">About</a>
            <a href="/">
                <button className="bg-blue-800 px-8 py-2 rounded-3xl text-white">Login</button>
            </a>
        </div>
    </div>
  )
}

export default Navbar