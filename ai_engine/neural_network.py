import tensorflow as tf
from tensorflow import keras

class NeuralNetwork:
    def __init__(self, input_shape, num_classes):
        self.model = keras.Sequential([
            keras.layers.Dense(64, activation='relu', input_shape=input_shape),
            keras.layers.Dense(32, activation='relu'),
            keras.layers.Dense(num_classes, activation='softmax')
        ])
        self.model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

    def train(self, X_train, y_train, epochs=10, batch_size=32):
        self.model.fit(X_train, y_train, epochs=epochs, batch_size=batch_size, validation_split=0.2)

    def predict(self, X_test):
        return self.model.predict(X_test)
