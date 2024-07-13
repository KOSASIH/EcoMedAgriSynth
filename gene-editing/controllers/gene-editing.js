import { nanopore } from '../../nanopore';

const editGene = async (req, res) => {
  const { geneSequence, targetSequence } = req.body;
  const editedGene = await nanopore.editGene(geneSequence, targetSequence);
  res.json(editedGene);
};

export { editGene };
