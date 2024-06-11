import express from 'express';
import * as dotenv from 'dotenv';

import Post from '../mongodb/models/Post.js'

dotenv.config();

const router = express.Router();

export default router;