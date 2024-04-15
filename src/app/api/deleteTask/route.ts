import fs from 'fs';

export async function GET(request: Request) {
  return new Response (null)
}

export async function POST(req: Request) {
    const body = await req.json();

    const jsonData = fs.readFileSync("src/app/taskInfo.json", "utf-8");
    let tasks = JSON.parse(jsonData);

    const index = tasks.findIndex((obj: {title: string, time: string, day: string, description: string,}) => obj.description === body.description.description && obj.title === body.title.title)
    if (index !== -1) {
        tasks.splice(index, 1);
    }

    const updatedTasks = JSON.stringify(tasks);

    fs.writeFileSync("src/app/taskInfo.json", updatedTasks, "utf-8");

    return new Response('OK') 

}