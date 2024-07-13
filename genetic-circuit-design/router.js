import express from 'express';
import { geneticCircuitDesignController } from '../controllers/genetic-circuit-design';

const router = express.Router();

router.post('/design-circuit', geneticCircuitDesignController.designCircuit);

export { router as geneticCircuitDesignRouter };
