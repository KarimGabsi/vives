import time

import epsagon
import psutil
import GPUtil

epsagon.init(
    token='a5baadfc-6959-488a-bfa8-3adbd267df10',
    app_name='MyFirstDashboards',
    metadata_only=False,
)

@epsagon.python_wrapper
def main():
    while True:
        cpu_usage = psutil.cpu_percent(interval=None)
        epsagon.label("cpu_usage", cpu_usage)

        memory_mb = psutil.virtual_memory().available >> 20 # in MB
        memory_gb = psutil.virtual_memory().available >> 30 # in GB

        epsagon.label("memory_mb", memory_mb) # trace
        epsagon.label("memory_gb", memory_gb) # trace

        gpus = []
        for gpu in GPUtil.getGPUs():
            gpu_info = f"{gpu.name} [{gpu.uuid}]"
            gpu_load = gpu.load
            gpus.append(f"{gpu_info}:{gpu_load} %")
            epsagon.label(gpu_info, gpu_load) # trace

        print(f"[cpu usage: {cpu_usage} %] [memory: {memory_gb} GB] {gpus}")
        print('Epsagon trace URL:', epsagon.get_trace_url())
        # limit amount of traces.
        time.sleep(5)

if __name__ == '__main__':
    main()