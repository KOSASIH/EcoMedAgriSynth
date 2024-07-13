import tensorflow as tf
from tensorflow import keras
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Load dataset
dataset = pd.read_csv('dataset.csv')

# Preprocess data
X = dataset.drop('target', axis=1)
y = dataset['target']

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create AI model
model = keras.Sequential([
    keras.layers.Dense(64, activation='relu', input_shape=(X.shape[1],)),
    keras.layers.Dense(32, activation='relu'),
    keras.layers.Dense(1, activation='sigmoid')
])

# Compile AI model
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# Train AI model
model.fit(X_train, y_train, epochs=10, batch_size=32, validation_data=(X_test, y_test))

# Evaluate AI model
y_pred = model.predict(X_test)
y_pred_class = (y_pred > 0.5).astype(int)
accuracy = accuracy_score(y_test, y_pred_class)
print(f'AI model accuracy: {accuracy:.3f}')
