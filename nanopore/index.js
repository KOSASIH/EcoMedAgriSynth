import { nanoporeAPI } from './nanopore-api';

const editGene = async (geneSequence, targetSequence) => {
  const response = await nanoporeAPI.editGene(geneSequence, targetSequence);
  return response.data;
};

export { editGene };
