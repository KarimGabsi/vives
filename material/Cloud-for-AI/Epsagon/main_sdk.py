import docker
from docker.client import DockerClient
import epsagon
import time

import pprint

epsagon.init(
    token='a5baadfc-6959-488a-bfa8-3adbd267df10',
    app_name='MyFirstDashboards',
    metadata_only=False,
)

class obj(object):
    def __init__(self, d):
        for k, v in d.items():
            if isinstance(k, (list, tuple)):
                setattr(self, k, [obj(x) if isinstance(x, dict) else x for x in v])
            else:
                setattr(self, k, obj(v) if isinstance(v, dict) else v)

def measure_VM_cpu(stats):
    try:
        metrics = obj(stats)
        cpuDelta = metrics.cpu_stats.cpu_usage.total_usage - metrics.precpu_stats.cpu_usage.total_usage
        systemDelta = metrics.cpu_stats.system_cpu_usage - metrics.precpu_stats.system_cpu_usage
        return cpuDelta / systemDelta * len(metrics.cpu_stats.cpu_usage.percpu_usage) * 10
    except Exception as e:
        print(e)

def measure_VM_mem(stats):
    # measure memory usage from container
    pass

def measure_VM_disk(stats):
    # measure disk usage from container
    pass

def measure_VM_network(stats):
    # measure network usage from container
    pass

def measure_VM_volumes(client: DockerClient):
    # measure volumes from Docker Engine
    pass

def measure_HOST_GPUs():
    # measure HOST Graphic Processing Units
    pass

def measure_HOST_CPUs():
    # measure cpu usage from host computer
    pass

def measure_HOST_MEM():
    # measure memory usage from host computer
    pass

@epsagon.python_wrapper
def analyze_containers(client: DockerClient):
    pp = pprint.PrettyPrinter(indent=4)

    while True:
        containers = client.containers.list(all=True)
        for ctn in containers:
            stats = ctn.stats(decode=False, stream=False)
            # pp.pprint(stats)
            cpu_usage = 0
            if ctn.status == "running":
                cpu_usage = measure_VM_cpu(stats)

            container = f"{ctn.name} - {ctn.id}"
            epsagon.label(container, cpu_usage)
            print(f"{container} [{ctn.status}]: {cpu_usage} %")

        print('Epsagon trace URL:', epsagon.get_trace_url())
        time.sleep(5)

if __name__ == '__main__':
    client = docker.DockerClient(base_url="tcp://localhost:2375")
    analyze_containers(client=client)
