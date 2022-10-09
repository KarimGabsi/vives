import docker
from DockerContainer import *
import time

def show_containers(client: DockerClient):
    containers = client.containers.list(all=True)
    for x in containers:
        print(f"{x}: {x.name} [{x.status}]")

if __name__ == '__main__':
    # docker environment
    client: DockerClient = docker.from_env()
    print("OVERVIEW")
    show_containers(client)

    dc1 = DockerContainer(client=client,
                          image="revelare/gabsikarim_autobuild:latest",
                          name="PythonContainer",
                          ports={5000:5000})

    dc1.start()
    print("DC 1 Started")
    show_containers(client)

    time.sleep(5)
    dc1.stop()
    print("DC 1 Stopped")
    show_containers(client)

    time.sleep(2)
    dc1.remove()
    print("DC 1 Removed")
    show_containers(client)

    client.close()
    print("CLIENT CLOSED")





# con1 = client.containers.get(containers[0].id)
# for line in con1.logs(stream=True):
#     print(line.strip())
