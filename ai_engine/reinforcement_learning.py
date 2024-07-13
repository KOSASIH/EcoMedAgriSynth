import gym
import ray

class ReinforcementLearningAgent:
    def __init__(self, env_name):
        self.env = gym.make(env_name)
        self.agent = ray.agent.PPOAgent(self.env.observation_space, self.env.action_space)

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

    def act(self, observation):
        return self.agent.act(observation)
