import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  
  const openai = new OpenAIApi(configuration);
  
  router.route('/').get((req, res) => {
    req.send('Hello from DALL-E!');
  });
  
export default router;