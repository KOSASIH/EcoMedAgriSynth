import { ontologyAPI } from './ontology-api';

const designCircuit = async (geneSequence, promoterSequence) => {
  const response = await ontologyAPI.designCircuit(geneSequence, promoterSequence);
  return response.data;
};

export { designCircuit };
