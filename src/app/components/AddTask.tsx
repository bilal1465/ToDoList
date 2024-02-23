'use client'

import { useState, useEffect } from "react";
import { PrioritySelection } from "./PrioritySelection";
import jsonData from "../../taskInfo.json";

export const AddTask = () => {
 


    return (
        <div className="fixed inset-0 flex justify-center items-center bg-opacity-80 backdrop-blur-sm" style={{zIndex: 1}}>
            <div className="flex w-1/2 h-1/2 bg-green-300 rounded justify-center pt-5">
                <div className="flex flex-col bg-white w-11/12 h-5/6 rounded p-2">
                    <div className="flex flex-col w-full space-y-2 h-2/5">
                        <div className="flex h-1/4 space-x-2">
                        <input type="text" placeholder="Title" className="w-1/2 rounded border border-black pl-1"/>
                        <PrioritySelection/>
                        </div>
                        <input type="text" placeholder="Title" className="w-1/2 h-1/4 rounded border border-black pl-1"/>
                    </div>
                    <div className="bg-black w-full h-1/4">

                    </div>
                </div>
            </div>
        </div>
    )
}