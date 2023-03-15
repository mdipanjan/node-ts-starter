import { Router } from 'express';
import homeController from '../../controller/home/home.controller';
class HomeRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.configureRoutes();
  }

  private configureRoutes() {
    this.router.get('/', homeController.getData);
  }
}

export default new HomeRouter().router;
