import { RiMenuFoldFill } from "react-icons/ri";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";
import { LuBellRing } from "react-icons/lu";
import {User} from "../../assets";


const Navbar = () => {

    const [menu, setMenu] = useState(false);
    const [search, setSearch] = useState(false);
    const [dark, setDark] = useState(false);
    const [userAccount, setUserAccount] = useState(true);

    const handelSearchInput = () => {
        setSearch(prevSearch => !prevSearch)
    }

    return (
        <div className="flex items-center justify-between w-full h-[70px] border-b border-slate-700">
            <div className="flex items-center justify-start gap-4 w-[450px] h-full px-4">
                <div className="menu-btn text-2xl text-white">
                    {
                        menu
                        ? <RiMenuUnfoldFill />
                        : <RiMenuFoldFill />
                        
                    }
                </div>
                <div className=" flex items-center gap-2 w-4/5 ">
                    <div className="text-2xl text-white cursor-pointer" onClick={handelSearchInput}>
                       <IoSearch />
                    </div>
                    <input type="text" className={ search ? "bg-slate-100 border-none outline-none rounded text-xl w-full h-[40px] px-4" : 'hidden'}/>
                </div>
            </div>
            <div className="flex items-center justify-between gap-4 w-[130px] h-full   px-2">
                <div className="dark-light text-xl text-white  ">
                   { dark ? <BsMoonStars /> : <IoSunnyOutline />}
                </div>
                <div className="bell text-xl text-white ">
                   <LuBellRing />
                </div>
                <div className='rounded-full w-10 h-10 bg-sky-400 flex items-center justify-center'>
                    {userAccount
                      ?   <img src={User} alt="" className='rounded-full object-cover w-full h-full'/>
                      :   <h2 className='font-semibold text-xl text-white'>A</h2>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar