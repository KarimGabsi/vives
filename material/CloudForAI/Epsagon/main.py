# -*- coding: utf-8 -*-
import subprocess
import sys

import epsagon
import psutil
from flask import Flask

epsagon.init(
    token='a5baadfc-6959-488a-bfa8-3adbd267df10',
    app_name='Epsagon Application',
    metadata_only=False,
)

flask_app = Flask(__name__)
counter = 0


@epsagon.measure
@flask_app.route("/")
def index():
    global counter
    counter += 1
    epsagon.label('counter', counter)
    if counter % 2 == 0:
        print('Epsagon trace URL:', epsagon.get_trace_url())
        epsagon.error(Exception("Double Trouble!"))

    mem_available = str(psutil.virtual_memory().available * 100 / psutil.virtual_memory().total)
    return f"Counter: {counter} [CPU: {mem_available} %]"


@epsagon.measure
def epsagon_app():
    flask_app.run(host="0.0.0.0", port=5000, debug=False)


@epsagon.python_wrapper
def main():
    proc = None
    try:
        # proc = subprocess.Popen('python mem_measure.py')

        proc = subprocess.Popen(['python', 'mem_measure.py'], shell=False, stdout=subprocess.PIPE,
                                stderr=subprocess.STDOUT)
        print("Hello world!", flush=True)
        epsagon_app()
    except Exception as e:
        epsagon.error(e)
        print(e)
    finally:
        if proc is not None:
            proc.kill()
        sys.exit()


if __name__ == "__main__":
    main()
