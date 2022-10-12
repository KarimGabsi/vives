import docker

client = docker.DockerClient(base_url="tcp://127.0.0.1:2375")

if __name__ == '__main__':
    for container in client.containers.list(all=True):
        print(container.name)
