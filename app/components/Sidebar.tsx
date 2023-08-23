"use client";
import Image from "next/image";
import { useState } from "react";

import imgControl from '../../public/control.png';
import imgLogo from '../../public/logo.png';
import imgChart from '../../public/Chart_fill.png';
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "../../public/Chart_fill.png" },
    { title: "Inbox", src: "../../public/Chat.png" },
    { title: "Accounts", src: "../../public/User.png", gap: true },
    { title: "Schedule ", src: "../../public/Calendar.png" },
    { title: "Search", src: "../../public/Search.png" },
    { title: "Analytics", src: "../../public/Chart.png" },
    { title: "Files ", src: "../../public/Folder.png", gap: true },
    { title: "Setting", src: "../../public/Setting.png" },
  ];

  return (
    <div className="flex ">
      <div className={` ${open ? "w-72" : "w-20"} bg-purple-950 h-screen p-5  pt-8 relative duration-300`}>
        <Image src={imgControl} alt=" " className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full  ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
        <div className="flex gap-x-4 items-center">
          <Image src={imgLogo} alt="" className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0" }`}>
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <Image src={imgChart} alt="" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>      
    </div>
  );
};
export default Sidebar;