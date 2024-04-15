import fs from 'fs';

export async function GET(request: Request) {
    const jsonData = fs.readFileSync("src/app/taskInfo.json", "utf-8");
    let tasks = JSON.parse(jsonData);

    console.log(tasks);

    return new Response('OK')
  }