import express from 'express';
import { geneEditingController } from '../controllers/gene-editing';

const router = express.Router();

router.post('/edit-gene', geneEditingController.editGene);

export { router as geneEditingRouter };
