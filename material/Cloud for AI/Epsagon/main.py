# -*- coding: utf-8 -*-
import sys
from flask import Flask
import psutil
import subprocess
import epsagon

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

    usage = str(psutil.virtual_memory().available * 100 / psutil.virtual_memory().total)
    return f"Counter: {counter} [CPU: {usage} %]"


@epsagon.measure
def epsagon_app():
    flask_app.run(host="0.0.0.0", port=5000, debug=False)


@epsagon.python_wrapper
def main():
    proc = None
    try:
        proc = subprocess.Popen('python cpu_measure.py')
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
