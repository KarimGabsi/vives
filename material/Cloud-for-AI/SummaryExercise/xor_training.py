import numpy as np
from tensorflow import keras
from keras.models import Sequential
from keras.layers.core import Dense, Activation
from keras.optimizers import SGD

training_data = np.array([[0,0],[0,1],[1,0],[1,1]])
target_data = np.array([[0],[1],[1],[0]])

k_model = Sequential()
k_model.add(Dense(8, input_dim=2))
k_model.add(Activation('tanh'))
k_model.add(Dense(1))
k_model.add(Activation('sigmoid'))

sgd = SGD(lr=0.1)
k_model.compile(loss='binary_crossentropy', optimizer=sgd, metrics=["accuracy"])

def train(model, epochs: int):
    return model.fit(training_data, target_data, epochs=epochs, verbose=2)

def predict(model, input: np.array):
    return model.predict(input)

def save(name: str):
    k_model.save(name)

if __name__ == '__main__':
    result = train(k_model, epochs=10)
    print(predict(k_model, input=training_data))
    print("accuracy: ", result.history['accuracy'][-1] * 100, ' %')
    save("mymodel")