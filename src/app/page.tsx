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
  const[isFormSubmittedAdd, setFormSubmittedAdd] = useState(false);
  const[isFormSubmittedEdit, setFormSubmittedEdit] = useState(false);
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
    const response: Response = await fetch('/api/getEditTask/', {
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

  const toggleFormSubmissionAdd = () => {
      setFormSubmittedAdd(true);
      setTimeout(() => {setFormSubmittedAdd(false);}, 3000);
  }
  
  const toggleFormSubmissionEdit = () => {
    setFormSubmittedEdit(true);
    setTimeout(() => {setFormSubmittedEdit(false);}, 3000);
}

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  return (
    <main className="flex overflow-hidden">
      {toggleAdd && <AddTask dayOfTask={dayOfTask} toggleAddButton={toggleAddButton} toggleFormSubmissionAdd={toggleFormSubmissionAdd}/>}
      {toggleEdit && <EditTask dayOfTask={dayOfTask} toggleEditButton={toggleEditButton} toggleFormSubmissionEdit={toggleFormSubmissionEdit} 
      title={editData.title} time={editData.time} description={editData.description} day={editData.day} />}
      <div className="flex grid grid-cols-7 h-screen w-screen">
        {days.map((day) => (
          <div className="flex flex w-1/7 justify-center border-r">
            <DayColumn day={day} jsonData={jsonData} toggleAddButton={toggleAddButton} toggleEditButton={toggleEditButton}/>
          </div>
        ))}       
        {isFormSubmittedAdd && 
          <AnimatedElementRight>
            <div className="p-2 bg-white rounded shadow-lg" >
              <h2 className="text-2xl">Task Added!</h2>
            </div>
          </AnimatedElementRight>
          } 
        {isFormSubmittedEdit && 
          <AnimatedElementRight>
            <div className="p-2 bg-white rounded shadow-lg" >
              <h2 className="text-2xl">Task Edited!</h2>
            </div>
          </AnimatedElementRight>
          } 
      </div>      
    </main>
  );
}
