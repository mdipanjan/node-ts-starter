import express, { Application } from 'express';
import * as dotenv from 'dotenv'
import cors from "cors";
import morgan from 'morgan'
import bodyParser from 'body-parser';
import homeRouter from './routes/home/homeRouter';
dotenv.config()
const PORT: number = parseInt(process.env.PORT || '3000', 10);

class Server {
    private app: Application;

    constructor() {
      this.app = express();
			this.configApp()
      this.configureMiddleware();
      this.configureRoutes();
			
    }
		private configApp(): void {

			this.app.use(cors());
			this.app.use(bodyParser.json())
			this.app.use(morgan(':method :url :status :response-time ms - :res[content-length]')
			);
    }
    private configureMiddleware() {
      // TODO: Configure middleware here
    }
  
    private configureRoutes(): void {
			this.app.use('/', homeRouter);
    }
  
    public start(port: number): void {
      this.app.listen(port, () => {
        console.log(`Server started on port ${port}`);
      });
    }
  }
  
  const server = new Server();
  server.start(PORT);