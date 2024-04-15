'use client'
import Image from "next/image";
import {DayColumn} from "./components/DayColumn";
import { IoTerminalSharp } from "react-icons/io5";
import jsonData from "./taskInfo.json";
import {AddTask} from "./components/AddTask";
import { useState, useEffect } from "react";
import { truncate } from "fs";
import { AnimatedElementRight } from "./components/AnimatedElementRight";
import { EditTask } from "./components/EditTask";


export default function Home() {

  const [toggleAdd, setAddIsClicked] = useState(false);
  const [dayOfTask, setDay] = useState("");
  const[isFormSubmitted, setFormSubmitted] = useState(false);
  const [toggleEdit, setEditIsClicked] = useState(false);
  const [editData, setEditData] = useState({
    title: '',
    time: '',
    day: '',
    description: '',
  });

  const toggleAddButton = (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (event) {
      const clickedDay = event.currentTarget.id;
      setDay(clickedDay)
    }  
    setAddIsClicked(!toggleAdd);      
  }

  const getTaskToEdit = async () => {
    const response: Response = await fetch('/api/editTask/', {
      method: 'GET',
    })

  const responseData = await response.json();
  setDay(responseData.day)
  setEditData({...responseData});
  }

  const toggleEditButton = async (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    await getTaskToEdit();
    setEditIsClicked(!toggleEdit);
  }

  const toggleFormSubmission = () => {
      setFormSubmitted(true);
      setTimeout(() => {setFormSubmitted(false);}, 3000);
  }
  
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  return (
    <main className="flex overflow-hidden">
      {toggleAdd && <AddTask dayOfTask={dayOfTask} toggleAddButton={toggleAddButton} toggleFormSubmission={toggleFormSubmission}/>}
      {toggleEdit && <EditTask dayOfTask={dayOfTask} toggleEditButton={toggleEditButton} toggleFormSubmission={toggleFormSubmission} 
      title={editData.title} time={editData.time} description={editData.description} day={editData.day} />}
      <div className="flex grid grid-cols-7 h-screen w-screen">
        {days.map((day) => (
          <div className="flex flex w-1/7 justify-center border-r">
            <DayColumn day={day} jsonData={jsonData} toggleAddButton={toggleAddButton} toggleEditButton={toggleEditButton}/>
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
