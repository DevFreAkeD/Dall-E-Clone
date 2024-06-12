import express from 'express';
import * as dotenv from 'dotenv';

import Post from '../mongodb/models/Post.js'

dotenv.config();

const router = express.Router();

router.route('/').get((req, res) => {
    res.send('Hello from DALL-E!(post)');
});

export default router;