import { ontology } from '../../ontology';

const designCircuit = async (req, res) => {
  const { geneSequence, promoterSequence } = req.body;
  const designedCircuit = await ontology.designCircuit(geneSequence, promoterSequence);
  res.json(designedCircuit);
};

export { designCircuit };
