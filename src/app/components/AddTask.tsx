'use client'

import { useState, FormEvent } from "react";
import { PrioritySelection } from "./PrioritySelection";

type props = {
    toggleAddButton: () => void;
}

export const AddTask: React.FC<props> = ({toggleAddButton}) => {
 
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const [isClicked, setIsClicked] = useState<boolean[]>(new Array(days.length).fill(false));

    const [formData, setFormData] = useState({
        title: '',
        time: '',
        day: '',
        description: '',
      });
    
      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await fetch('/api/updateTask/', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          }
        })
      }
    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };

      const handleClick = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
        event.preventDefault();
        const newIsClicked = Array.from({ length: isClicked.length }).fill(false) as boolean[];
        newIsClicked[index] = true;
        setIsClicked(newIsClicked);
        setFormData({ ...formData, day: event.currentTarget.name });
      };
    

    const done = (e: FormEvent<HTMLFormElement>) => {
        handleSubmit(e);
        toggleAddButton();
    }
    
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-opacity-80 backdrop-blur-sm" style={{zIndex: 1}}>
        <form onSubmit={done} className="flex flex-col items-center w-1/2 h-1/2 bg-green-300 rounded justify-center pt-5">
            <div className="flex flex-col bg-white w-11/12 h-5/6 rounded p-2">
            <div className="flex flex-col w-full space-y-2 h-2/5">
                <div className="flex h-1/4 space-x-2">
                <input type="text" placeholder="Title" name="title" onChange={handleChange} className="w-1/2 rounded border border-black pl-1"/>
                <PrioritySelection/>
                </div>
                <div className="flex flex-row h-1/4 space-x-2">
                <input type="text" placeholder="Time" name="time" onChange={handleChange} className="w-1/2 rounded border border-black pl-1"/>
                <div className="w-1/2 pl-1"></div>
                </div>                        
            </div>
            <div className="flex flex-row space-x-1">
                {days.map((day, index) => (
                    <button
                        key={index}
                        onClick={(event) => handleClick(event, index)}
                        name={day}
                        className={`${isClicked[index] ? 'bg-blue-700' : 'bg-black'} text-white rounded w-1/2 px-1 hover:bg-blue-700 hover:scale-105 duration-150`}
                    >
                        {day}
                    </button>
            ))}
            </div>
            <div className="flex w-full h-1/2 pt-2">
                <textarea placeholder="Description" name="description" onChange={handleChange} className="resize-none w-full rounded border border-black pl-1"></textarea>
            </div>
            </div>
            <div className="flex flex-row space-x-2 pt-1 pb-1 w-11/12">
            <button type="submit" className="w-full bg-black text-white p-2 text-left rounded hover:scale-95 duration-150">Done</button>
            <button type="button" onClick={toggleAddButton} className="w-full bg-black text-white p-2 text-left rounded hover:scale-95 duration-150">Cancel</button>
            </div>
        </form>
        </div>
    )
}