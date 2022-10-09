import os
from pathlib import Path
from flask import Flask

folder = "Data/logs/"
hits_path = folder + "hits.txt"
if not os.path.exists(folder):
    os.makedirs(folder)
    print("directories made")
Path(hits_path).touch(exist_ok=True)
print("file present: check.")

app = Flask(__name__)

def get_count():
    with open(hits_path, "r+") as file:
        val = file.readline()
        if val == '':
            return 0
        else:
            return int(val)

def new_user():
    try:
        hits = int(get_count())
        hits += 1
        with open(hits_path, "w") as file:
            file.write(str(hits))
        return hits
    except Exception as e:
        print(e)


@app.route('/')
def hello():
    users = new_user()
    return 'Hello World! I have been requested {} times.\n'.format(users)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(5000), debug=True)

    # for port in range(5000, 6000):
    #     try:
    #         app.run(host="0.0.0.0", port=int(port), debug=True)
    #     except Exception as e:
    #         pass