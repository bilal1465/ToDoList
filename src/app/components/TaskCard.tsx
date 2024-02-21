import { MdCheck } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function TaskCard() {
    return(
        <div className="flex h-[25%] justify-center items-center parent-div bg-green-300 pb-4 rounded shadow-xl relative">
            <div className="child-div bg-white w-5/6 h-3/4 items-start rounded p-1">
                <div className="text-left space-y-3">
                    <h2>Lorem Ipsum</h2>
                    <h2>9:00 AM</h2>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                </div>
            </div>
            <div className="flex items-center absolute bottom-0 right-0 mr-4 grid grid-cols-3">
                <MdCheck size={40} />
                <MdEdit size={30} />
                <MdDelete size={30} />
            </div>
            
        </div>
    )
}