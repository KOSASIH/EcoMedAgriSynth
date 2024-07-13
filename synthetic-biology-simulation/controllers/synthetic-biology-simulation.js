import { machineLearning } from '../../machine-learning';

const simulateSystem = async (req, res) => {
  const { systemDesign } = req.body;
  const simulatedSystem = await machineLearning.simulateSystem(systemDesign);
  res.json(simulatedSystem);
};

export { simulateSystem };
