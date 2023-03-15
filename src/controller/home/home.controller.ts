import { Request, Response } from 'express';
import axios from 'axios';

class HomeController {
  public getData = async (req: Request, res: Response): Promise<void> => {
    try {
    	const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
			if(response?.data){
				res.status(200).json({data:response.data});
			}
		
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  }
}

export default new HomeController();
