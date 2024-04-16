import fs from 'fs';
import { task } from '../getEditTask/route';

export async function GET(res: Request) {    
    return new Response('OK');
  }


export async function POST(req: Request) {
    const body = await req.json();
    console.log(task.description);
    console.log(body);
    const jsonData = fs.readFileSync("src/app/taskInfo.json", "utf-8");
    let tasks = JSON.parse(jsonData);
    const index = tasks.findIndex((obj: {title: string, time: string, day: string, description: string,}) => obj.description === task.description && obj.title === task.title)
    console.log(index);
    if (index !== -1) {
        tasks.splice(index, 1, body);
    }
    console.log(tasks);
    const updatedTasks = JSON.stringify(tasks);
    console.log(updatedTasks)
    fs.writeFileSync("src/app/taskInfo.json", updatedTasks, "utf-8");

    return new Response('OK');
}

