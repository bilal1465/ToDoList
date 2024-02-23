'use client'

import { useState, useEffect } from "react";
import { PrioritySelection } from "./PrioritySelection";
import { DaysOfWeek } from "./DaysOfWeek";
import jsonData from "../../taskInfo.json";

export const AddTask = () => {
 


    return (
        <div className="fixed inset-0 flex justify-center items-center bg-opacity-80 backdrop-blur-sm" style={{zIndex: 1}}>
            <div className="flex flex-col items-center w-1/2 h-1/2 bg-green-300 rounded justify-center pt-5">
                <div className="flex flex-col bg-white w-11/12 h-5/6 rounded p-2">
                    <div className="flex flex-col w-full space-y-2 h-2/5">
                        <div className="flex h-1/4 space-x-2">
                        <input type="text" placeholder="Title" className="w-1/2 rounded border border-black pl-1"/>
                        <PrioritySelection/>
                        </div>
                        <div className="flex flex-row h-1/4 space-x-2">
                        <input type="text" placeholder="Title" className="w-1/2 rounded border border-black pl-1"/>
                        <div className="w-1/2 pl-1"></div>
                        </div>                        
                    </div>
                    <DaysOfWeek/>
                    <div className="flex w-full h-1/2 pt-2">
                    <textarea placeholder="Description" className="resize-none w-full rounded border border-black pl-1"></textarea>
                    </div>
                </div>
            <div className="flex flex-row space-x-2 pt-1 pb-1 w-11/12">
                <button className="w-full bg-black text-white p-2 text-left rounded hover:scale-95 duration-150">Done</button>
                <button className="w-full bg-black text-white p-2 text-left rounded hover:scale-95 duration-150">Cancel</button>
            </div>
            </div>
        </div>
    )
}