import { timeLog } from "console";
import { MdCheck } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export type TaskCardProps = {
    title: string; 
    time: string; 
    description: string; 
    day?: string;
};

export const TaskCard: React.FC<TaskCardProps> = ({ title, time, description, }) => {
    return(
        <div className="flex justify-center items-start bg-green-300 p-4 pb-10 rounded shadow-xl relative">
            <div className="flex bg-white items-start rounded overflow-auto">
                <div className="flex flex-col p-1 text-left max-h-3/4 space-y-3 font-encoded-sans-condensed">
                    <h2>{title}</h2>
                    <h2>{time}</h2>
                    <p>{description}</p>
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
