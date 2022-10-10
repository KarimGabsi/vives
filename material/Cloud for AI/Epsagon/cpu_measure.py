import epsagon
import psutil
import time
epsagon.init(
        token='a5baadfc-6959-488a-bfa8-3adbd267df10',
        app_name='Epsagon Application',
        metadata_only=False,
    )

@epsagon.python_wrapper
def main():
    while True:
        usage = str(psutil.virtual_memory().available * 100 / psutil.virtual_memory().total)
        epsagon.label('CPU Usage', usage)
        # print('Epsagon trace URL:', epsagon.get_trace_url())
        # print(usage)
        time.sleep(10)

if __name__ == '__main__':
    main()