import { createServer } from "json-server";

const server = createServer();
const router = server.router("src/database/db.json"); // اینجا db.json باید فایل دیتای شما باشه
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
