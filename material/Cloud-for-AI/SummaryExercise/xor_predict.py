import numpy as np
from tensorflow import keras

# -*- coding: utf-8 -*-
import json
from flask import Flask, render_template, send_from_directory, request, jsonify, make_response
from functools import wraps, update_wrapper
from datetime import datetime


def nocache(view):
    @wraps(view)
    def no_cache(*args, **kwargs):
        response = make_response(view(*args, **kwargs))
        response.headers['Last-Modified'] = datetime.now()
        response.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0, max-age=0'
        response.headers['Pragma'] = 'no-cache'
        response.headers['Expires'] = '-1'
        return response

    return update_wrapper(no_cache, view)

def load(path):
    return keras.models.load_model(path)

class GUI():
    def __init__(self, host, port):
        self.app = Flask(__name__, template_folder='GUI', static_url_path='/')
        self.app.secret_key = 'CLOUD FOR AI'
        self.app.config['TEMPLATES_AUTO_RELOAD'] = True
        self.host = host
        self.port = port

        @self.app.route('/', methods=['GET', 'POST'])
        @nocache
        def home():
            return render_template('index.html')


        @self.app.route('/predict', methods=["POST"])
        @nocache
        def predict():
            try:
                # LOAD MODEL / CALL PREDICT / ETC
                json_data = json.dumps(request.json)
                json_data = json.loads(json_data)
                print(json_data)
                print(json_data['val1'])

                model = load("mymodel.mdl")
                data = np.array([[json_data['val1'], json_data['val2']]])
                print(data)
                result = model.predict(data)
                print("result: ", result)
                response = {"val1": json_data['val1'], "val2": json_data['val2'], "result": result.__str__()}
                print(result, response)
                return jsonify(response)
            except Exception as ex:
                return jsonify({"exception": ex.__str__()})

        @self.app.route('/static/<path:filename>')
        @nocache
        def sendfile(filename):
            print("hello, ", filename)
            return send_from_directory('GUI/static/', filename)

        self.app.run(self.host, self.port, True)

if __name__ == '__main__':
    myGUI = GUI(host="0.0.0.0", port=5000)
