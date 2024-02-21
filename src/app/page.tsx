import Image from "next/image";
import DayColumn from "./components/DayColumn";
export default function Home() {
  return (
    <main className="flex">
      <div className="flex grid grid-cols-7 h-screen">
        <div className="flex flex-1 w-1/7 content-start justify-center border-r">
          <DayColumn day="Monday"/>
        </div>
        <div className="flex flex-1 w-1/7 content-start justify-center border-r">
          <DayColumn day="Tuesday"/>
        </div>
        <div className="flex flex-1 w-1/7 content-start justify-center border-r">
          <DayColumn day="Wednesday"/>
        </div>
        <div className="flex flex-1 w-1/7 content-start justify-center border-r">
          <DayColumn day="Thursday"/>
        </div>
        <div className="flex flex-1 w-1/7 content-start justify-center border-r">
          <DayColumn day="Friday"/>
        </div>
        <div className="flex flex-1 w-1/7 content-start justify-center border-r">
          <DayColumn day="Saturday"/>
        </div>
        <div className="flex flex-1 w-1/7 content-start justify-center ">
          <DayColumn day="Sunday"/>
        </div>
      </div>
    </main>
  );
}
