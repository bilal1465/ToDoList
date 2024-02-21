import { IoIosAddCircle } from "react-icons/io";
import TaskCard from "./TaskCard";

export default function DayColumn({day}: {day: string}) {
    return (
        <div className="flex items-center flex-col space-y-3 px-5">
            <h1>{day}</h1>
            <IoIosAddCircle />
            <TaskCard />
        </div>
    )
}
