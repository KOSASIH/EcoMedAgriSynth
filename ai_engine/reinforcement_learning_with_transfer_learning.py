import gym
import ray
import tensorflow as tf

class ReinforcementLearningAgentWithTransferLearning:
    def __init__(self, env_name, pre_trained_model):
        self.env = gym.make(env_name)
        self.agent = ray.agent.PPOAgent(self.env.observation_space, self.env.action_space)
        self.pre_trained_model = pre_trained_model

    def train(self, num_episodes=1000):
        for episode in range(num_episodes):
            observation = self.env.reset()
            done = False
            rewards = 0
            while not done:
                action = self.agent.act(observation)
                observation, reward, done, _ = self.env.step(action)
                rewards += reward
            print(f'Episode {episode+1}, Reward: {rewards}')

        # Transfer learning
        self.agent.set_weights(self.pre_trained_model.get_weights())

    def act(self, observation):
        return self.agent.act(observation)
