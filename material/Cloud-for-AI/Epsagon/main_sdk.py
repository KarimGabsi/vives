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

@epsagon.python_wrapper
def analyze_containers(client: DockerClient):
    while True:
        containers = client.containers.list(all=True)
        for ctn in containers:
            stats = ctn.stats(decode=None, stream=False)
            pp = pprint.PrettyPrinter(indent=4)
            pp.pprint(stats)

            UsageDelta = stats['cpu_stats']['cpu_usage']['total_usage'] - stats['precpu_stats']['cpu_usage'][
                'total_usage']
            SystemDelta = stats['cpu_stats']['system_cpu_usage'] - stats['precpu_stats']['system_cpu_usage']
            len_cpu = len(stats['cpu_stats']['cpu_usage']['percpu_usage'])
            percentage = (UsageDelta / SystemDelta) * len_cpu * 100

            cpu_usage = round(percentage, 2)

            container = f"{ctn.name} - {ctn.id}"
            cpu_usage = stats["cpu_stats"]["cpu_usage"]["total_usage"]
            epsagon.label(container, cpu_usage)
            print(f"{container} [{ctn.status}]: {cpu_usage} %")

        print('Epsagon trace URL:', epsagon.get_trace_url())
        time.sleep(5)

if __name__ == '__main__':
    client = docker.DockerClient(base_url="tcp://localhost:2375")
    analyze_containers(client=client)
