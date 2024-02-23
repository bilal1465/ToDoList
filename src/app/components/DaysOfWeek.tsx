export const DaysOfWeek = () => {

    let days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return (
        <div className="flex flex-row space-x-1">
            {days.map((day, index) => (
                <button key={index} className="bg-black text-white rounded w-1/2 px-1">{day}</button>
            ))}
        </div>
    )
}