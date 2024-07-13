import express from 'express';
import { syntheticBiologySimulationController } from '../controllers/synthetic-biology-simulation';

const router = express.Router();

router.post('/simulate-system', syntheticBiologySimulationController.simulateSystem);

export { router as syntheticBiologySimulationRouter };
