'use client'
import Image from "next/image";
import {DayColumn} from "./components/DayColumn";
import { IoTerminalSharp } from "react-icons/io5";
import jsonData from "./taskInfo.json";
import {AddTask} from "./components/AddTask";
import { useState, useEffect } from "react";
import { truncate } from "fs";
import { AnimatedElementRight } from "./components/AnimatedElementRight";


export default function Home() {

  const [toggle, setIsClicked] = useState(false);
  const [dayOfTask, setDay] = useState("");
  const[isFormSubmitted, setFormSubmitted] = useState(false);

  const toggleAddButton = (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (event) {
      const clickedDay = event.currentTarget.id;
      setDay(clickedDay)
    }  
    setIsClicked(!toggle);      
  }

  const toggleFormSubmission = () => {
      setFormSubmitted(true);
      setTimeout(() => {setFormSubmitted(false);}, 3000);
  }
  
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  return (
    <main className="flex overflow-hidden">
      {toggle && <AddTask dayOfTask={dayOfTask} toggleAddButton={toggleAddButton} toggleFormSubmission={toggleFormSubmission}/>}
      <div className="flex grid grid-cols-7 h-screen w-screen">
        {days.map((day) => (
          <div className="flex flex w-1/7 justify-center border-r">
            <DayColumn day={day} jsonData={jsonData} toggleAddButton={toggleAddButton}/>
          </div>
        ))}       
        {isFormSubmitted && 
          <AnimatedElementRight>
            <div className="p-2 bg-white rounded shadow-lg" >
              <h2 className="text-2xl">Task Added!</h2>
            </div>
          </AnimatedElementRight>
          } 
      </div>      
    </main>
  );
}
