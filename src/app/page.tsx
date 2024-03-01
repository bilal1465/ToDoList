'use client'
import Image from "next/image";
import {DayColumn} from "./components/DayColumn";
import { IoTerminalSharp } from "react-icons/io5";
import jsonData from "./taskInfo.json";
import {AddTask} from "./components/AddTask";
import { useState, useEffect } from "react";


export default function Home() {

  const [toggle, setIsClicked] = useState(false);

  const toggleAddButton = () => {
      setIsClicked(!toggle);
  }
  
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  return (
    <main className="flex">
      {toggle && <AddTask toggleAddButton={toggleAddButton}/>}
      <div className="flex grid grid-cols-7 h-screen w-screen">
        {days.map((day) => (
          <div className="flex flex w-1/7 justify-center border-r">
            <DayColumn day={day} jsonData={jsonData} toggleAddButton={toggleAddButton}/>
          </div>
        ))}
      </div>
    </main>
  );
}
