import jsonData from '../../taskInfo.json';

export const PrioritySelection = () => {

    const numberOfOptions: number[] = Array.from({length: jsonData.length}, (_,i) =>i);

    return(
        <select className="w-1/2 rounded border border-black bg-white pl-1">
            {numberOfOptions.map((taskNumber) => (
                <option>{taskNumber + 1}</option>
            ))}
        </select>
    )
}