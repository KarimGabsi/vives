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

def calculate_cpu_usage(stats):
    try:
        metrics = obj(stats)
        cpuDelta = metrics.cpu_stats.cpu_usage.total_usage - metrics.precpu_stats.cpu_usage.total_usage
        systemDelta = metrics.cpu_stats.system_cpu_usage - metrics.precpu_stats.system_cpu_usage
        return cpuDelta / systemDelta * len(metrics.cpu_stats.cpu_usage.percpu_usage) * 10
    except Exception as e:
        print(e)

def calculate_mem_usage(stats):
    #exercise
    pass

def calculate_disk_usage(stats):
    pass

def calcluate_network_usage(stats):
    pass

def calculate_volume_usage(stats):
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
                cpu_usage = calculate_cpu_usage(stats)

            container = f"{ctn.name} - {ctn.id}"
            epsagon.label(container, cpu_usage)
            print(f"{container} [{ctn.status}]: {cpu_usage} %")

        print('Epsagon trace URL:', epsagon.get_trace_url())
        time.sleep(5)

if __name__ == '__main__':
    client = docker.DockerClient(base_url="tcp://localhost:2375")
    analyze_containers(client=client)
