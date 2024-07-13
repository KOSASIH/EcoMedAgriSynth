import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'organ';
import { geneEditingRouter } from './gene-editing/router';
import { geneticCircuitDesignRouter } from './genetic-circuit-design/router';
import { syntheticBiologySimulationRouter } from './synthetic-biology-simulation/router';

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.use('/gene-editing', geneEditingRouter);
app.use('/genetic-circuit-design', geneticCircuitDesignRouter);
app.use('/synthetic-biology-simulation', syntheticBiologySimulationRouter);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
