import fs from 'fs';

export async function GET(request: Request) {
  return new Response (null)
}

export async function POST(req: Request) {

  const body = await req.json();

  const jsonData = fs.readFileSync("src/app/taskInfo.json", "utf-8");
  let tasks = JSON.parse(jsonData);

  tasks.push(body);
  console.log(tasks);
  const updatedTasks = JSON.stringify(tasks);

  fs.writeFileSync("src/app/taskInfo.json", updatedTasks, "utf-8");

  return new Response('OK')

}