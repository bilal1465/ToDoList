import Image from "next/image";
import {DayColumn} from "./components/DayColumn";
import { IoTerminalSharp } from "react-icons/io5";
import jsonData from "../taskInfo.json";
import {AddTask} from "./components/AddTask";

export default function Home() {

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  return (
    <main className="flex">
      <div className="flex grid grid-cols-7 h-screen w-screen">
        {days.map((day) => (
          <div className="flex flex-1 w-1/7 content-start justify-center border-r">
            <DayColumn day={day} jsonData={jsonData}/>
          </div>
        ))}
      </div>
    </main>
  );
}
