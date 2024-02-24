'use client'
import { IoIosAddCircle } from "react-icons/io";
import {TaskCard} from "./TaskCard";
import {TaskCardProps} from './TaskCard';
import { useState, useEffect } from "react";

type DayColumnProps = {
    day: string;
    jsonData?: TaskCardProps[];
    toggleAddButton: () => void;
};




export const DayColumn: React.FC<DayColumnProps> = ({day, jsonData = [], toggleAddButton}) => {

    const [filteredTasks, setFilteredTasks] = useState<TaskCardProps[]>(jsonData);
    
    const handleFilter = (day: string) => {
        const filtered = jsonData.filter((task) => task.day === day);
        setFilteredTasks(filtered);
    }

    useEffect(() => {
        handleFilter(day);
    }, [day, jsonData]);    

    return (
        <div className="flex items-center flex-col space-y-3 px-5">
            <h1 className="font-sriracha text-3xl">{day}</h1>
            <button onClick={() => toggleAddButton()}>
                <IoIosAddCircle size={30}/>
            </button>
            
            {filteredTasks.map((task, index) => {
                if (task.day === day) {
                    return (
                        <TaskCard
                        key={index} 
                        title={task.title} 
                        time={task.time} 
                        description={task.description}
                        />
                    )
                } else {
                    return null;
                }

            })}            
        </div>
    )
}
