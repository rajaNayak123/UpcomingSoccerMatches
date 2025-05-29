import express from 'express';
import { getUpcomingMatches } from '../controllers/matchController.js';

const router = express.Router();

router.get('/', getUpcomingMatches);

export default router;
