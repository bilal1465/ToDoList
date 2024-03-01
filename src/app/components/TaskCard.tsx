import { timeLog } from "console";
import { MdCheck } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

export type TaskCardProps = {
    title: string; 
    time: string; 
    description: string; 
    day: string;
};

export const TaskCard: React.FC<TaskCardProps> = ({ title, time, description, day }) => {

    const data = {
        title: {title},
        time: {time},        
        description: {description},
        day: {day},
    };

      const handleClick: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
        await fetch('/api/deleteTask/', {
          method: 'POST',
          body: JSON.stringify(data),
        })
      }

    return(
        <div className="flex justify-center items-start bg-green-300 p-4 pb-10 w-[10dvw] rounded shadow-xl relative">
            <div className="flex bg-white items-start w-full rounded overflow-auto">
                <div className="flex flex-col p-1 text-left max-h-3/4 space-y-3 font-encoded-sans-condensed">
                    <h2>{title}</h2>
                    <h2>{time}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="flex items-center absolute bottom-0 right-0 mr-4 grid grid-cols-3">
                <button onClick={handleClick}><MdCheck size={40} /></button>
                <button><MdEdit size={30} /></button>
                <button onClick={handleClick}><MdDelete size={30} /></button>
            </div>            
        </div>
    )
}
