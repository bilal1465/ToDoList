import { IoIosAddCircle } from "react-icons/io";

export default function DayColumn({day}: {day: string}) {
    return (
        <div className="flex justify-center items-center flex-col">
            <h1 className="pb-2">{day}</h1>
            <IoIosAddCircle />
        </div>
    )
}
