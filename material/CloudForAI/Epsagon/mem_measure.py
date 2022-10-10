import time

import epsagon
import psutil

epsagon.init(
    token='a5baadfc-6959-488a-bfa8-3adbd267df10',
    app_name='MyFirstDashboards',
    metadata_only=False,
)

@epsagon.python_wrapper
def main():
    while True:
        mem_available = str(psutil.virtual_memory().available * 100 / psutil.virtual_memory().total)
        epsagon.label("MEM AVAILABLE", mem_available)
        print('Epsagon trace URL:', epsagon.get_trace_url())
        print(mem_available)
        time.sleep(10)

if __name__ == '__main__':
    main()