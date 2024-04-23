'use client'
import { IoIosAddCircle } from "react-icons/io";
import {TaskCard} from "./TaskCard";
import {TaskCardProps} from './TaskCard';
import { useState, useEffect } from "react";

type TaskCardData = {
    title: string;
    time: string;
    description: string;
    day: string;
};


type DayColumnProps = {
    day: string;
    jsonData?: TaskCardData[];
    toggleAddButton: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    toggleEditButtonOn: () => void;
};



export const DayColumn: React.FC<DayColumnProps> = ({day, jsonData = [], toggleAddButton, toggleEditButtonOn}) => {

    const [filteredTasks, setFilteredTasks] = useState<TaskCardData[]>(jsonData);
    
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
            <button id={day} onClick={(event) => toggleAddButton(event)}>
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
                        day={task.day}
                        toggleEditButton={toggleEditButtonOn}
                        />
                    )
                } else {
                    return null;
                }

            })}            
        </div>
    )
}
