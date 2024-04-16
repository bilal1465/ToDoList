import fs from 'fs';

export let task: any = null;

export async function GET(res: Request) {    
    return new Response(JSON.stringify(task), {status: 200, headers: {'Content-Type': 'application/json'}});
  }


export async function POST(req: Request) {
    const body = await req.json();

    const jsonData = fs.readFileSync("src/app/taskInfo.json", "utf-8");
    let tasks = JSON.parse(jsonData);

    const index = tasks.findIndex((obj: {title: string, time: string, day: string, description: string,}) => obj.description === body.description.description && obj.title === body.title.title)
    
    task = tasks[index];

    return new Response(JSON.stringify(task), {status: 200, headers: {'Content-Type': 'application/json'}});
}

