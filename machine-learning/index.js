import { machineLearningAPI } from './machine-learning-api';

const simulateSystem = async (systemDesign) => {
  const response = await machineLearningAPI.simulateSystem(systemDesign);
  return response.data;
};

export { simulateSystem };
