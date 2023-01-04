import expressWs, {Application} from "express-ws";
import express from "express";
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import path from 'path'
import { getLogin } from "./routes/getLogin";
import { getRoot } from "./routes/getRoot";
import { getWs } from "./routes/getWs";
import { postLogin } from "./routes/postLogin";
import { NextFunction, Request, Response } from "express";
import { authenticationMiddleware } from "./middlewares/authenticationMiddlewares";

const SECRET_KEY = 'MySecretKeyIsAwesome'

function main() {
  const app = express() as unknown as Application;
  expressWs(app);
  const sockets = new Map();

  app.use(cookieParser(SECRET_KEY))
  app.use(express.static(path.join(__dirname, 'public')))

  getLogin(app)
  postLogin(app)
  app.use(authenticationMiddleware)
  getRoot(app)
  getWs(app, sockets)

  app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(error.stack)
    res.status(500).send('Internal server error')

    next()
  })

  app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
  });
}

main()
